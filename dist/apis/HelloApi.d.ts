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
import * as runtime from '../runtime';
/**
 *
 */
export declare class HelloApi extends runtime.BaseAPI {
    /**
     */
    testAdminRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     */
    testAdmin(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     */
    testManagerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     */
    testManager(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
    /**
     */
    testUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;
    /**
     */
    testUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;
}
