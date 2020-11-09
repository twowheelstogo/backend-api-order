const { asClass } = require('awilix');
const { DeliveryController } = require("../controllers");
module.exports = function(container){
    container.register({
        DeliveryController: asClass(DeliveryController).singleton()
    });
}