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
exports.instanceOfUser = instanceOfUser;
exports.UserFromJSON = UserFromJSON;
exports.UserFromJSONTyped = UserFromJSONTyped;
exports.UserToJSON = UserToJSON;
const Profile_1 = require("./Profile");
/**
 * Check if a given object implements the User interface.
 */
function instanceOfUser(value) {
    return true;
}
function UserFromJSON(json) {
    return UserFromJSONTyped(json, false);
}
function UserFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'username': json['username'] == null ? undefined : json['username'],
        'premium': json['premium'] == null ? undefined : json['premium'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'role': json['role'] == null ? undefined : json['role'],
        'emailConfirmed': json['emailConfirmed'] == null ? undefined : json['emailConfirmed'],
        'profile': json['profile'] == null ? undefined : (0, Profile_1.ProfileFromJSON)(json['profile']),
    };
}
function UserToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'username': value['username'],
        'premium': value['premium'],
        'email': value['email'],
        'phone': value['phone'],
        'role': value['role'],
        'emailConfirmed': value['emailConfirmed'],
        'profile': (0, Profile_1.ProfileToJSON)(value['profile']),
    };
}