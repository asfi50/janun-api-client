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
import type { Tag } from './Tag';
/**
 *
 * @export
 * @interface TagsPage
 */
export interface TagsPage {
    /**
     *
     * @type {Array<Tag>}
     * @memberof TagsPage
     */
    data?: Array<Tag>;
    /**
     *
     * @type {number}
     * @memberof TagsPage
     */
    pageNumber?: number;
    /**
     *
     * @type {number}
     * @memberof TagsPage
     */
    pageSize?: number;
    /**
     *
     * @type {number}
     * @memberof TagsPage
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     * @memberof TagsPage
     */
    totalPages?: number;
    /**
     *
     * @type {boolean}
     * @memberof TagsPage
     */
    last?: boolean;
}
/**
 * Check if a given object implements the TagsPage interface.
 */
export declare function instanceOfTagsPage(value: object): value is TagsPage;
export declare function TagsPageFromJSON(json: any): TagsPage;
export declare function TagsPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagsPage;
export declare function TagsPageToJSON(value?: TagsPage | null): any;