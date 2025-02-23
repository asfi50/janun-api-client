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
 * @interface ChangePasswordRequest
 */
export interface ChangePasswordRequest {
    /**
     *
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    oldPassword?: string;
    /**
     *
     * @type {string}
     * @memberof ChangePasswordRequest
     */
    newPassword?: string;
}
/**
 * Check if a given object implements the ChangePasswordRequest interface.
 */
export declare function instanceOfChangePasswordRequest(value: object): value is ChangePasswordRequest;
export declare function ChangePasswordRequestFromJSON(json: any): ChangePasswordRequest;
export declare function ChangePasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangePasswordRequest;
export declare function ChangePasswordRequestToJSON(value?: ChangePasswordRequest | null): any;
