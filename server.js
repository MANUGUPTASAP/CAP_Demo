const app = require('express')();
const cds = require('@sap/cds');

cds.connect.to('db');       // connect to multitenant datasource
cds.mtx.in(app)            // serve cds-mtx APIs
cds.serve('all').in(app); // serve all CAP business services

const PORT = process.env.PORT || 4004;
app.listen(PORT);