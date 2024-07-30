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
 * @interface ReportUpdateRequest
 */
export interface ReportUpdateRequest {
    /**
     *
     * @type {string}
     * @memberof ReportUpdateRequest
     */
    status?: string;
}
/**
 * Check if a given object implements the ReportUpdateRequest interface.
 */
export declare function instanceOfReportUpdateRequest(value: object): value is ReportUpdateRequest;
export declare function ReportUpdateRequestFromJSON(json: any): ReportUpdateRequest;
export declare function ReportUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportUpdateRequest;
export declare function ReportUpdateRequestToJSON(value?: ReportUpdateRequest | null): any;
