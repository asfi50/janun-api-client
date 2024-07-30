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
 * @interface CommentCreateRequest
 */
export interface CommentCreateRequest {
    /**
     *
     * @type {string}
     * @memberof CommentCreateRequest
     */
    content?: string;
    /**
     *
     * @type {boolean}
     * @memberof CommentCreateRequest
     */
    anonymous?: boolean;
}
/**
 * Check if a given object implements the CommentCreateRequest interface.
 */
export declare function instanceOfCommentCreateRequest(value: object): value is CommentCreateRequest;
export declare function CommentCreateRequestFromJSON(json: any): CommentCreateRequest;
export declare function CommentCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentCreateRequest;
export declare function CommentCreateRequestToJSON(value?: CommentCreateRequest | null): any;
