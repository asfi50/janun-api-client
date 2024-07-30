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
exports.instanceOfMediaMin = instanceOfMediaMin;
exports.MediaMinFromJSON = MediaMinFromJSON;
exports.MediaMinFromJSONTyped = MediaMinFromJSONTyped;
exports.MediaMinToJSON = MediaMinToJSON;
/**
 * Check if a given object implements the MediaMin interface.
 */
function instanceOfMediaMin(value) {
    return true;
}
function MediaMinFromJSON(json) {
    return MediaMinFromJSONTyped(json, false);
}
function MediaMinFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'url': json['url'] == null ? undefined : json['url'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
function MediaMinToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'url': value['url'],
        'type': value['type'],
    };
}