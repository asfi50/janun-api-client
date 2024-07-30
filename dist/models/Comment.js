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
exports.instanceOfComment = instanceOfComment;
exports.CommentFromJSON = CommentFromJSON;
exports.CommentFromJSONTyped = CommentFromJSONTyped;
exports.CommentToJSON = CommentToJSON;
const UserMin_1 = require("./UserMin");
/**
 * Check if a given object implements the Comment interface.
 */
function instanceOfComment(value) {
    return true;
}
function CommentFromJSON(json) {
    return CommentFromJSONTyped(json, false);
}
function CommentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'createdAgo': json['createdAgo'] == null ? undefined : json['createdAgo'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'updatedAgo': json['updatedAgo'] == null ? undefined : json['updatedAgo'],
        'anonymous': json['anonymous'] == null ? undefined : json['anonymous'],
        'user': json['user'] == null ? undefined : (0, UserMin_1.UserMinFromJSON)(json['user']),
        'content': json['content'] == null ? undefined : json['content'],
        'postSlug': json['postSlug'] == null ? undefined : json['postSlug'],
    };
}
function CommentToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'createdAt': value['createdAt'],
        'createdAgo': value['createdAgo'],
        'updatedAt': value['updatedAt'],
        'updatedAgo': value['updatedAgo'],
        'anonymous': value['anonymous'],
        'user': (0, UserMin_1.UserMinToJSON)(value['user']),
        'content': value['content'],
        'postSlug': value['postSlug'],
    };
}
