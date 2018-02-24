const ROOT_PATH = process.cwd();

const Graph = require('node-all-paths');
const logger = require('winston');

const { httpStatus } = require(`${ROOT_PATH}/server/enums`);
const broadbandServices = require(`${ROOT_PATH}/server/broadband/services`);

const getChildNode = (broadband, broadbands) => {
  const childNode = {};
  
  if (broadband.bundles && broadband.bundles.length) {
    broadband.bundles.forEach((bundle) => {
      const destNode = broadbands.find(broadbandDest => broadbandDest.name === bundle.name);
      childNode[bundle.name] = bundle.plusPrice + broadband.price + destNode.price;
    });
  }
  
  return childNode;
};

const buildGraph = (broadbands) => {
  const graph = new Graph();
  
  broadbands.forEach((broadband) => {
    const childNode = getChildNode(broadband, broadbands);
    
    graph.addNode(broadband.name, childNode);
  });
  
  return graph;
};

const getAllPaths = (broadbands, graph) => {
  const allPaths = [];
  const broadbandsName = broadbands.map(broadband => broadband.name);
  
  broadbandsName.forEach((firstNodeName) => {
    broadbandsName.forEach((secondNodeName) => {
      if (firstNodeName !== secondNodeName) {
        const path = graph.path(firstNodeName, secondNodeName, { cost: true });
        
        if (Array.isArray(path)) {
          allPaths.push(path);
        }
      }
    });
  });
  
  return allPaths;
};

const getBroadbandBundles = (allPaths, broadbands) => {
  /* The division by 2 is due to the fact that the algorithm calculates */
  /* the distance between round-trip nodes */
  const broadbandBundles = allPaths.map(path => ({ name: path[0].path, totalPrice: path[0].cost / 2 }));
  
  broadbands.forEach((broadband) => {
    broadbandBundles.push({ name: broadband.name, totalPrice: broadband.price });
  });
  
  return broadbandBundles;
};

const generateBroadbandsBundles = (broadbands) => {
  const graph = buildGraph(broadbands);
  
  const allPaths = getAllPaths(broadbands, graph);
  
  return getBroadbandBundles(allPaths, broadbands);
};

module.exports = (req, res) => {
  let message;
  
  const broadbands = broadbandServices.findBroadbands();
    
  if (!broadbands.length) {
    message = 'Could not find broadbands.';
    logger.error(message);
    
    return res.status(httpStatus.notFound).send();
  }
  
  const broadbandsBundles = generateBroadbandsBundles(broadbands);

  res.status(httpStatus.ok).send(broadbandsBundles);
};
