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
 * @interface ThreadMin
 */
export interface ThreadMin {
    /**
     *
     * @type {string}
     * @memberof ThreadMin
     */
    slug?: string;
    /**
     *
     * @type {string}
     * @memberof ThreadMin
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof ThreadMin
     */
    premium?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ThreadMin
     */
    subscribed?: boolean;
}
/**
 * Check if a given object implements the ThreadMin interface.
 */
export declare function instanceOfThreadMin(value: object): value is ThreadMin;
export declare function ThreadMinFromJSON(json: any): ThreadMin;
export declare function ThreadMinFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThreadMin;
export declare function ThreadMinToJSON(value?: ThreadMin | null): any;
