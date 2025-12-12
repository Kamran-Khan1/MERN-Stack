import colors from "colors";

//custom middlware -> app middleware, route middleware
const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };
  const color = methodColors[req.method] || "white";
  console.log(`${req.method} ${req.protocol}://${req.host}`[color]);
  next(); // this ensures that it goes next after the call
};

export default logger;
