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
exports.ReactToPostTypeEnum = exports.PostApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class PostApi extends runtime.BaseAPI {
    /**
     * create comment
     * create comment
     */
    createCommentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling createComment().');
            }
            if (requestParameters['commentCreateRequest'] == null) {
                throw new runtime.RequiredError('commentCreateRequest', 'Required parameter "commentCreateRequest" was null or undefined when calling createComment().');
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
                path: `/post/{slug}/comment`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.CommentCreateRequestToJSON)(requestParameters['commentCreateRequest']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CommentFromJSON)(jsonValue));
        });
    }
    /**
     * create comment
     * create comment
     */
    createComment(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createCommentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * create post
     * create post
     */
    createPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['postCreateRequest'] == null) {
                throw new runtime.RequiredError('postCreateRequest', 'Required parameter "postCreateRequest" was null or undefined when calling createPost().');
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
                path: `/post`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.PostCreateRequestToJSON)(requestParameters['postCreateRequest']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PostFromJSON)(jsonValue));
        });
    }
    /**
     * create post
     * create post
     */
    createPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * delete comment
     * delete comment
     */
    deleteCommentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling deleteComment().');
            }
            if (requestParameters['commentId'] == null) {
                throw new runtime.RequiredError('commentId', 'Required parameter "commentId" was null or undefined when calling deleteComment().');
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
                path: `/post/{slug}/comment/{commentId}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))).replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters['commentId']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GeneralResponseFromJSON)(jsonValue));
        });
    }
    /**
     * delete comment
     * delete comment
     */
    deleteComment(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCommentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * delete post
     * delete post
     */
    deletePostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling deletePost().');
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
                path: `/post/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.GeneralResponseFromJSON)(jsonValue));
        });
    }
    /**
     * delete post
     * delete post
     */
    deletePost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deletePostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * get comment
     * get comment
     */
    getCommentRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling getComment().');
            }
            if (requestParameters['commentId'] == null) {
                throw new runtime.RequiredError('commentId', 'Required parameter "commentId" was null or undefined when calling getComment().');
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
                path: `/post/{slug}/comment/{commentId}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))).replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters['commentId']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CommentFromJSON)(jsonValue));
        });
    }
    /**
     * get comment
     * get comment
     */
    getComment(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCommentRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * get comments
     * get comments
     */
    getCommentsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling getComments().');
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
                path: `/post/{slug}/comment`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CommentsPageFromJSON)(jsonValue));
        });
    }
    /**
     * get comments
     * get comments
     */
    getComments(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCommentsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * get my comments
     * get my comments
     */
    getMyCommentsInPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling getMyCommentsInPost().');
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
                path: `/post/{slug}/my-comments`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CommentsPageFromJSON)(jsonValue));
        });
    }
    /**
     * get my comments
     * get my comments
     */
    getMyCommentsInPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getMyCommentsInPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * get post
     * get post
     */
    getPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling getPost().');
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
                path: `/post/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PostFromJSON)(jsonValue));
        });
    }
    /**
     * get post
     * get post
     */
    getPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * get posts
     * get posts
     */
    getPostsRaw(requestParameters, initOverrides) {
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
                path: `/post`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PostsPageFromJSON)(jsonValue));
        });
    }
    /**
     * get posts
     * get posts
     */
    getPosts() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getPostsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * react to post
     * react to post
     */
    reactToPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling reactToPost().');
            }
            const queryParameters = {};
            if (requestParameters['type'] != null) {
                queryParameters['type'] = requestParameters['type'];
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
                path: `/post/{slug}/react`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PostFromJSON)(jsonValue));
        });
    }
    /**
     * react to post
     * react to post
     */
    reactToPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.reactToPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * update post
     * update post
     */
    updatePostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['slug'] == null) {
                throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling updatePost().');
            }
            if (requestParameters['postCreateRequest'] == null) {
                throw new runtime.RequiredError('postCreateRequest', 'Required parameter "postCreateRequest" was null or undefined when calling updatePost().');
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
                path: `/post/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.PostCreateRequestToJSON)(requestParameters['postCreateRequest']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PostFromJSON)(jsonValue));
        });
    }
    /**
     * update post
     * update post
     */
    updatePost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updatePostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.PostApi = PostApi;
/**
 * @export
 */
exports.ReactToPostTypeEnum = {
    Like: 'like',
    Dislike: 'dislike'
};
