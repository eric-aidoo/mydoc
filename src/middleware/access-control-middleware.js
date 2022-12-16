const accessControlMiddleware = (req, res, next) => {
    // These are the domains you want to allow to make request to your server
    const allowedOrigins = [ 'http://localhost:3000' ];
  
    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
      // Domain(s) we want to accept requests from
      res.setHeader('Access-Control-Allow-Origin', origin);
      // Request headers we want to allow
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since, Cache-Control, Pragma, Etag, Age, Referer');
      // Request methods we want to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    }
    next();
  }
  
  export default accessControlMiddleware