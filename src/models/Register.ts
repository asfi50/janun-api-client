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
 * @interface Register
 */
export interface Register {
    /**
     * 
     * @type {string}
     * @memberof Register
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof Register
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof Register
     */
    password?: string;
}

/**
 * Check if a given object implements the Register interface.
 */
export function instanceOfRegister(value: object): value is Register {
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function RegisterFromJSON(json: any): Register {
    return RegisterFromJSONTyped(json, false);
}

export function RegisterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'],
        'email': json['email'],
        'password': json['password'] == null ? undefined : json['password'],
    };
}

export function RegisterToJSON(value?: Register | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'username': value['username'],
        'email': value['email'],
        'password': value['password'],
    };
}
