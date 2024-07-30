/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { Comment } from './Comment';
import {
    CommentFromJSON,
    CommentFromJSONTyped,
    CommentToJSON,
} from './Comment';
import type { PostMin } from './PostMin';
import {
    PostMinFromJSON,
    PostMinFromJSONTyped,
    PostMinToJSON,
} from './PostMin';
import type { UserMin } from './UserMin';
import {
    UserMinFromJSON,
    UserMinFromJSONTyped,
    UserMinToJSON,
} from './UserMin';
import type { ThreadMin } from './ThreadMin';
import {
    ThreadMinFromJSON,
    ThreadMinFromJSONTyped,
    ThreadMinToJSON,
} from './ThreadMin';

/**
 * 
 * @export
 * @interface Report
 */
export interface Report {
    /**
     * 
     * @type {number}
     * @memberof Report
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    status?: string;
    /**
     * 
     * @type {UserMin}
     * @memberof Report
     */
    user?: UserMin;
    /**
     * 
     * @type {PostMin}
     * @memberof Report
     */
    post?: PostMin;
    /**
     * 
     * @type {Comment}
     * @memberof Report
     */
    comment?: Comment;
    /**
     * 
     * @type {ThreadMin}
     * @memberof Report
     */
    thread?: ThreadMin;
}

/**
 * Check if a given object implements the Report interface.
 */
export function instanceOfReport(value: object): value is Report {
    return true;
}

export function ReportFromJSON(json: any): Report {
    return ReportFromJSONTyped(json, false);
}

export function ReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): Report {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'status': json['status'] == null ? undefined : json['status'],
        'user': json['user'] == null ? undefined : UserMinFromJSON(json['user']),
        'post': json['post'] == null ? undefined : PostMinFromJSON(json['post']),
        'comment': json['comment'] == null ? undefined : CommentFromJSON(json['comment']),
        'thread': json['thread'] == null ? undefined : ThreadMinFromJSON(json['thread']),
    };
}

export function ReportToJSON(value?: Report | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'reason': value['reason'],
        'status': value['status'],
        'user': UserMinToJSON(value['user']),
        'post': PostMinToJSON(value['post']),
        'comment': CommentToJSON(value['comment']),
        'thread': ThreadMinToJSON(value['thread']),
    };
}

