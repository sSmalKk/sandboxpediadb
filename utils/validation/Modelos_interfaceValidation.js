/**
 * Modelos_interfaceValidation.js
 * @description :: validate each post and put request as per Modelos_interface model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Modelos_interface */
exports.schemaKeys = joi.object({
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  name: joi.string().allow(null).allow(''),
  descrioption: joi.string().allow(null).allow(''),
  data: joi.array().items(),
  storage: joi.array().items(),
  Rules: joi.array().items(),
  Tags: joi.array().items()
}).unknown(true);

/** validation keys and properties of Modelos_interface for updation */
exports.updateSchemaKeys = joi.object({
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  name: joi.string().allow(null).allow(''),
  descrioption: joi.string().allow(null).allow(''),
  data: joi.array().items(),
  storage: joi.array().items(),
  Rules: joi.array().items(),
  Tags: joi.array().items(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Modelos_interface for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      descrioption: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      data: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      storage: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      Rules: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      Tags: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
