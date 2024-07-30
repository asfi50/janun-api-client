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
import type { UserMin } from './UserMin';
import {
    UserMinFromJSON,
    UserMinFromJSONTyped,
    UserMinToJSON,
} from './UserMin';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    createdAgo?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    updatedAgo?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Comment
     */
    anonymous?: boolean;
    /**
     * 
     * @type {UserMin}
     * @memberof Comment
     */
    user?: UserMin;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    postSlug?: string;
}

/**
 * Check if a given object implements the Comment interface.
 */
export function instanceOfComment(value: object): value is Comment {
    return true;
}

export function CommentFromJSON(json: any): Comment {
    return CommentFromJSONTyped(json, false);
}

export function CommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Comment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'createdAgo': json['createdAgo'] == null ? undefined : json['createdAgo'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'updatedAgo': json['updatedAgo'] == null ? undefined : json['updatedAgo'],
        'anonymous': json['anonymous'] == null ? undefined : json['anonymous'],
        'user': json['user'] == null ? undefined : UserMinFromJSON(json['user']),
        'content': json['content'] == null ? undefined : json['content'],
        'postSlug': json['postSlug'] == null ? undefined : json['postSlug'],
    };
}

export function CommentToJSON(value?: Comment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'createdAt': value['createdAt'],
        'createdAgo': value['createdAgo'],
        'updatedAt': value['updatedAt'],
        'updatedAgo': value['updatedAgo'],
        'anonymous': value['anonymous'],
        'user': UserMinToJSON(value['user']),
        'content': value['content'],
        'postSlug': value['postSlug'],
    };
}
