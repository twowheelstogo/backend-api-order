const { asClass } = require('awilix');
const {GoogleService, DeliveryService } = require("../services");

module.exports = function(container){
    container.register({
        GoogleService: asClass(GoogleService).singleton(),
        DeliveryService: asClass(DeliveryService).singleton()
    });
}