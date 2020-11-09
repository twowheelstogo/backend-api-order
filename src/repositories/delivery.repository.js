class DeliveryRepository {
    constructor({adminfb}){
        this.adminfb = adminfb;
    }
    
    async createOrder(entity, refPlace){
        let db = this.adminfb.firestore();
        let now = new Date();
        entity.createdAt = now;
        entity.locationRef = new this.adminfb.firestore.GeoPoint(refPlace.lat, refPlace.lng);
        entity.locationEnd = null;
        entity.orderPic = "";
        entity.updatedAt = now;
        entity.deliveredAt = null;
        entity.canceledAt = null;
        entity.receivedPic = "";
        entity.depto = "";
        entity.munic = "";
        entity.zone = "";
        entity.alert = "En Tiempo";
        entity.time = 0;
        entity.alias = {id:"", name:""};
        entity.pin = "";
        entity.status = "Pendiente";
        entity.phone = "";
        entity.country_code = "502";
        entity.provider = "branch";
        entity.circle = {
            id:0,
            distance:0,
            time:0,
            calculated:false
        }
        return await db.collection('deliveries').add(entity);
    }

    async getOrder(id){
        let tmp = await this.adminfb.firestore().collection('deliveries').doc(id).get();
        tmp = await tmp.data();
        return tmp;
    }
}

module.exports = DeliveryRepository;
