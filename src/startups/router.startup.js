const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const internationalization = require("../internationalization");
const swaggerUi = require('swagger-ui-express');

module.exports = function router({HealthcheckMiddleware, InternationalizationMiddleware, ErrorMiddleware,
    DeliveryRouter}) {
    const router = express.Router();

    router.use(express.json())
    .use(cors())
    .use(helmet())
    .use(InternationalizationMiddleware.attachI18(internationalization));
    router.use('/healthcheck', HealthcheckMiddleware.getStatus.bind(HealthcheckMiddleware));
    router.use('/deliveries', DeliveryRouter);

    router.use(ErrorMiddleware.checkErrors.bind(ErrorMiddleware));

    return router;
}
