import * as React from "react";
import { connect } from "react-redux";
import {
  IFlashMessage,
  deleteFlashMessage
} from "../redux/actions/flashMessages";
import { IRootState } from "../redux/reducers/rootReducer";
import FlashMessage from "./FlashMessage";

interface IFlashMessagesListProps {
  messages: IFlashMessage[];
  deleteFlashMessage: (id: string) => any;
}

// tslint:disable-next-line:no-shadowed-variable
const IFlashMessageList: React.SFC<IFlashMessagesListProps> = ({
  messages,
  deleteFlashMessage
}) => (
    <div className="flash-messages" style={{ position: "absolute", 
                                             opacity: "60%", 
                                             paddingTop: "18%",    
                                             margin: "auto",
                                             top: "0",
                                             left: "0",
                                             right: "0",
                                             width: "fit-content",
                                             marginRight: "4%"
                                           }}>
    {messages.map(message => (
      <FlashMessage
        key={message.id}
        id={message.id}
        kind={message.kind}
        text={message.text}
        onDismiss={deleteFlashMessage}
      />
    ))}
    </div>
  // <div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: "200px"}}>
  //   <div style={{position: "absolute", top: "0", right: "0"}}>
  //     {messages.map(message => (
  //       <FlashMessage
  //         key={message.id}
  //         id={message.id}
  //         kind={message.kind}
  //         text={message.text}
  //         onDismiss={deleteFlashMessage}
  //       />
  //     ))}
  //   </div>
  // </div>
);

const mapStateToProps = (state: IRootState) => ({
  messages: state.flashMessages.messages
});

const mapDispatchToProps = dispatch => ({
  deleteFlashMessage: (id: string) => dispatch(deleteFlashMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IFlashMessageList);
