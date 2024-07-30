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
 * @interface TagMin
 */
export interface TagMin {
    /**
     *
     * @type {string}
     * @memberof TagMin
     */
    name?: string;
}
/**
 * Check if a given object implements the TagMin interface.
 */
export declare function instanceOfTagMin(value: object): value is TagMin;
export declare function TagMinFromJSON(json: any): TagMin;
export declare function TagMinFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagMin;
export declare function TagMinToJSON(value?: TagMin | null): any;