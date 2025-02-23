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
 * @interface GeneralResponse
 */
export interface GeneralResponse {
    /**
     * 
     * @type {string}
     * @memberof GeneralResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the GeneralResponse interface.
 */
export function instanceOfGeneralResponse(value: object): value is GeneralResponse {
    return true;
}

export function GeneralResponseFromJSON(json: any): GeneralResponse {
    return GeneralResponseFromJSONTyped(json, false);
}

export function GeneralResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function GeneralResponseToJSON(value?: GeneralResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

