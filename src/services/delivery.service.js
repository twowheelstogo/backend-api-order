const {deliveryMapping} = require("./mappings")
class DeliveryService{
    constructor({ DeliveryRepository, GoogleService }){
        this.DeliveryRepository = DeliveryRepository;
        this.GoogleService = GoogleService;
    }

    async createOrder(order){
        order = deliveryMapping.entityToDb(order);
        let refPlace = await this.GoogleService.getGeocoding(order.address);
        let tmp =  await this.DeliveryRepository.createOrder(order, refPlace);
        order.id = tmp.id;
        return deliveryMapping.dbToEntity(order);
    }

    async getOrder(id){
        let tmp =  await this.DeliveryRepository.getOrder(id);
        if (tmp == undefined){
            let err = new Error("errors.delivery.e1");
            err.code = 404;
            throw err;
        }
        tmp.id = id;
        return deliveryMapping.dbToEntity(tmp);
    }
}
module.exports = DeliveryService;
