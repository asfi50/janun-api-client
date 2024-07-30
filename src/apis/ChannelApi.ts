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


import * as runtime from '../runtime';
import type {
  Channel,
  ChannelCreateRequest,
  ChannelsPage,
  GeneralResponse,
  PostsPage,
} from '../models/index';
import {
    ChannelFromJSON,
    ChannelToJSON,
    ChannelCreateRequestFromJSON,
    ChannelCreateRequestToJSON,
    ChannelsPageFromJSON,
    ChannelsPageToJSON,
    GeneralResponseFromJSON,
    GeneralResponseToJSON,
    PostsPageFromJSON,
    PostsPageToJSON,
} from '../models/index';

export interface CreateChannelRequest {
    channelCreateRequest: ChannelCreateRequest;
}

export interface DeleteChannelRequest {
    slug: string;
}

export interface GetChannelRequest {
    slug: string;
}

export interface GetChannelsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}

export interface GetPostsInChannelRequest {
    slug: string;
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}

export interface SubscribeChannelRequest {
    slug: string;
}

export interface UnsubscribeChannelRequest {
    slug: string;
}

export interface UpdateChannelRequest {
    slug: string;
    channelCreateRequest: ChannelCreateRequest;
}

/**
 * 
 */
export class ChannelApi extends runtime.BaseAPI {

    /**
     * Create a new channel
     * Create Channel
     */
    async createChannelRaw(requestParameters: CreateChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Channel>> {
        if (requestParameters['channelCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'channelCreateRequest',
                'Required parameter "channelCreateRequest" was null or undefined when calling createChannel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChannelCreateRequestToJSON(requestParameters['channelCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelFromJSON(jsonValue));
    }

    /**
     * Create a new channel
     * Create Channel
     */
    async createChannel(requestParameters: CreateChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Channel> {
        const response = await this.createChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a channel
     * Delete Channel
     */
    async deleteChannelRaw(requestParameters: DeleteChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralResponse>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling deleteChannel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneralResponseFromJSON(jsonValue));
    }

    /**
     * Delete a channel
     * Delete Channel
     */
    async deleteChannel(requestParameters: DeleteChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralResponse> {
        const response = await this.deleteChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get channel by slug
     * Get Channel
     */
    async getChannelRaw(requestParameters: GetChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Channel>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling getChannel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelFromJSON(jsonValue));
    }

    /**
     * Get channel by slug
     * Get Channel
     */
    async getChannel(requestParameters: GetChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Channel> {
        const response = await this.getChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all channels
     * Get Channels
     */
    async getChannelsRaw(requestParameters: GetChannelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsPage>> {
        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsPageFromJSON(jsonValue));
    }

    /**
     * Get all channels
     * Get Channels
     */
    async getChannels(requestParameters: GetChannelsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsPage> {
        const response = await this.getChannelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get posts in a channel
     * Get Posts
     */
    async getPostsInChannelRaw(requestParameters: GetPostsInChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostsPage>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling getPostsInChannel().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel/{slug}/posts`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostsPageFromJSON(jsonValue));
    }

    /**
     * Get posts in a channel
     * Get Posts
     */
    async getPostsInChannel(requestParameters: GetPostsInChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostsPage> {
        const response = await this.getPostsInChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Subscribe to a channel. If user is subscribed to any thread in the channel then nothing will happen. Otherwise, user will be subscribed to all threads in the channel.
     * Subscribe to Channel
     */
    async subscribeChannelRaw(requestParameters: SubscribeChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Channel>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling subscribeChannel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel/{slug}/subscribe`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelFromJSON(jsonValue));
    }

    /**
     * Subscribe to a channel. If user is subscribed to any thread in the channel then nothing will happen. Otherwise, user will be subscribed to all threads in the channel.
     * Subscribe to Channel
     */
    async subscribeChannel(requestParameters: SubscribeChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Channel> {
        const response = await this.subscribeChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unsubscribe from a channel. If user is not subscribed to any thread in the channel then nothing will happen. Otherwise, user will be unsubscribed from all threads in the channel.
     * Unsubscribe from Channel
     */
    async unsubscribeChannelRaw(requestParameters: UnsubscribeChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Channel>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling unsubscribeChannel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel/{slug}/unsubscribe`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelFromJSON(jsonValue));
    }

    /**
     * Unsubscribe from a channel. If user is not subscribed to any thread in the channel then nothing will happen. Otherwise, user will be unsubscribed from all threads in the channel.
     * Unsubscribe from Channel
     */
    async unsubscribeChannel(requestParameters: UnsubscribeChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Channel> {
        const response = await this.unsubscribeChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a channel
     * Update Channel
     */
    async updateChannelRaw(requestParameters: UpdateChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Channel>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling updateChannel().'
            );
        }

        if (requestParameters['channelCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'channelCreateRequest',
                'Required parameter "channelCreateRequest" was null or undefined when calling updateChannel().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/channel/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ChannelCreateRequestToJSON(requestParameters['channelCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelFromJSON(jsonValue));
    }

    /**
     * Update a channel
     * Update Channel
     */
    async updateChannel(requestParameters: UpdateChannelRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Channel> {
        const response = await this.updateChannelRaw(requestParameters, initOverrides);
        return await response.value();
    }

}