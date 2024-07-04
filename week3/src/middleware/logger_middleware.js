 const myMiddleware = (req, res, next) => //logger middleware for assignment 2
     {
         console.log(req);

         return next();
     }
 module.exports = myMiddleware;