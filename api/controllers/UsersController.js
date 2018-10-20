/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const hasher = require('password-hash');
const randomString = require('randomstring');

module.exports = {

  async create(req, res) {
    const password = hasher.generate(req.body.password);
    res.json(await Users.create({
      password,
      email: req.body.email
    }).fetch());
  },

  async login(req, res) {
    const user = await Users.findOne({
      email: req.body.email
    });
    if (user !== undefined && hasher.verify(req.body.password, user.password)) {
      res.json(await sails.models.accesstokens.create({
        token: randomString.generate(),
        expiresAt: Date.now() + 3600 * 1000
      }).fetch());
    } else {
      res.notFound();
    }
  }
};
