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

import { mapValues } from '../runtime';
import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * 
 * @export
 * @interface TagsPage
 */
export interface TagsPage {
    /**
     * 
     * @type {Array<Tag>}
     * @memberof TagsPage
     */
    data?: Array<Tag>;
    /**
     * 
     * @type {number}
     * @memberof TagsPage
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof TagsPage
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof TagsPage
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof TagsPage
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TagsPage
     */
    last?: boolean;
}

/**
 * Check if a given object implements the TagsPage interface.
 */
export function instanceOfTagsPage(value: object): value is TagsPage {
    return true;
}

export function TagsPageFromJSON(json: any): TagsPage {
    return TagsPageFromJSONTyped(json, false);
}

export function TagsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagsPage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TagFromJSON)),
        'pageNumber': json['pageNumber'] == null ? undefined : json['pageNumber'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalElements': json['totalElements'] == null ? undefined : json['totalElements'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'last': json['last'] == null ? undefined : json['last'],
    };
}

export function TagsPageToJSON(value?: TagsPage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(TagToJSON)),
        'pageNumber': value['pageNumber'],
        'pageSize': value['pageSize'],
        'totalElements': value['totalElements'],
        'totalPages': value['totalPages'],
        'last': value['last'],
    };
}

