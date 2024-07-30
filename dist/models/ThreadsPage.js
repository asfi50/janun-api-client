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
exports.instanceOfThreadsPage = instanceOfThreadsPage;
exports.ThreadsPageFromJSON = ThreadsPageFromJSON;
exports.ThreadsPageFromJSONTyped = ThreadsPageFromJSONTyped;
exports.ThreadsPageToJSON = ThreadsPageToJSON;
const Thread_1 = require("./Thread");
/**
 * Check if a given object implements the ThreadsPage interface.
 */
function instanceOfThreadsPage(value) {
    return true;
}
function ThreadsPageFromJSON(json) {
    return ThreadsPageFromJSONTyped(json, false);
}
function ThreadsPageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : (json['data'].map(Thread_1.ThreadFromJSON)),
        'pageNumber': json['pageNumber'] == null ? undefined : json['pageNumber'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalElements': json['totalElements'] == null ? undefined : json['totalElements'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'last': json['last'] == null ? undefined : json['last'],
    };
}
function ThreadsPageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'] == null ? undefined : (value['data'].map(Thread_1.ThreadToJSON)),
        'pageNumber': value['pageNumber'],
        'pageSize': value['pageSize'],
        'totalElements': value['totalElements'],
        'totalPages': value['totalPages'],
        'last': value['last'],
    };
}