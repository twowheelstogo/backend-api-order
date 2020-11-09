class BranchRepository {
    constructor({adminfb}){
        this.adminfb = adminfb;
    }

    async getBranchOffice(req, res, next){
        try {
            let result = await  this.adminfb.firestore().collection('branches').doc(req.body.branchOffice).get();
            result = await result.data();
            req.body.branch={
                id:req.body.branchOffice,
                name:result.name,
                lat:result.lat,
                lng:result.lng,
                address:result.address
            };
            return next();   
        } catch (error) {
            return res.status(400).json({
                error:"la sucursal no existe"
            });
        }
    }
}

module.exports = BranchRepository;
