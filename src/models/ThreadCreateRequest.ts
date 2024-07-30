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
import type { TagMin } from './TagMin';
import {
    TagMinFromJSON,
    TagMinFromJSONTyped,
    TagMinToJSON,
} from './TagMin';

/**
 * 
 * @export
 * @interface ThreadCreateRequest
 */
export interface ThreadCreateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ThreadCreateRequest
     */
    premium?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    logo?: string;
    /**
     * 
     * @type {string}
     * @memberof ThreadCreateRequest
     */
    cover?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof ThreadCreateRequest
     */
    links?: Set<string>;
    /**
     * 
     * @type {Set<TagMin>}
     * @memberof ThreadCreateRequest
     */
    tags?: Set<TagMin>;
}

/**
 * Check if a given object implements the ThreadCreateRequest interface.
 */
export function instanceOfThreadCreateRequest(value: object): value is ThreadCreateRequest {
    return true;
}

export function ThreadCreateRequestFromJSON(json: any): ThreadCreateRequest {
    return ThreadCreateRequestFromJSONTyped(json, false);
}

export function ThreadCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'premium': json['premium'] == null ? undefined : json['premium'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'language': json['language'] == null ? undefined : json['language'],
        'city': json['city'] == null ? undefined : json['city'],
        'country': json['country'] == null ? undefined : json['country'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'cover': json['cover'] == null ? undefined : json['cover'],
        'links': json['links'] == null ? undefined : json['links'],
        'tags': json['tags'] == null ? undefined : (new Set((json['tags'] as Array<any>).map(TagMinFromJSON))),
    };
}

export function ThreadCreateRequestToJSON(value?: ThreadCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'premium': value['premium'],
        'slug': value['slug'],
        'name': value['name'],
        'description': value['description'],
        'language': value['language'],
        'city': value['city'],
        'country': value['country'],
        'logo': value['logo'],
        'cover': value['cover'],
        'links': value['links'] == null ? undefined : Array.from(value['links'] as Set<any>),
        'tags': value['tags'] == null ? undefined : (Array.from(value['tags'] as Set<any>).map(TagMinToJSON)),
    };
}

