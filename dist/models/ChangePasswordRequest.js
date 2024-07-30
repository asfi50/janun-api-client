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
exports.instanceOfChangePasswordRequest = instanceOfChangePasswordRequest;
exports.ChangePasswordRequestFromJSON = ChangePasswordRequestFromJSON;
exports.ChangePasswordRequestFromJSONTyped = ChangePasswordRequestFromJSONTyped;
exports.ChangePasswordRequestToJSON = ChangePasswordRequestToJSON;
/**
 * Check if a given object implements the ChangePasswordRequest interface.
 */
function instanceOfChangePasswordRequest(value) {
    return true;
}
function ChangePasswordRequestFromJSON(json) {
    return ChangePasswordRequestFromJSONTyped(json, false);
}
function ChangePasswordRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'oldPassword': json['oldPassword'] == null ? undefined : json['oldPassword'],
        'newPassword': json['newPassword'] == null ? undefined : json['newPassword'],
    };
}
function ChangePasswordRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'oldPassword': value['oldPassword'],
        'newPassword': value['newPassword'],
    };
}
