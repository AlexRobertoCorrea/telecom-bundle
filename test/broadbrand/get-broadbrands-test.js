const ROOT_PATH = process.cwd();

const { assert } = require('chai');
const logger = require('winston');
const sinon = require('sinon');
const supertest = require('supertest');

const app = require(`${ROOT_PATH}/server/application`);
const { httpStatus } = require(`${ROOT_PATH}/server/enums`);
const broadbandServices = require(`${ROOT_PATH}/server/broadband/services`);

const getBroadbandsExpected = () => (
  [{
    name: ['Broadband1', 'Landline'],
    totalPrice: 35
  }, {
    name: ['Broadband1', 'AddonBB'],
    totalPrice: 50
  }, {
    name: ['Broadband2', 'TV1', 'Landline'],
    totalPrice: 125
  }, {
    name: ['Broadband2', 'AddonBB'],
    totalPrice: 60
  }, {
    name: ['Broadband2', 'TV1'],
    totalPrice: 100
  }, {
    name: ['Broadband2', 'TV2'],
    totalPrice: 160
  }, {
    name: ['Broadband2', 'TV1', 'AddonTV'],
    totalPrice: 135
  }, {
    name: ['TV1', 'Landline'],
    totalPrice: 75
  }, {
    name: ['TV1', 'AddonTV'],
    totalPrice: 85
  }, {
    name: ['TV2', 'Landline'],
    totalPrice: 125
  }, {
    name: ['TV2', 'AddonTV'],
    totalPrice: 135
  }, {
    name: 'Broadband1',
    totalPrice: 40
  }, {
    name: 'Landline',
    totalPrice: 35
  }, {
    name: 'Broadband2',
    totalPrice: 60
  }, {
    name: 'AddonBB',
    totalPrice: 10
  }, {
    name: 'TV1',
    totalPrice: 50
  }, {
    name: 'TV2',
    totalPrice: 120
  }, {
    name: 'AddonTV',
    totalPrice: 0
  }]
);

describe('GET /list-all-broadband tests', () => {
  let sandbox;
  
  before(() => {
    sandbox = sinon.sandbox.create();
  });
  
  afterEach(() => {
    sandbox.restore();
  });
  
  context('Success cases:', () => {
    it('Get a list of broadbands successfully', (done) => {
      const url = '/list-all-broadband';
      
      supertest(app)
        .get(url)
        .end((err, res) => {
          assert.isNull(err);
          assert.equal(httpStatus.ok, res.statusCode);
          
          const broadbandsExpected = getBroadbandsExpected();
          const broadbands = res.body;
          
          assert.deepEqual(broadbandsExpected, broadbands);
          done();
        });
    });
  });
  
  context('Error cases:', () => {
    it('Should return a error because broadbands.json is empty', (done) => {
      const url = '/list-all-broadband';
  
      const emptyBroadbandsFunction = () => [];
      const fakeService = sinon.stub(broadbandServices, 'findBroadbands')
        .callsFake(emptyBroadbandsFunction);
      
      sandbox.spy(logger, 'error');
  
      supertest(app)
        .get(url)
        .end((err, res) => {
          assert.isNull(err);
          assert.equal(httpStatus.notFound, res.statusCode);
    
          const expectedMessage = 'Could not find broadbands.';
          sinon.assert.calledOnce(broadbandServices.findBroadbands);
          sinon.assert.calledWith(logger.error, expectedMessage);
          fakeService.restore();
          done();
        });
    });
  });
});
