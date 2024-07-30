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
import type { Reaction } from './Reaction';
import {
    ReactionFromJSON,
    ReactionFromJSONTyped,
    ReactionToJSON,
} from './Reaction';

/**
 * 
 * @export
 * @interface ReactionsPage
 */
export interface ReactionsPage {
    /**
     * 
     * @type {Array<Reaction>}
     * @memberof ReactionsPage
     */
    data?: Array<Reaction>;
    /**
     * 
     * @type {number}
     * @memberof ReactionsPage
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ReactionsPage
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ReactionsPage
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof ReactionsPage
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ReactionsPage
     */
    last?: boolean;
}

/**
 * Check if a given object implements the ReactionsPage interface.
 */
export function instanceOfReactionsPage(value: object): value is ReactionsPage {
    return true;
}

export function ReactionsPageFromJSON(json: any): ReactionsPage {
    return ReactionsPageFromJSONTyped(json, false);
}

export function ReactionsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReactionsPage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(ReactionFromJSON)),
        'pageNumber': json['pageNumber'] == null ? undefined : json['pageNumber'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalElements': json['totalElements'] == null ? undefined : json['totalElements'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'last': json['last'] == null ? undefined : json['last'],
    };
}

export function ReactionsPageToJSON(value?: ReactionsPage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(ReactionToJSON)),
        'pageNumber': value['pageNumber'],
        'pageSize': value['pageSize'],
        'totalElements': value['totalElements'],
        'totalPages': value['totalPages'],
        'last': value['last'],
    };
}

