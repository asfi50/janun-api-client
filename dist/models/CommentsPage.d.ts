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
import type { Comment } from './Comment';
/**
 *
 * @export
 * @interface CommentsPage
 */
export interface CommentsPage {
    /**
     *
     * @type {Array<Comment>}
     * @memberof CommentsPage
     */
    data?: Array<Comment>;
    /**
     *
     * @type {number}
     * @memberof CommentsPage
     */
    pageNumber?: number;
    /**
     *
     * @type {number}
     * @memberof CommentsPage
     */
    pageSize?: number;
    /**
     *
     * @type {number}
     * @memberof CommentsPage
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof CommentsPage
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof CommentsPage
     */
    last?: boolean;
}
/**
 * Check if a given object implements the CommentsPage interface.
 */
export declare function instanceOfCommentsPage(value: object): value is CommentsPage;
export declare function CommentsPageFromJSON(json: any): CommentsPage;
export declare function CommentsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentsPage;
export declare function CommentsPageToJSON(value?: CommentsPage | null): any;