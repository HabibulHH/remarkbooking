exports.logger = (options) =>
  function (request, response, next) {
    if (options.log) {
      let message = `${new Date(Date.now()).toLocaleString()} - ${
        req.method
      } - ${req.originalUrl} - ${req.protocol}
      - ${req.ip}`;
      console.log(message);
      next();
    } else {
      throw new Error("Server has an logger related error");
    }
  };
