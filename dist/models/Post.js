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
exports.instanceOfPost = instanceOfPost;
exports.PostFromJSON = PostFromJSON;
exports.PostFromJSONTyped = PostFromJSONTyped;
exports.PostToJSON = PostToJSON;
const ChannelMin_1 = require("./ChannelMin");
const TagMin_1 = require("./TagMin");
const MediaMin_1 = require("./MediaMin");
const ThreadMin_1 = require("./ThreadMin");
/**
 * Check if a given object implements the Post interface.
 */
function instanceOfPost(value) {
    return true;
}
function PostFromJSON(json) {
    return PostFromJSONTyped(json, false);
}
function PostFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'slug': json['slug'] == null ? undefined : json['slug'],
        'title': json['title'] == null ? undefined : json['title'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'type': json['type'] == null ? undefined : json['type'],
        'premium': json['premium'] == null ? undefined : json['premium'],
        'reaction': json['reaction'] == null ? undefined : json['reaction'],
        'reacted': json['reacted'] == null ? undefined : json['reacted'],
        'reported': json['reported'] == null ? undefined : json['reported'],
        'commented': json['commented'] == null ? undefined : json['commented'],
        'subscribed': json['subscribed'] == null ? undefined : json['subscribed'],
        'content': json['content'] == null ? undefined : json['content'],
        'status': json['status'] == null ? undefined : json['status'],
        'createdAgo': json['createdAgo'] == null ? undefined : json['createdAgo'],
        'updatedAgo': json['updatedAgo'] == null ? undefined : json['updatedAgo'],
        'views': json['views'] == null ? undefined : json['views'],
        'likesCount': json['likesCount'] == null ? undefined : json['likesCount'],
        'dislikesCount': json['dislikesCount'] == null ? undefined : json['dislikesCount'],
        'commentsCount': json['commentsCount'] == null ? undefined : json['commentsCount'],
        'sharesCount': json['sharesCount'] == null ? undefined : json['sharesCount'],
        'reportsCount': json['reportsCount'] == null ? undefined : json['reportsCount'],
        'tagCount': json['tagCount'] == null ? undefined : json['tagCount'],
        'thread': json['thread'] == null ? undefined : (0, ThreadMin_1.ThreadMinFromJSON)(json['thread']),
        'channel': json['channel'] == null ? undefined : (0, ChannelMin_1.ChannelMinFromJSON)(json['channel']),
        'tags': json['tags'] == null ? undefined : (new Set(json['tags'].map(TagMin_1.TagMinFromJSON))),
        'media': json['media'] == null ? undefined : (json['media'].map(MediaMin_1.MediaMinFromJSON)),
    };
}
function PostToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'slug': value['slug'],
        'title': value['title'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
        'type': value['type'],
        'premium': value['premium'],
        'reaction': value['reaction'],
        'reacted': value['reacted'],
        'reported': value['reported'],
        'commented': value['commented'],
        'subscribed': value['subscribed'],
        'content': value['content'],
        'status': value['status'],
        'createdAgo': value['createdAgo'],
        'updatedAgo': value['updatedAgo'],
        'views': value['views'],
        'likesCount': value['likesCount'],
        'dislikesCount': value['dislikesCount'],
        'commentsCount': value['commentsCount'],
        'sharesCount': value['sharesCount'],
        'reportsCount': value['reportsCount'],
        'tagCount': value['tagCount'],
        'thread': (0, ThreadMin_1.ThreadMinToJSON)(value['thread']),
        'channel': (0, ChannelMin_1.ChannelMinToJSON)(value['channel']),
        'tags': value['tags'] == null ? undefined : (Array.from(value['tags']).map(TagMin_1.TagMinToJSON)),
        'media': value['media'] == null ? undefined : (value['media'].map(MediaMin_1.MediaMinToJSON)),
    };
}
