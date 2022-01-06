const express = require('express');
const app = express();

const wrapperRoutes = require('./api/routes/wrapper');
const createDIDRoutes = require('./api/routes/createDID');
const signerRoutes = require('./api/routes/signer');
const verifierRoutes = require('./api/routes/verifier');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/wrap', wrapperRoutes);
app.use('/createDID', createDIDRoutes);
app.use('/sign', signerRoutes);
app.use('/verify', verifierRoutes);

module.exports = app;