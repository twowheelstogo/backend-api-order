const { asFunction } = require('awilix');
const { DeliveryRouter } = require("../routers");
module.exports = function(container){
    container.register({
        DeliveryRouter: asFunction(DeliveryRouter).singleton()
    });
}