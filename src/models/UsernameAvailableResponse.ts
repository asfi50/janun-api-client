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
 * @interface UsernameAvailableResponse
 */
export interface UsernameAvailableResponse {
    /**
     * 
     * @type {boolean}
     * @memberof UsernameAvailableResponse
     */
    available?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UsernameAvailableResponse
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof UsernameAvailableResponse
     */
    username?: string;
}

/**
 * Check if a given object implements the UsernameAvailableResponse interface.
 */
export function instanceOfUsernameAvailableResponse(value: object): value is UsernameAvailableResponse {
    return true;
}

export function UsernameAvailableResponseFromJSON(json: any): UsernameAvailableResponse {
    return UsernameAvailableResponseFromJSONTyped(json, false);
}

export function UsernameAvailableResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsernameAvailableResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'available': json['available'] == null ? undefined : json['available'],
        'message': json['message'] == null ? undefined : json['message'],
        'username': json['username'] == null ? undefined : json['username'],
    };
}

export function UsernameAvailableResponseToJSON(value?: UsernameAvailableResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'available': value['available'],
        'message': value['message'],
        'username': value['username'],
    };
}
