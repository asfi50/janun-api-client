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
 * @interface Profile
 */
export interface Profile {
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    bio?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    country?: string;
}
/**
 * Check if a given object implements the Profile interface.
 */
export declare function instanceOfProfile(value: object): value is Profile;
export declare function ProfileFromJSON(json: any): Profile;
export declare function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile;
export declare function ProfileToJSON(value?: Profile | null): any;