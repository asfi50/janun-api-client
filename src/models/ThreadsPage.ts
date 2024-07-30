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
import type { Thread } from './Thread';
import {
    ThreadFromJSON,
    ThreadFromJSONTyped,
    ThreadToJSON,
} from './Thread';

/**
 * 
 * @export
 * @interface ThreadsPage
 */
export interface ThreadsPage {
    /**
     * 
     * @type {Array<Thread>}
     * @memberof ThreadsPage
     */
    data?: Array<Thread>;
    /**
     * 
     * @type {number}
     * @memberof ThreadsPage
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ThreadsPage
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ThreadsPage
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof ThreadsPage
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ThreadsPage
     */
    last?: boolean;
}

/**
 * Check if a given object implements the ThreadsPage interface.
 */
export function instanceOfThreadsPage(value: object): value is ThreadsPage {
    return true;
}

export function ThreadsPageFromJSON(json: any): ThreadsPage {
    return ThreadsPageFromJSONTyped(json, false);
}

export function ThreadsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadsPage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ThreadFromJSON)),
        'pageNumber': json['pageNumber'] == null ? undefined : json['pageNumber'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalElements': json['totalElements'] == null ? undefined : json['totalElements'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'last': json['last'] == null ? undefined : json['last'],
    };
}

export function ThreadsPageToJSON(value?: ThreadsPage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(ThreadToJSON)),
        'pageNumber': value['pageNumber'],
        'pageSize': value['pageSize'],
        'totalElements': value['totalElements'],
        'totalPages': value['totalPages'],
        'last': value['last'],
    };
}
