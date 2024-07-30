"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class ChannelApi extends runtime.BaseAPI {
    /**
     * Create a new channel
     * Create Channel
     */
    createChannelRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['channelCreateRequest'] == null) {
                throw new runtime.RequiredError('channelCreateRequest', 'Required parameter "channelCreateRequest" was null or undefined when calling createChannel().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.ChannelCreateRequestToJSON)(requestParameters['channelCreateRequest']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChannelFromJSON)(jsonValue));
        });
    }
    /**
     * Create a new channel
     * Create Channel
     */
    createChannel(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createChannelRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete a channel
     * Delete Channel
     */
    deleteChannelRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling deleteChannel().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GeneralResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Delete a channel
     * Delete Channel
     */
    deleteChannel(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteChannelRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get channel by slug
     * Get Channel
     */
    getChannelRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling getChannel().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChannelFromJSON)(jsonValue));
        });
    }
    /**
     * Get channel by slug
     * Get Channel
     */
    getChannel(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getChannelRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all channels
     * Get Channels
     */
    getChannelsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
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
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChannelsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Get all channels
     * Get Channels
     */
    getChannels() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getChannelsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get posts in a channel
     * Get Posts
     */
    getPostsInChannelRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling getPostsInChannel().');
            }
            const queryParameters = {};
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
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel/{slug}/posts`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PostsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Get posts in a channel
     * Get Posts
     */
    getPostsInChannel(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPostsInChannelRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Subscribe to a channel. If user is subscribed to any thread in the channel then nothing will happen. Otherwise, user will be subscribed to all threads in the channel.
     * Subscribe to Channel
     */
    subscribeChannelRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling subscribeChannel().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel/{slug}/subscribe`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChannelFromJSON)(jsonValue));
        });
    }
    /**
     * Subscribe to a channel. If user is subscribed to any thread in the channel then nothing will happen. Otherwise, user will be subscribed to all threads in the channel.
     * Subscribe to Channel
     */
    subscribeChannel(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.subscribeChannelRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Unsubscribe from a channel. If user is not subscribed to any thread in the channel then nothing will happen. Otherwise, user will be unsubscribed from all threads in the channel.
     * Unsubscribe from Channel
     */
    unsubscribeChannelRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling unsubscribeChannel().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel/{slug}/unsubscribe`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChannelFromJSON)(jsonValue));
        });
    }
    /**
     * Unsubscribe from a channel. If user is not subscribed to any thread in the channel then nothing will happen. Otherwise, user will be unsubscribed from all threads in the channel.
     * Unsubscribe from Channel
     */
    unsubscribeChannel(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.unsubscribeChannelRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update a channel
     * Update Channel
     */
    updateChannelRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling updateChannel().');
            }
            if (requestParameters['channelCreateRequest'] == null) {
                throw new runtime.RequiredError('channelCreateRequest', 'Required parameter "channelCreateRequest" was null or undefined when calling updateChannel().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("BearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/channel/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.ChannelCreateRequestToJSON)(requestParameters['channelCreateRequest']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChannelFromJSON)(jsonValue));
        });
    }
    /**
     * Update a channel
     * Update Channel
     */
    updateChannel(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateChannelRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ChannelApi = ChannelApi;