import * as React from "react";
import classnames from "classnames";
import * as $ from "jquery";
import BoardList from "./BoardList";
import { IBoardCredentials } from "../../../../shared/lib/types/BoardCredentials";
import TextLink from "../TextLink";
import NewThreadFormContainer from "./NewThreadFormContainer";
import NewPostFormContainer from "./Thread/NewPostFormContainer";
import NewModal from "./NewThreadModal";

interface IBoardHeaderProps {
  credentials: IBoardCredentials;
  actionName: string;
  Form?: typeof NewThreadFormContainer | typeof NewPostFormContainer;
}

interface IBoardHeaderState {
  isFormOpen: boolean;
}

class BoardHeader extends React.Component<IBoardHeaderProps, IBoardHeaderState> {
  public static defaultProps = {
    Form: NewThreadFormContainer
  };
  public state = {
    isFormOpen: false
  };

  constructor(props) {
    super(props);
  }

  public render () {
    const { credentials, actionName, Form } = this.props;
    const { isFormOpen } = this.state;

    return (
      <div className="row align-items-start justify-content-between w-100 board-name">
        <p className="thread-title w-100 text-center">
          {credentials.link.replace("/","/ ") + " /"} - {credentials.name}
          <button type="button" className="btn-new-thread" data-toggle="modal" data-target="#newThreadModal">
            new thread
          </button> 
          <NewThreadFormContainer />
          {/* <NewModal isThread={true}/> */}
        </p>
      </div>

      // <header className="board__header">
      //   <BoardList />
      //   <h1 className="board__header-name u-center-text">
      //     {credentials.link + "/"} - {credentials.name}
      //   </h1>
      //   <hr className="board__header-before-create-button" />
      //   <div className="board__header-action u-center-text">
      //     <div className="board__header-action-button" id="initial-button">
      //       <span className="board__header-action-caret">[</span>
      //       <a
      //         className="board__header-start-new-thread"
      //         id="start-new-thread"
      //         onClick={() => {
      //           this.setState(() => ({
      //             isFormOpen: !isFormOpen
      //           }));
      //         }}
      //       >
      //         { isFormOpen ? "X": actionName }
      //       </a>
      //       <span className="board__header-action-caret">]</span>
      //     </div>
      //     <div className={classnames("new-thread-form", { "u-hide": !isFormOpen })} id="new-thread-form">
      //       <Form />
      //     </div>
      //   </div>
      //   <hr className="board__header-after-create-button" />
      // </header>
    );
  };
}

export default BoardHeader;
