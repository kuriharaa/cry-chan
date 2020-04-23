import * as React from "react";
import { ClipLoader } from "react-spinners";
import { css } from "react-emotion";
import Loading from "../../Loading";
import FileUpload from "../FileUpload";
import { IFile } from "../../../../../shared/lib/types/File";

interface INewPostFormProps {
  onAuthorNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFileLoadSuccess: (file: IFile) => any;
  onSubmit: (e: React.FormEvent) => void;
  authorName: string;
  content: string;
  isSubmitting: boolean;
}

const NewPostForm: React.SFC<INewPostFormProps> = props => {
  return (
    <div className="modal fade" id="newPostModal" role="dialog" aria-labelledby="newPostLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="new-thread-modal modal-content">
                <form onSubmit={props.onSubmit}>
                    <div className="modal-body">
                        <Loading isLoading={props.isSubmitting} />
                        <input
                            type="text"
                            name="authorName"
                            value={props.authorName}
                            className="form__input"
                            onChange={props.onAuthorNameChange}
                            hidden
                        />
                            <div className="pt-1"></div>
                            <div className="form-group text-left">
                                <label className="col-form-label">
                                    <p className="modal-thread-title">C O M M E N T</p>
                                </label>
                                <textarea className="form-control" id="message-text" name="content" value={props.content} onChange={props.onContentChange}>
                                </textarea>
                            </div>
                            <FileUpload onLoadSuccess={props.onFileLoadSuccess} />
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
    // <form className="form" onSubmit={props.onSubmit}>
    //   <Loading isLoading={props.isSubmitting} />
    //   <div className="form-group">
    //     <label className="form__label">Name</label>
    //     <input
    //       type="text"
    //       name="authorName"
    //       value={props.authorName}
    //       className="form__input"
    //       onChange={props.onAuthorNameChange}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label className="form__label">Content</label>
    //     <textarea
    //       value={props.content}
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
    // </form>
  );
};

export default NewPostForm;
