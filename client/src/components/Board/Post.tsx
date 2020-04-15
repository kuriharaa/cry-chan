import * as React from "react";
import * as moment from "moment";
import PostId from "../../../../shared/lib/types/PostId";
import NewModal from "./NewModal"
import PostImage from "./PostImage";

interface IPostProps {
  date: number;
  postNumber: PostId;
  authorName: string;
  content: string;
  subject?: string;
  isOpPost: boolean;
  imageUri?: string;
}

const Post: React.SFC<IPostProps> = ({
  date,
  postNumber,
  authorName,
  content,
  subject,
  isOpPost,
  imageUri
}) => {
  if(isOpPost){
    return (
      <div className="row mx-5 mt-3">
        <div className="col-3">
          <img src="assets/img/dump-touhou-face.png" className="img-fluid thread-pic"/>
        </div>
        <div className="col-9">
          <div className="text-right">	
            <button className="btn btn-sm" data-toggle="modal" data-target={`#post_${postNumber}`}>
              <img src="assets/svg/option.svg" className="img-fluid" width="60%" height="60%"/>
            </button>
            <NewModal isThread={false} modalNumber={postNumber.toString()} opPost={true}/>
          </div>
          <div className="thread-headline text-left">
            {subject}
          </div>
          <div className="thread-info text-left">
            <p>{moment(date).format("D/MM/YY")} {moment(date).format("HH:mm:ss")} {`№ ${postNumber}`}</p>
          </div>
          <div className="thread-desc text-left">
            {content}
          </div>
        </div>
      </div>
    // <div className={`post ${isOpPost ? "post--opPost" : ""}`}>
    //   <div
    //     className={`post__content  ${isOpPost ? "post__content--opPost" : ""}`}
    //   >
    //     <div
    //       className={`post__header  ${isOpPost ? "post__header--opPost" : ""}`}
    //     >
    //       {subject && <span className="post__subject">{subject}</span>}
    //       <span className="post__date">{moment(date).format("D/MM/YY")}</span>
    //       <span className="post__time">{moment(date).format("HH:mm:ss")}</span>
    //       <span className="post__number">{`No. ${postNumber}`}</span>
    //       <span className="post__author">{authorName}</span>
    //     </div>
    //     <div className="post__body">
    //       {imageUri && <PostImage url={imageUri} />}
    //       <div className="post__text">{content}</div>
    //     </div>
    //   </div>
    // </div>
    );
  }
  return (
        <div className="row text-left replies-border py-3 replies-info">
          <div className="col-3">
            <img src="assets/img/dump-touhou-face.png" className="img-fluid replies-pic"/>
					</div>
          <div className="col-9">
            <div className="text-right">
              <button className="btn btn-sm" data-toggle="modal" data-target={`#post_${postNumber}`}>
                <img src="assets/svg/option.svg" className="img-fluid" width="60%" height="60%" />
              </button>						
            </div>
            <NewModal isThread={false} modalNumber={postNumber.toString()} opPost={false}/>
            <div className="replies-info text-left">
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
              <a href="">>>24496769</a>
            </div>

            <div className="replies-info text-left pt-1">
              <p>{moment(date).format("D/MM/YY")} {moment(date).format("HH:mm:ss")} {`№ ${postNumber}`}</p>
            </div>
            <div className="replies-desc text-left">
              {content}
            </div>
					</div>
				</div>

  );
};

export default Post;
