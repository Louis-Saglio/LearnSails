/**
 * Restaurants.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true
    },
    capacity: {
      type: 'integer',
      required: true
    },
    employees: {
      collection: 'employees',
      via: 'restaurant'
    }
  },

};

