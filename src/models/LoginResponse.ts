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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface LoginResponse
 */
export interface LoginResponse {
    /**
     * 
     * @type {string}
     * @memberof LoginResponse
     */
    token?: string;
    /**
     * 
     * @type {User}
     * @memberof LoginResponse
     */
    user?: User;
}

/**
 * Check if a given object implements the LoginResponse interface.
 */
export function instanceOfLoginResponse(value: object): value is LoginResponse {
    return true;
}

export function LoginResponseFromJSON(json: any): LoginResponse {
    return LoginResponseFromJSONTyped(json, false);
}

export function LoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
        'user': json['user'] == null ? undefined : UserFromJSON(json['user']),
    };
}

export function LoginResponseToJSON(value?: LoginResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
        'user': UserToJSON(value['user']),
    };
}

