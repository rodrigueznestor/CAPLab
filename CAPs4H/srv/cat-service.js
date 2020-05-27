const cds = require('@sap/cds')

/** Service implementation for CatalogService */
module.exports = cds.service.impl(async function () {
    const { TestS4h } = this.entities
    const extSrv = await cds.connect.to('conv')
    this.on('READ', TestS4h, req => extSrv.tx(req).run(req.query))
})