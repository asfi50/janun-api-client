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
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    premium?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    role?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    emailConfirmed?: boolean;
    /**
     * 
     * @type {Profile}
     * @memberof User
     */
    profile?: Profile;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'] == null ? undefined : json['username'],
        'premium': json['premium'] == null ? undefined : json['premium'],
        'email': json['email'] == null ? undefined : json['email'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'role': json['role'] == null ? undefined : json['role'],
        'emailConfirmed': json['emailConfirmed'] == null ? undefined : json['emailConfirmed'],
        'profile': json['profile'] == null ? undefined : ProfileFromJSON(json['profile']),
    };
}

export function UserToJSON(value?: User | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'username': value['username'],
        'premium': value['premium'],
        'email': value['email'],
        'phone': value['phone'],
        'role': value['role'],
        'emailConfirmed': value['emailConfirmed'],
        'profile': ProfileToJSON(value['profile']),
    };
}
