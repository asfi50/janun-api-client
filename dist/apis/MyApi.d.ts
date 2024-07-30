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
import type { ChannelsPage, CommentsPage, PostsPage, ReactionsPage, ReportsPage, ThreadsPage, User } from '../models/index';
export interface GetMyCommentsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}
export interface GetMyReactionsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}
export interface GetMyReportsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}
export interface GetMySubscribedChannelsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}
export interface GetMySubscribedPostsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}
export interface GetMySubscribedThreadsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}
/**
 *
 */
export declare class MyApi extends runtime.BaseAPI {
    /**
     * get logged in user
     * get logged in user
     */
    getMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;
    /**
     * get logged in user
     * get logged in user
     */
    getMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;
    /**
     * Get all comments by me
     */
    getMyCommentsRaw(requestParameters: GetMyCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommentsPage>>;
    /**
     * Get all comments by me
     */
    getMyComments(requestParameters?: GetMyCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommentsPage>;
    /**
     * Get all reactions by me
     */
    getMyReactionsRaw(requestParameters: GetMyReactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReactionsPage>>;
    /**
     * Get all reactions by me
     */
    getMyReactions(requestParameters?: GetMyReactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReactionsPage>;
    /**
     * Get all reports by me
     */
    getMyReportsRaw(requestParameters: GetMyReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReportsPage>>;
    /**
     * Get all reports by me
     */
    getMyReports(requestParameters?: GetMyReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReportsPage>;
    /**
     * user\'s subscribed channels
     */
    getMySubscribedChannelsRaw(requestParameters: GetMySubscribedChannelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsPage>>;
    /**
     * user\'s subscribed channels
     */
    getMySubscribedChannels(requestParameters?: GetMySubscribedChannelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsPage>;
    /**
     * Get subscribed posts
     */
    getMySubscribedPostsRaw(requestParameters: GetMySubscribedPostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostsPage>>;
    /**
     * Get subscribed posts
     */
    getMySubscribedPosts(requestParameters?: GetMySubscribedPostsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostsPage>;
    /**
     * Get subscribed Threads
     */
    getMySubscribedThreadsRaw(requestParameters: GetMySubscribedThreadsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThreadsPage>>;
    /**
     * Get subscribed Threads
     */
    getMySubscribedThreads(requestParameters?: GetMySubscribedThreadsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThreadsPage>;
}
