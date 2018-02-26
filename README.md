# Telecom Bundle

The object of this project is to provide a FullStack application to list bundles of broadbands.

## Install

First of all, you need install _NodeJS_ version 8.9.3 (LTS). For more information about the installation, 
you may see in [NodeJS](https://nodejs.org/en/) Website.

To install the application, just unzip the received zip file or clone from GitHub:

```
git clone https://github.com/AlexRobertoCorrea/telecom-bundle.git
```

Next, enter in the folder telecom-bundle:

```
cd telecom-bundle
```

So, install the packages needed:

```
npm install
```

Next, go to client folder (*cd client*) and install the Frontend dependencies:

```
npm install
```

## Usage

If your wish to run the application, enter the folder:

```
cd telecom-bundle
```

and run:

```
npm run dev
```

and the application will be available in the port _3000_. In other words, the prefix of APIs is _http://localhost:3000_.

If you want to run the automated tests, run:

```
npm test
```

## Technical decisions

By familiarity, we decided to use _NodeJS_ as middleware, _Express_ as Backend Framework and _JavaScript_ with _EcmaScript 6_ as the language. 
In Backend, _Mocha_ and _Chai_ were used as Tests Framework and we set at least 90% of coverage. Nowadays, we have about 96% of lines coverage, which is awesome! Therefore, _Eslint_ was used to check our 
code pattern and it works well when we run the tests.

In Frontend, we used _React_ with _Redux_ and _SASS_ as _CSS_ preprocessor. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). [Material UI](http://www.material-ui.com) 
was used as our main material because it is similar to _Angular Material_, which I am used to use.

## Improments

The project works but not as well as desired. So, it's missing:

- Stylization at Frontend;
- Frontend unit tests;
- Run the application in production mode.