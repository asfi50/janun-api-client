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
exports.MyApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class MyApi extends runtime.BaseAPI {
    /**
     * get logged in user
     * get logged in user
     */
    getMeRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
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
                path: `/my/`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UserFromJSON)(jsonValue));
        });
    }
    /**
     * get logged in user
     * get logged in user
     */
    getMe(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMeRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all comments by me
     */
    getMyCommentsRaw(requestParameters, initOverrides) {
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
                path: `/my/comment`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CommentsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Get all comments by me
     */
    getMyComments() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getMyCommentsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all reactions by me
     */
    getMyReactionsRaw(requestParameters, initOverrides) {
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
                path: `/my/reaction`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReactionsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Get all reactions by me
     */
    getMyReactions() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getMyReactionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all reports by me
     */
    getMyReportsRaw(requestParameters, initOverrides) {
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
                path: `/my/report`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReportsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Get all reports by me
     */
    getMyReports() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getMyReportsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * user\'s subscribed channels
     */
    getMySubscribedChannelsRaw(requestParameters, initOverrides) {
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
                path: `/my/channel`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ChannelsPageFromJSON)(jsonValue));
        });
    }
    /**
     * user\'s subscribed channels
     */
    getMySubscribedChannels() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getMySubscribedChannelsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get subscribed posts
     */
    getMySubscribedPostsRaw(requestParameters, initOverrides) {
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
                path: `/my/post`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PostsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Get subscribed posts
     */
    getMySubscribedPosts() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getMySubscribedPostsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get subscribed Threads
     */
    getMySubscribedThreadsRaw(requestParameters, initOverrides) {
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
                path: `/my/thread`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ThreadsPageFromJSON)(jsonValue));
        });
    }
    /**
     * Get subscribed Threads
     */
    getMySubscribedThreads() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getMySubscribedThreadsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.MyApi = MyApi;
