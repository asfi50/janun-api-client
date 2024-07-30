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
export declare function instanceOfRegister(value: object): value is Register;
export declare function RegisterFromJSON(json: any): Register;
export declare function RegisterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Register;
export declare function RegisterToJSON(value?: Register | null): any;