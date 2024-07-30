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
 * @interface RegisterRequest
 */
export interface RegisterRequest {
    /**
     *
     * @type {string}
     * @memberof RegisterRequest
     */
    username: string;
    /**
     *
     * @type {string}
     * @memberof RegisterRequest
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof RegisterRequest
     */
    password?: string;
}
/**
 * Check if a given object implements the RegisterRequest interface.
 */
export declare function instanceOfRegisterRequest(value: object): value is RegisterRequest;
export declare function RegisterRequestFromJSON(json: any): RegisterRequest;
export declare function RegisterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterRequest;
export declare function RegisterRequestToJSON(value?: RegisterRequest | null): any;
