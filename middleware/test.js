const Middleware1 = (req, res, next) => {
    console.log("this Middleware 1");
    next()
  };
  const Middleware2 = (req, res, next) => {
      console.log("this Middleware 2");
      if (req.body.role && req.body.role == "admin") {
        return  next()
      }else {
          return res.status(403).send("Forbedien")
      }
    };
  
  module.exports = {Middleware1 , Middleware2};