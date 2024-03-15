// Pindahkan ini ke folder ./routes/v1
const express = require('express');
const router = express.Router();
const { carRouter } = require("./v1")

const v1Routes = [
    {
        path: '/v1',
        route: carRouter,
    },
];

v1Routes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
