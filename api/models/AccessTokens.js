/**
 * AccessTokens.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    token: {
      type: 'string',
      required: true
    },
    expiresAt: {
      type: 'integer',
      required: true
    }
  },

};

