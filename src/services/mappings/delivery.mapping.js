const objectMapper = require('object-mapper');

module.exports ={ entityToDb: (entity) =>{
    const map = {
        'id': 'id',
        'noOrder':'orderId',
        'client':'name',
        'direction':'address',
        'observations':'nota',
        'branch': 'branch',
        'company': 'company',
    }
    return objectMapper(entity, map);
}, dbToEntity: (entity) =>{
    const map = {
        'id': 'id',
        'orderId':'fields.noOrder',
        'status': 'fields.status',
        'name':'fields.client',
        'address':'fields.direction',
        'nota':'fields.observations',
        'branch.id': 'fields.branchOffice',
        'company.id': 'fields.company',
        "locationRef": 'fields.locationRef'
    }
    return objectMapper(entity, map);
}}