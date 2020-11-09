const { asClass } = require('awilix');
const { DeliveryRepository, BranchRepository, CompanyRepository } = require("../repositories");
module.exports = function(container){
    container.register({
        DeliveryRepository: asClass(DeliveryRepository).singleton(),
        BranchRepository: asClass(BranchRepository).singleton(),
        CompanyRepository: asClass(CompanyRepository).singleton()
    });
}