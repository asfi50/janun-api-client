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
exports.instanceOfTag = instanceOfTag;
exports.TagFromJSON = TagFromJSON;
exports.TagFromJSONTyped = TagFromJSONTyped;
exports.TagToJSON = TagToJSON;
/**
 * Check if a given object implements the Tag interface.
 */
function instanceOfTag(value) {
    return true;
}
function TagFromJSON(json) {
    return TagFromJSONTyped(json, false);
}
function TagFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'postCount': json['postCount'] == null ? undefined : json['postCount'],
        'threadCount': json['threadCount'] == null ? undefined : json['threadCount'],
        'channelCount': json['channelCount'] == null ? undefined : json['channelCount'],
    };
}
function TagToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'postCount': value['postCount'],
        'threadCount': value['threadCount'],
        'channelCount': value['channelCount'],
    };
}
