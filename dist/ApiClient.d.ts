import { HelloApi } from './apis/HelloApi';
import { AuthApi } from './apis/AuthApi';
import { ProfileApi } from './apis/ProfileApi';
import { FeedApi } from './apis/FeedApi';
import { ChannelApi } from './apis/ChannelApi';
import { ThreadsApi } from './apis/ThreadsApi';
import { PostApi } from './apis/PostApi';
import { TagApi } from './apis/TagApi';
import { ReportApi } from './apis/ReportApi';
import { MyApi } from './apis/MyApi';
export declare class ApiClient {
    hello: HelloApi;
    auth: AuthApi;
    profile: ProfileApi;
    feed: FeedApi;
    channel: ChannelApi;
    threads: ThreadsApi;
    post: PostApi;
    tag: TagApi;
    report: ReportApi;
    my: MyApi;
    constructor(basePath: string, accessToken?: string);
}
