const {GoogleMapsConfig } = require("configs-twtg");
class GoogleService{
    constructor(){
    }

    async getGeocoding(address){
        const axios = require('axios');
        let config = {
            url: `${GoogleMapsConfig.url}${GoogleMapsConfig.geoCode}`,
            method: 'get',
            params: {
                'key': GoogleMapsConfig.apiKey,
                'address': address,
                'region': "gt"
            }
        };
        let res = await axios(config);
        if(res.data.status != "ZERO_RESULTS"){
            return {lat: res.data.results[0].geometry.location.lat, lng: res.data.results[0].geometry.location.lng}
        }else
         return {lat:0, lng: 0}
    }
}
module.exports = GoogleService;
