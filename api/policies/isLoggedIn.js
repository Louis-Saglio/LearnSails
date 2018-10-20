module.exports = async (req, res, next) => {
  // login does not work
  const token = req.headers.token;
  if  (token !== undefined) {
    const found = await sails.models.accesstokens.findOne({token});
    if (found !== undefined && found.token === token && Date.now() <= found.expiresAt) {
      return next();
    }
  }
  return res.forbidden();
};
