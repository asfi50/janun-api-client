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
exports.ReportCreateRequestTypeEnum = void 0;
exports.instanceOfReportCreateRequest = instanceOfReportCreateRequest;
exports.ReportCreateRequestFromJSON = ReportCreateRequestFromJSON;
exports.ReportCreateRequestFromJSONTyped = ReportCreateRequestFromJSONTyped;
exports.ReportCreateRequestToJSON = ReportCreateRequestToJSON;
/**
 * @export
 */
exports.ReportCreateRequestTypeEnum = {
    Post: 'post',
    Comment: 'comment',
    Thread: 'thread'
};
/**
 * Check if a given object implements the ReportCreateRequest interface.
 */
function instanceOfReportCreateRequest(value) {
    return true;
}
function ReportCreateRequestFromJSON(json) {
    return ReportCreateRequestFromJSONTyped(json, false);
}
function ReportCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'reason': json['reason'] == null ? undefined : json['reason'],
        'type': json['type'] == null ? undefined : json['type'],
        'channelSlug': json['channelSlug'] == null ? undefined : json['channelSlug'],
        'threadSlug': json['threadSlug'] == null ? undefined : json['threadSlug'],
        'postSlug': json['postSlug'] == null ? undefined : json['postSlug'],
        'commentId': json['commentId'] == null ? undefined : json['commentId'],
    };
}
function ReportCreateRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'reason': value['reason'],
        'type': value['type'],
        'channelSlug': value['channelSlug'],
        'threadSlug': value['threadSlug'],
        'postSlug': value['postSlug'],
        'commentId': value['commentId'],
    };
}
