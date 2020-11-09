const { Router } = require('express');
const { DeliveryValidator } = require("./validators");
const {ApiConfig} = require("configs-twtg");
const _authMiddlewaretmp = (req, res, next) =>{
    const authorization = req.headers.authorization || '';
    try {
        const token = authorization.replace('Bearer ', '');
        if(token != ApiConfig.deliveries.token){
            return res.status(405).json({message: 'unauthorized'});
        }
        return next();   
    } catch (error) {
        return res.status(405).json({message: 'unauthorized'});
    }
}

module.exports = function ({ DeliveryController, ValidationMiddleware, BranchRepository, CompanyRepository}) {
    const router = Router();
    
    router.post('/',
    _authMiddlewaretmp,
    CompanyRepository.getCompany.bind(CompanyRepository),
    BranchRepository.getBranchOffice.bind(BranchRepository),
    DeliveryValidator.validatePostDelivery,
    ValidationMiddleware.checkValidations,
    DeliveryController.createOrder.bind(DeliveryController));

    router.get('/:id',
    _authMiddlewaretmp,
    DeliveryValidator.validateGetDelivery,
    ValidationMiddleware.checkValidations,
    DeliveryController.getOrder.bind(DeliveryController));

    return router;
};