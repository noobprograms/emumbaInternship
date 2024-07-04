const express = require('express');
const app = express();
const myMiddleware = require('./src/middleware/logger_middleware');
const errorHandler = require('./src/middleware/error_middleware');
const aboutRouter = require('./src/routes/about_routes');
const contactRouter = require('./src/routes/contact_routes');
const pricingRouter = require('./src/routes/pricing_routes');
const orderRouter = require('./src/routes/order_routes');
app.get('/', myMiddleware, (req, res, next) => {
    console.log(req.body);
    res.send('Hello World');
});






app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/pricing", pricingRouter);
app.use("/order", orderRouter);
app.use(errorHandler);

app.listen(8000, () => console.log("myServer running on 8000 port"))