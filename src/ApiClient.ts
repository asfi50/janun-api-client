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
import { Configuration } from './runtime';

export class ApiClient {
  public hello: HelloApi;
  public auth: AuthApi;
  public profile: ProfileApi;
  public feed: FeedApi;
  public channel: ChannelApi;
  public threads: ThreadsApi;
  public post: PostApi;
  public tag: TagApi;
  public report: ReportApi;
  public my: MyApi;

  constructor(basePath: string, accessToken?: string) {
    const configuration = new Configuration({
      basePath,
      accessToken,
    });

    this.hello = new HelloApi(configuration);
    this.auth = new AuthApi(configuration);
    this.profile = new ProfileApi(configuration);
    this.feed = new FeedApi(configuration);
    this.channel = new ChannelApi(configuration);
    this.threads = new ThreadsApi(configuration);
    this.post = new PostApi(configuration);
    this.tag = new TagApi(configuration);
    this.report = new ReportApi(configuration);
    this.my = new MyApi(configuration);
  }
}
