class DeliveryController{
    constructor({ DeliveryService }){
        this.DeliveryService = DeliveryService;
    }

    async createOrder(req, res, next){
        try {
            const result = await this.DeliveryService.createOrder(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return next({code: error.code, message: error.message});
        }
    }

    async getOrder(req, res, next){
        try {
            const result = await this.DeliveryService.getOrder(req.params.id);
            return res.status(201).json(result);
        } catch (error) {
            return next({code: error.code, message: error.message});
        }
    }
}

module.exports = DeliveryController;