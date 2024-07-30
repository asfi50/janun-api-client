"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Janun API
 * REST API for Janun Backend Service by Team QuantumGuys
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfTagMin = instanceOfTagMin;
exports.TagMinFromJSON = TagMinFromJSON;
exports.TagMinFromJSONTyped = TagMinFromJSONTyped;
exports.TagMinToJSON = TagMinToJSON;
/**
 * Check if a given object implements the TagMin interface.
 */
function instanceOfTagMin(value) {
    return true;
}
function TagMinFromJSON(json) {
    return TagMinFromJSONTyped(json, false);
}
function TagMinFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
    };
}
function TagMinToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
    };
}