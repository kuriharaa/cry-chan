import * as React from "react";
import { IFile } from "../../../../shared/lib/types/File";

interface IProps {
  onLoadSuccess: (file: IFile) => any;
}

export default class FileUpload extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = e.currentTarget;

    const file = current.nextSibling.firstChild as HTMLInputElement;
    let fileName = e.target.files[0].name;
    file.value = fileName;
    
    let fileType = e.target.files[0].type;
    let preview = current.parentElement.parentElement.nextSibling.firstChild as HTMLImageElement;

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      preview.src = reader.result.toString();
      preview.removeAttribute("hidden");
      const result: IFile = {
        data: reader.result as string,
        name: fileName,
        type: fileType
      };
      this.props.onLoadSuccess(result);
    };

    // const { files } = e.currentTarget;
    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(files[0]);
    // fileReader.onload = () => {
    //   const result: IFile = {
    //     data: fileReader.result as string,
    //     name: files[0].name,
    //     type: files[0].type
    //   };
    //   this.props.onLoadSuccess(result);
    // };
  };

  public onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const file = btn.parentElement.parentElement.parentElement.firstChild;
    $(file).trigger("click");
  }
  // public onClick = () => {
  //   $(document).on("click", ".browse", function() {
  //     var file = $(this).parents().find(".file");
  //       file.trigger("click");
  //   });
  //     // $('input[type="file"]').change(function(e) {
  //     //   var fileName = e.target.files[0].name;
  //     //   $("#file").val(fileName);

  //     //   var reader = new FileReader();
  //     //   reader.onload = function(e) {
  //     //   // get loaded data and render thumbnail.
  //     //   var preview = document.getElementById("preview");
  //     //     preview.src = e.target.result;
  //     //     preview.removeAttribute("hidden");
  //     //   };
  //     //   // read the image file as a data URL.
  //     //   reader.readAsDataURL(this.files[0]);
  //   });
  // };

  public render() {
    return (
    <div className="form-group text-left">
        <div className="w-100">
            <div id="msg"></div>
            <form method="post" id="image-form">
                <input type="file" name="file" onChange={this.onChange} className="file" accept="image/*" style={{visibility: "hidden", position: "absolute"}}/>
                <div className="input-group my-3">
                    <input type="text" className="form-control modal-thread-upload" disabled placeholder="no choosen file" id="file"/>
                    <div className="input-group-append">
                        <button onClick={this.onClick} type="button" className="browse btn modal-thread-upload btn-pic-upload">
                            choose file
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <div className="w-100 text-center">
            <img src="" id="preview" className="img-thumbnail" hidden/>
        </div>
    </div>
    //   <div className="form-group">
    //     <label className="form__label">File</label>
    //     <input
    //       type="file"
    //       className="form__input"
    //       name="file"
    //       onChange={this.onChange}
    //     />
    //   </div>
    );
  }
}
