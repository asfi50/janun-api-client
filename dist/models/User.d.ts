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
import type { Profile } from './Profile';
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    premium?: boolean;
    /**
     *
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    phone?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    role?: string;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    emailConfirmed?: boolean;
    /**
     *
     * @type {Profile}
     * @memberof User
     */
    profile?: Profile;
}
/**
 * Check if a given object implements the User interface.
 */
export declare function instanceOfUser(value: object): value is User;
export declare function UserFromJSON(json: any): User;
export declare function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User;
export declare function UserToJSON(value?: User | null): any;
