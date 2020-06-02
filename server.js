const app = require('express')();
 const cds = require('@sap/cds');
 cds.connect.to('db');
 cds.mtx.in(app);             // serve cds-mtx APIs
 cds.serve('all').in(app);   // serve business services
 const PORT = process.env.PORT || 4004;
 app.listen(PORT);