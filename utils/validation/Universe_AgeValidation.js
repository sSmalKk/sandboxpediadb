/**
 * Universe_AgeValidation.js
 * @description :: validate each post and put request as per Universe_Age model
 */

const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Universe_Age */
exports.schemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  relativeto: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  year: joi.date().options({ convert: true }).allow(null).allow(''),
  isDeleted: joi.boolean(),
  Events: joi.array().items(joi.object()),
  PlayerEvents: joi.array().items(),
  Rules: joi.array().items(),
  Tags: joi.array().items(),
  relative: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow('')
}).unknown(true);

/** validation keys and properties of Universe_Age for updation */
exports.updateSchemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  description: joi.string().allow(null).allow(''),
  relativeto: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  year: joi.date().options({ convert: true }).allow(null).allow(''),
  isDeleted: joi.boolean(),
  Events: joi.array().items(joi.object()),
  PlayerEvents: joi.array().items(),
  Rules: joi.array().items(),
  Tags: joi.array().items(),
  relative: joi.string().regex(/^[0-9a-fA-F]{24}$/).allow(null).allow(''),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Universe_Age for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      relativeto: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      year: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      PlayerEvents: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      Rules: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      Tags: joi.alternatives().try(joi.array().items(),joi.array().items(),joi.object()),
      relative: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object()),
      id: joi.any(),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select
    
}).unknown(true);
