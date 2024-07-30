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
/**
 *
 * @export
 * @interface ChannelMin
 */
export interface ChannelMin {
    /**
     *
     * @type {string}
     * @memberof ChannelMin
     */
    slug?: string;
    /**
     *
     * @type {string}
     * @memberof ChannelMin
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof ChannelMin
     */
    premium?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ChannelMin
     */
    subscribed?: boolean;
}
/**
 * Check if a given object implements the ChannelMin interface.
 */
export declare function instanceOfChannelMin(value: object): value is ChannelMin;
export declare function ChannelMinFromJSON(json: any): ChannelMin;
export declare function ChannelMinFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelMin;
export declare function ChannelMinToJSON(value?: ChannelMin | null): any;
