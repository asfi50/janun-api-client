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
/**
 * 
 * @export
 * @interface TagCreateRequest
 */
export interface TagCreateRequest {
    /**
     * 
     * @type {string}
     * @memberof TagCreateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TagCreateRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the TagCreateRequest interface.
 */
export function instanceOfTagCreateRequest(value: object): value is TagCreateRequest {
    return true;
}

export function TagCreateRequestFromJSON(json: any): TagCreateRequest {
    return TagCreateRequestFromJSONTyped(json, false);
}

export function TagCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function TagCreateRequestToJSON(value?: TagCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

