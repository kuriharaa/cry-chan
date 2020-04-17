import * as React from "react";

export default class BackToTopBtn extends React.Component<any, any>{

    constructor(props) {
        super(props);
    }

    public scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    public render(){
        return (
            <button onClick={this.scrollTop} id="myBtn" title="Go to top">Top</button>
        );
    }
};


