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
  GeneralResponse,
  PostsPage,
  Tag,
  TagCreateRequest,
  TagsPage,
} from '../models/index';
import {
    GeneralResponseFromJSON,
    GeneralResponseToJSON,
    PostsPageFromJSON,
    PostsPageToJSON,
    TagFromJSON,
    TagToJSON,
    TagCreateRequestFromJSON,
    TagCreateRequestToJSON,
    TagsPageFromJSON,
    TagsPageToJSON,
} from '../models/index';

export interface CreateTagRequest {
    tagCreateRequest: TagCreateRequest;
}

export interface DeleteTagRequest {
    slug: string;
}

export interface GetPostsInTagRequest {
    slug: string;
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}

export interface GetTagRequest {
    slug: string;
}

export interface GetTagsRequest {
    search?: string;
    sort?: string;
    order?: string;
    page?: number;
    size?: number;
}

export interface UpdateTagRequest {
    slug: string;
    tagCreateRequest: TagCreateRequest;
}

/**
 * 
 */
export class TagApi extends runtime.BaseAPI {

    /**
     * tag
     * create tag
     */
    async createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>> {
        if (requestParameters['tagCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'tagCreateRequest',
                'Required parameter "tagCreateRequest" was null or undefined when calling createTag().'
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
            path: `/tag`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagCreateRequestToJSON(requestParameters['tagCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagFromJSON(jsonValue));
    }

    /**
     * tag
     * create tag
     */
    async createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag> {
        const response = await this.createTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * tag
     * delete tag
     */
    async deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralResponse>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling deleteTag().'
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
            path: `/tag/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneralResponseFromJSON(jsonValue));
    }

    /**
     * tag
     * delete tag
     */
    async deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralResponse> {
        const response = await this.deleteTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all posts in a tag
     * Get Posts
     */
    async getPostsInTagRaw(requestParameters: GetPostsInTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostsPage>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling getPostsInTag().'
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
            path: `/tag/{slug}/posts`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostsPageFromJSON(jsonValue));
    }

    /**
     * Get all posts in a tag
     * Get Posts
     */
    async getPostsInTag(requestParameters: GetPostsInTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostsPage> {
        const response = await this.getPostsInTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get tag by slug
     * Get Tag
     */
    async getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling getTag().'
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
            path: `/tag/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagFromJSON(jsonValue));
    }

    /**
     * Get tag by slug
     * Get Tag
     */
    async getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag> {
        const response = await this.getTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all tags
     * Get Tags
     */
    async getTagsRaw(requestParameters: GetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagsPage>> {
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
            path: `/tag`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagsPageFromJSON(jsonValue));
    }

    /**
     * Get all tags
     * Get Tags
     */
    async getTags(requestParameters: GetTagsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagsPage> {
        const response = await this.getTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * tag
     * update tag
     */
    async updateTagRaw(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling updateTag().'
            );
        }

        if (requestParameters['tagCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'tagCreateRequest',
                'Required parameter "tagCreateRequest" was null or undefined when calling updateTag().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['slug'] != null) {
            queryParameters['slug'] = requestParameters['slug'];
        }

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
            path: `/tag/{slug}`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TagCreateRequestToJSON(requestParameters['tagCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagFromJSON(jsonValue));
    }

    /**
     * tag
     * update tag
     */
    async updateTag(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag> {
        const response = await this.updateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
