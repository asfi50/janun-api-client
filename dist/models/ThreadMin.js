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
exports.instanceOfThreadMin = instanceOfThreadMin;
exports.ThreadMinFromJSON = ThreadMinFromJSON;
exports.ThreadMinFromJSONTyped = ThreadMinFromJSONTyped;
exports.ThreadMinToJSON = ThreadMinToJSON;
/**
 * Check if a given object implements the ThreadMin interface.
 */
function instanceOfThreadMin(value) {
    return true;
}
function ThreadMinFromJSON(json) {
    return ThreadMinFromJSONTyped(json, false);
}
function ThreadMinFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'premium': json['premium'] == null ? undefined : json['premium'],
        'subscribed': json['subscribed'] == null ? undefined : json['subscribed'],
    };
}
function ThreadMinToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'slug': value['slug'],
        'name': value['name'],
        'premium': value['premium'],
        'subscribed': value['subscribed'],
    };
}
