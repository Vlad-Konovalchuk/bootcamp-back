const errorHandler = (err, req, res, next) => {
  console.log(err.stack.red);

  if(err.name === 'CastError'){
    const message =``
  }
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error"
  });
};

module.exports = errorHandler;
