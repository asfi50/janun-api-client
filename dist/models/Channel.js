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
exports.instanceOfChannel = instanceOfChannel;
exports.ChannelFromJSON = ChannelFromJSON;
exports.ChannelFromJSONTyped = ChannelFromJSONTyped;
exports.ChannelToJSON = ChannelToJSON;
const TagMin_1 = require("./TagMin");
const ThreadMin_1 = require("./ThreadMin");
/**
 * Check if a given object implements the Channel interface.
 */
function instanceOfChannel(value) {
    return true;
}
function ChannelFromJSON(json) {
    return ChannelFromJSONTyped(json, false);
}
function ChannelFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'premium': json['premium'] == null ? undefined : json['premium'],
        'subscribed': json['subscribed'] == null ? undefined : json['subscribed'],
        'description': json['description'] == null ? undefined : json['description'],
        'language': json['language'] == null ? undefined : json['language'],
        'city': json['city'] == null ? undefined : json['city'],
        'country': json['country'] == null ? undefined : json['country'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'cover': json['cover'] == null ? undefined : json['cover'],
        'subscriberCount': json['subscriberCount'] == null ? undefined : json['subscriberCount'],
        'postCount': json['postCount'] == null ? undefined : json['postCount'],
        'linkCount': json['linkCount'] == null ? undefined : json['linkCount'],
        'threadCount': json['threadCount'] == null ? undefined : json['threadCount'],
        'tagCount': json['tagCount'] == null ? undefined : json['tagCount'],
        'links': json['links'] == null ? undefined : json['links'],
        'threads': json['threads'] == null ? undefined : (new Set(json['threads'].map(ThreadMin_1.ThreadMinFromJSON))),
        'tags': json['tags'] == null ? undefined : (new Set(json['tags'].map(TagMin_1.TagMinFromJSON))),
    };
}
function ChannelToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'slug': value['slug'],
        'name': value['name'],
        'premium': value['premium'],
        'subscribed': value['subscribed'],
        'description': value['description'],
        'language': value['language'],
        'city': value['city'],
        'country': value['country'],
        'logo': value['logo'],
        'cover': value['cover'],
        'subscriberCount': value['subscriberCount'],
        'postCount': value['postCount'],
        'linkCount': value['linkCount'],
        'threadCount': value['threadCount'],
        'tagCount': value['tagCount'],
        'links': value['links'] == null ? undefined : Array.from(value['links']),
        'threads': value['threads'] == null ? undefined : (Array.from(value['threads']).map(ThreadMin_1.ThreadMinToJSON)),
        'tags': value['tags'] == null ? undefined : (Array.from(value['tags']).map(TagMin_1.TagMinToJSON)),
    };
}