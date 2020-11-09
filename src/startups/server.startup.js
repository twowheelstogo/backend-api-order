const express = require('express');
const {ApiConfig} = require("configs-twtg");

class Server {

    constructor({ RouterStartup }) {
      const router = express.Router();
      console.log(ApiConfig.deliveries.path);
      router.use(ApiConfig.deliveries.path, RouterStartup);
      this.express = express().use(router);
      this.express.disable('x-powered-by');
      this.server = null;
    }
  
    start() {
      return new Promise(resolve => {
        this.server = this.express.listen(ApiConfig.deliveries.port, () => {
          console.log(`services deliveries running on port ${ApiConfig.deliveries.port}`);
          resolve();
        });
      });
    }
  
    stop() {
      return new Promise(resolve => {
        this.server.close(() =>{
          console.log('server turned off');
          resolve();
        });
      });
    }
}
  
module.exports = Server;