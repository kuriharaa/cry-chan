import * as React from "react";
import BoardHeader from "../BoardHeader";
import Post from "../Post";
import { IBoardCredentials } from "../../../../../shared/lib/types/BoardCredentials";
import { IPost } from "../../../lib/Post";
import * as moment from "moment";
import { IThread } from "../../../lib/Thread";
import BoardList from "../BoardList";
import NewPostFormContainer from "./NewPostFormContainer";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";
import Loading from "../../Loading";

interface IThreadProps {
  boardCredentials: IBoardCredentials;
  threadNumber: number;
  threadData?: IThread;
  loading: boolean;
}

const Thread: React.SFC<IThreadProps> = ({
  boardCredentials,
  threadNumber,
  threadData,
  loading
}) => {
  return (
    <div>
      <div className="row align-items-start justify-content-between w-100 board-name">
        <p className="thread-title w-100 text-center">
          {boardCredentials.link.replace("/","/ ") + " /"} - {boardCredentials.name}
          <button type="button" className="btn-new-thread" data-toggle="modal" data-target="#newPostModal">
            new post
          </button>
          <NewPostFormContainer />
        </p>
      </div>
        <Loading isLoading={loading} />
        <div className="threads">
          <div className="thread">
            {threadData && <Post {...threadData.opPost} isOpPost={true} />}

            <div className="row mx-5 mt-2">
              <div className="col-3 text-center thread-info">
                {/* <a href={`${link}/${opPost.postNumber}`}>
                + {numberOfOmmitedPosts} replies omitted
                </a> */}
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
            {threadData &&
           threadData.posts.map(post => (
             <Post key={post.postNumber} {...post} isOpPost={false} />
        ))}
       </div>
      </div>
    </div>
        {/* {threadData && <Post {...threadData.opPost} isOpPost={true} />}
        {threadData &&
           threadData.posts.map(post => (
             <Post key={post.postNumber} {...post} isOpPost={false} />
        ))} */}

    </div>
    // <React.Fragment>
    //   <BoardHeader
    //     actionName="Post a Reply"
    //     Form={NewPostFormContainer}
    //     credentials={boardCredentials}
    //   />
    //   <div className="thread__body">
    //     <Loading isLoading={loading} />
    //     {threadData && <Post {...threadData.opPost} isOpPost={true} />}
    //     {threadData &&
    //       threadData.posts.map(post => (
    //         <Post key={post.postNumber} {...post} isOpPost={false} />
    //       ))}
    //   </div>
    //   <hr />
    // </React.Fragment>
  );
};

export default Thread;
