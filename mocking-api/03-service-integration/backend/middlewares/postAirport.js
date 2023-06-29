module.exports = (req, res, next) => {
  // Create `country_id` using `country` part of request.body, so is being stored into internal db
  if (req.method === "POST" && req.url === "/airports") {
    req.body.country_id = req.body.country;
  }

  next();
};
