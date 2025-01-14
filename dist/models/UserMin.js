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
exports.instanceOfUserMin = instanceOfUserMin;
exports.UserMinFromJSON = UserMinFromJSON;
exports.UserMinFromJSONTyped = UserMinFromJSONTyped;
exports.UserMinToJSON = UserMinToJSON;
/**
 * Check if a given object implements the UserMin interface.
 */
function instanceOfUserMin(value) {
    return true;
}
function UserMinFromJSON(json) {
    return UserMinFromJSONTyped(json, false);
}
function UserMinFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'username': json['username'] == null ? undefined : json['username'],
        'premium': json['premium'] == null ? undefined : json['premium'],
    };
}
function UserMinToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'username': value['username'],
        'premium': value['premium'],
    };
}
