module.exports = (service) => {
    service.on('UPDATE', 'tenant', async (req, next) => {
      const res = await next();     // first call default implementation which is doing the HDI container creation
      let url = 'cf-isa-m-provider-provider-my-bookshop-srv.cfapps.eu10.hana.ondemand.com/Catalog';
      console.log('[INFO ][ON_UPDATE_TENANT] ' + 'Application URL is ' + url);
      return url;
    } );
  }