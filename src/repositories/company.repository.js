class CompanyRepository {
    constructor({adminfb}){
        this.adminfb = adminfb;
    }

    async getCompany(req, res, next){
        try {
            let result = await this.adminfb.firestore().collection('companies').doc(req.body.company).get();
            result = await result.data();
            req.body.company={
                id:req.body.company,
                name:result.name,
            }
            return next();   
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error:"la empresa no existe"
            });
        }
    }
}

module.exports = CompanyRepository;
