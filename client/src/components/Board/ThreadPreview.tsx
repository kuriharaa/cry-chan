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
      {/* <div className="row mx-5 mt-3">
        <div className="col-3">
          <img src="assets/img/dump-touhou-face.png" className="img-fluid thread-pic"/>
        </div>
        <div className="col-9">
          <div className="text-right">	
            <button className="btn btn-sm">
              <img src="assets/svg/option.svg" className="img-fluid" width="50%" height="50%"/>
            </button>
          </div>
          <div className="thread-headline text-left">
            touhou games sucks
          </div>
          <div className="thread-info text-left">
            <p>18/03/2020 12:31 № 20014414321</p>
          </div>
          <div className="thread-desc text-left">
            They're all shutting things down, glowniggers and redditors shitting up /pol/ to the brim, entire EU to go on lockdown, military trucks everywhere, saucers spraying the planet with unknown substances, possible martial law to be instated, wage cucks being laid off, entities coming out of the wood work, sigils being formed, everyone's manifestations going hay wire, dreams becoming more vivid and memorable, more signs from god, and crystals becoming even more powerful than before.
          </div>
        </div>
      </div> */}

      <div className="row mx-5 mt-2">
        <div className="col-3 text-center thread-info">
          <a href="">+ ${numberOfOmmitedPosts} replies omitted</a>
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
        {/* <div className="row text-left replies-border py-3 replies-info">
          <div className="col-3">
            <img src="assets/img/dump-touhou-face.png" className="img-fluid replies-pic"/>
					</div>
          <div className="col-9">
            <div className="text-right">
              <button className="btn btn-sm" data-toggle="modal" data-target="#exampleReply_1">
                <img src="assets/svg/option.svg" className="img-fluid" width="50%" height="50%" />
              </button>						
            </div>

            <div className="replies-info text-left">
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
            </div>

            <div className="replies-info text-left pt-1">
              <p>18/03/2020 12:31 № 20014414321</p>
            </div>
            <div className="replies-desc text-left">
              They're all shutting things down, glowniggers and redditors shitting up /pol/ to the brim, entire EU to go on lockdown, military trucks everywhere, saucers spraying the planet with unknown substances, possible martial law to be instated, wage cucks being laid off, entities coming out of the wood work, sigils being formed, everyone's manifestations going hay wire, dreams becoming more vivid and memorable, more signs from god, and crystals becoming even more powerful than before.
            </div>
					</div>
				</div> */}
      </div>

    </div>
  </div>
      // <div className="thread-preview">
      //   <Post {...opPost} isOpPost={true} />
      //   <div className="thread-preview__info">
      //     <span className="thread-preview__info-text">{`${numberOfOmmitedPosts} replies ommited.`}</span>
      //     <a
      //       className="thread-preview__thread-link"
      //       href={`${link}/${opPost.postNumber}`}
      //     >
      //       Click here
      //     </a>
      //     <span className="thread-preview__info">to view.</span>
      //   </div>
      //   <div className="thread-preview__posts">
      //     {posts
      //       .slice(0, 2)
      //       .map(p => <Post key={p.postNumber} {...p} isOpPost={false} />)}
      //   </div>
      //   <hr />
      // </div> 
    );
  }
}
