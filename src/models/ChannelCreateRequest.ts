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
 * @interface ChannelCreateRequest
 */
export interface ChannelCreateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ChannelCreateRequest
     */
    premium?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    logo?: string;
    /**
     * 
     * @type {string}
     * @memberof ChannelCreateRequest
     */
    cover?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof ChannelCreateRequest
     */
    links?: Set<string>;
    /**
     * 
     * @type {Set<TagMin>}
     * @memberof ChannelCreateRequest
     */
    tags?: Set<TagMin>;
}

/**
 * Check if a given object implements the ChannelCreateRequest interface.
 */
export function instanceOfChannelCreateRequest(value: object): value is ChannelCreateRequest {
    return true;
}

export function ChannelCreateRequestFromJSON(json: any): ChannelCreateRequest {
    return ChannelCreateRequestFromJSONTyped(json, false);
}

export function ChannelCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelCreateRequest {
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

export function ChannelCreateRequestToJSON(value?: ChannelCreateRequest | null): any {
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

