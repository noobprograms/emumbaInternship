var myOrderList = ['pizza', 'cake', 'burger'];

const orderFunction = (req, res, next) => {
    console.log(req.headers.order);
    if (myOrderList.includes(req.headers.order)) {
        res.send('this is the page where to can order stuff');

    } else
        return next({ message: "we don't have this dish" })

}
module.exports = orderFunction;