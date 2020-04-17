import * as React from "react";
import { FlashMessageKind } from "../redux/actions/flashMessages";

interface IFlashMessageProps {
  kind: FlashMessageKind;
  text: string;
  id: string;
  onDismiss: (id: string) => any;
}

export default class FlashMessage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public onDismiss = () => {
    this.props.onDismiss(this.props.id);
  };

  public render() {
    return (
      // <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      //   <div className="toast-header">
      //     {/* <img src="..." className="rounded mr-2" alt="..."/> */}
      //     <strong className="mr-auto">${this.props.kind}</strong>
      //     {/* <small className="text-muted">just now</small> */}
      //     <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick={this.onDismiss}>
      //       <span aria-hidden="true">&times;</span>
      //     </button>
      //   </div>
      //   <div className="toast-body">
      //     {this.props.text}
      //   </div>
      // </div>

      <div className={`flash-message flash-messsage--${this.props.kind}`} onClick={this.onDismiss}>
        <div className="flash-message__text">{this.props.text}</div>
        {/* <a onClick={this.onDismiss} className="flash-message__close">
          <i className="fa fa-close" />
        </a> */}
      </div>
    );
  }
}
