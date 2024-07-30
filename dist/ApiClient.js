"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const HelloApi_1 = require("./apis/HelloApi");
const AuthApi_1 = require("./apis/AuthApi");
const ProfileApi_1 = require("./apis/ProfileApi");
const FeedApi_1 = require("./apis/FeedApi");
const ChannelApi_1 = require("./apis/ChannelApi");
const ThreadsApi_1 = require("./apis/ThreadsApi");
const PostApi_1 = require("./apis/PostApi");
const TagApi_1 = require("./apis/TagApi");
const ReportApi_1 = require("./apis/ReportApi");
const MyApi_1 = require("./apis/MyApi");
const runtime_1 = require("./runtime");
class ApiClient {
    constructor(basePath, accessToken) {
        const configuration = new runtime_1.Configuration({
            basePath,
            accessToken,
        });
        this.hello = new HelloApi_1.HelloApi(configuration);
        this.auth = new AuthApi_1.AuthApi(configuration);
        this.profile = new ProfileApi_1.ProfileApi(configuration);
        this.feed = new FeedApi_1.FeedApi(configuration);
        this.channel = new ChannelApi_1.ChannelApi(configuration);
        this.threads = new ThreadsApi_1.ThreadsApi(configuration);
        this.post = new PostApi_1.PostApi(configuration);
        this.tag = new TagApi_1.TagApi(configuration);
        this.report = new ReportApi_1.ReportApi(configuration);
        this.my = new MyApi_1.MyApi(configuration);
    }
}
exports.ApiClient = ApiClient;
