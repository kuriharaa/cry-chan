import * as React from "react";

import Loading from "../Loading";
import FileUpload from "./FileUpload";
import { IFile } from "../../../../shared/lib/types/File";
import { Modal, Button } from 'react-bootstrap';
import { props } from "ramda";
import { string } from "@mojotech/json-type-validation";
//import { render } from "enzyme";

interface INewThreadFormProps {
    onAuthorNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onThreadNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMessageChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onLoadSuccess?: (file: IFile) => any;
    onSubmit?: (e: React.FormEvent) => void;
    authorName?: string;
    threadName?: string;
    modalNumber?: string;
    message?: string;
    isSubmitting: boolean;
    // isThread: boolean;
    opPost?: boolean;
  }


const NewThreadModal: React.SFC<INewThreadFormProps> = props => {   
    const modNum = `>>${props.modalNumber}`;
    return (
        <div className="modal fade" id={props.modalNumber ? `post_${props.modalNumber}` : "newThreadModal"} role="dialog" aria-labelledby="newModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="new-thread-modal modal-content">
                <form onSubmit={props.onSubmit}>
                    <div className="modal-body">
                    {/* <form onSubmit={props.onSubmit}> */}
                        <Loading isLoading={props.isSubmitting} />
                        <input
                            type="text"
                            name="authorName"
                            value={props.authorName}
                            className="form__input"
                            onChange={props.onAuthorNameChange}
                            hidden
                        />
                            {(!props.modalNumber)? (
                                <div className="form-group text-left subject-bottom">
                                    <label className="col-form-label">
                                        <p className="modal-thread-title">S U B J E C T</p>
                                    </label>
                                    <input type="text" className="form-control" id="recipient-name" name="threadName" value={props.threadName} onChange={props.onThreadNameChange}/>
                                </div>) : <div className="pt-3"></div>}
                            <div className="form-group text-left">
                                <label className="col-form-label">
                                    <p className="modal-thread-title">C O M M E N T</p>
                                </label>
                                <textarea className="form-control" id="message-text" name="message" value={props.message} onChange={props.onMessageChange}>
                                    {props.modalNumber ? 
                                        (!props.opPost) ? 
                                            modNum : modNum.concat(" ", "(op)") 
                                        :""
                                    }
                                </textarea>
                            </div>
                            <FileUpload onLoadSuccess={props.onLoadSuccess} />
                        {/* </form> */}
                    </div>
                    <div className="pre-line modal-footer">
                        <button type="submit" className="btn form-control modal-thread-upload btn-thread-post">
                            p o s t
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

    // <button type="button" className="btn-new-thread" data-toggle="modal" data-target="#exampleModal">
    //     new thread
    // </button> 



    // <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div className="modal-dialog" role="document">
    //         <div className="new-thread-modal modal-content">
    //             <div className="modal-body">
    //                 <form>
    //                     <div className="form-group text-left">
    //                         <label className="col-form-label">
    //                             <p className="modal-thread-title">S U B J E C T</p>
    //                         </label>
    //                         <input type="text" className="form-control" id="recipient-name"/>
    //                     </div>
    //                     <div className="form-group text-left">
    //                         <label className="col-form-label">
    //                             <p className="modal-thread-title">C O M M E N T</p>
    //                         </label>
    //                         <textarea className="form-control" id="message-text"></textarea>
    //                     </div>
    //                     <div className="form-group text-left">
    //                         <div className="w-100">
    //                             <div id="msg"></div>
    //                             <form method="post" id="image-form">
    //                                 <input type="file" name="img[]" className="file" accept="image/*" style={{visibility: "hidden", position: "absolute"}}/>
    //                                 <div className="input-group my-3">
    //                                     <input type="text" className="form-control modal-thread-upload" disabled placeholder="no choosen file" id="file"/>
    //                                     <div className="input-group-append">
    //                                         <button type="button" className="browse btn modal-thread-upload btn-pic-upload">
    //                                             choose file
    //                                         </button>
    //                                     </div>
    //                                 </div>
    //                             </form>
    //                         </div>
    //                         <div className="w-100">
    //                             <img src="" id="preview" className="img-thumbnail" hidden/>
    //                         </div>
    //                     </div>
    //                 </form>
    //             </div>
    //             <div className="pre-line modal-footer">
    //                 <button type="button" className="btn form-control modal-thread-upload btn-thread-post">
    //                     p o s t
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>


    /* // <form className="form" onSubmit={props.onSubmit}>
    //   <Loading isLoading={props.isSubmitting} />
    //   <div className="form-group">
    //     <label className="form__label">Name</label>
    //     <input */
    /* //       type="text"
    //       name="authorName"
    //       value={props.authorName}
    //       className="form__input"
    //       onChange={props.onAuthorNameChange}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label className="form__label">Content</label>
    //     <textarea */
    /* //       value={props.content}
    //       className="form__input form__input-text"
    //       name="content"
    //       rows={20}
    //       onChange={props.onContentChange}
    //     />
    //   </div>
    //   <FileUpload onLoadSuccess={props.onFileLoadSuccess} />
    //   <div className="form-group u-center-text">
    //     <button className="form__submit">Submit</button>
    //   </div>
    // </form> */

export default NewThreadModal;
