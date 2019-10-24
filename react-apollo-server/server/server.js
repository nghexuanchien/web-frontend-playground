const express = require('express');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const { ApolloServer } = require('apollo-server-express');

const app = express();

app.use(bodyParser.json());

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;