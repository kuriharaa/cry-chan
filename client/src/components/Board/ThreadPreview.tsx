import * as React from "react";
import Post from "./Post";
import { IThread } from "../../lib/Thread";
import { IBoardCredentials } from "../../../../shared/lib/types/BoardCredentials";

interface IThreadPreviewProps {
  threadData: IThread;
  curBoard: IBoardCredentials;
}

export default class ThreadPreview extends React.Component<
  IThreadPreviewProps,
  {}
> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { opPost, posts } = this.props.threadData;
    const numberOfOmmitedPosts: number =
      posts.length - Math.min(posts.length, 2);
    const { link } = this.props.curBoard;
    return (
      <div className="threads">
        <div className="thread">
          <Post {...opPost} isOpPost={true} />

          <div className="row mx-5 mt-2">
            <div className="col-3 text-center thread-info">
              <a href="">+ {numberOfOmmitedPosts} replies omitted</a>
            </div>
            <div className="col-9 text-left thread-info">
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
            </div>
          </div>
        <div className="row replies mt-2 text-right">
        {posts
              .slice(0, 2)
              .map(p => <Post key={p.postNumber} {...p} isOpPost={false} />)}
       </div>
      </div>
    </div>
    );
  };
}
