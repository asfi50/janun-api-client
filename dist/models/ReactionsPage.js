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
exports.instanceOfReactionsPage = instanceOfReactionsPage;
exports.ReactionsPageFromJSON = ReactionsPageFromJSON;
exports.ReactionsPageFromJSONTyped = ReactionsPageFromJSONTyped;
exports.ReactionsPageToJSON = ReactionsPageToJSON;
const Reaction_1 = require("./Reaction");
/**
 * Check if a given object implements the ReactionsPage interface.
 */
function instanceOfReactionsPage(value) {
    return true;
}
function ReactionsPageFromJSON(json) {
    return ReactionsPageFromJSONTyped(json, false);
}
function ReactionsPageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : (json['data'].map(Reaction_1.ReactionFromJSON)),
        'pageNumber': json['pageNumber'] == null ? undefined : json['pageNumber'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalElements': json['totalElements'] == null ? undefined : json['totalElements'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'last': json['last'] == null ? undefined : json['last'],
    };
}
function ReactionsPageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'] == null ? undefined : (value['data'].map(Reaction_1.ReactionToJSON)),
        'pageNumber': value['pageNumber'],
        'pageSize': value['pageSize'],
        'totalElements': value['totalElements'],
        'totalPages': value['totalPages'],
        'last': value['last'],
    };
}
