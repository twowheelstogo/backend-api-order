const { body, param } = require('express-validator');
module.exports = {
    validatePostDelivery:[
        body("noOrder")
        .notEmpty().withMessage("delivery.val1")
        .isString().withMessage("delivery.val2"),
        body("client")
        .notEmpty().withMessage("delivery.val3")
        .isString().withMessage("delivery.val4"),
        body("direction")
        .notEmpty().withMessage("delivery.val5")
        .isString().withMessage("delivery.val6"),
        body("observations")
        .optional()
        .notEmpty().withMessage("delivery.val7")
        .isString().withMessage("delivery.val8"),
        body("branchOffice")
        .notEmpty().withMessage("delivery.val9")
        .equals("GLOFIBODEGAS20200517").withMessage("delivery.val10"),
        body("company")
        .notEmpty().withMessage("delivery.val11")
        .not().equals("GL20200517").withMessage("delivery.val12"),
    ],

    validateGetDelivery:[
        param("id")
        .notEmpty().withMessage("delivery.val13")
        .isString().withMessage("delivery.val14")
    ]
}