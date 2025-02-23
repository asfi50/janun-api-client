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
exports.instanceOfPostsPage = instanceOfPostsPage;
exports.PostsPageFromJSON = PostsPageFromJSON;
exports.PostsPageFromJSONTyped = PostsPageFromJSONTyped;
exports.PostsPageToJSON = PostsPageToJSON;
const Post_1 = require("./Post");
/**
 * Check if a given object implements the PostsPage interface.
 */
function instanceOfPostsPage(value) {
    return true;
}
function PostsPageFromJSON(json) {
    return PostsPageFromJSONTyped(json, false);
}
function PostsPageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': json['data'] == null ? undefined : (json['data'].map(Post_1.PostFromJSON)),
        'pageNumber': json['pageNumber'] == null ? undefined : json['pageNumber'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalElements': json['totalElements'] == null ? undefined : json['totalElements'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'last': json['last'] == null ? undefined : json['last'],
    };
}
function PostsPageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'data': value['data'] == null ? undefined : (value['data'].map(Post_1.PostToJSON)),
        'pageNumber': value['pageNumber'],
        'pageSize': value['pageSize'],
        'totalElements': value['totalElements'],
        'totalPages': value['totalPages'],
        'last': value['last'],
    };
}
