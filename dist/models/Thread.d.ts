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
import type { ChannelMin } from './ChannelMin';
import type { TagMin } from './TagMin';
/**
 *
 * @export
 * @interface Thread
 */
export interface Thread {
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    slug?: string;
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof Thread
     */
    premium?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Thread
     */
    subscribed?: boolean;
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    language?: string;
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    country?: string;
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    logo?: string;
    /**
     *
     * @type {string}
     * @memberof Thread
     */
    cover?: string;
    /**
     *
     * @type {Set<string>}
     * @memberof Thread
     */
    links?: Set<string>;
    /**
     *
     * @type {number}
     * @memberof Thread
     */
    subscriberCount?: number;
    /**
     *
     * @type {number}
     * @memberof Thread
     */
    postCount?: number;
    /**
     *
     * @type {number}
     * @memberof Thread
     */
    tagCount?: number;
    /**
     *
     * @type {ChannelMin}
     * @memberof Thread
     */
    channel?: ChannelMin;
    /**
     *
     * @type {Set<TagMin>}
     * @memberof Thread
     */
    tags?: Set<TagMin>;
}
/**
 * Check if a given object implements the Thread interface.
 */
export declare function instanceOfThread(value: object): value is Thread;
export declare function ThreadFromJSON(json: any): Thread;
export declare function ThreadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Thread;
export declare function ThreadToJSON(value?: Thread | null): any;
