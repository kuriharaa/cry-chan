import * as React from "react";
import { ScaleLoader } from "react-spinners";
import { css } from "react-emotion";

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: React.SFC<ILoadingProps> = ({ isLoading }) => {
  const override = css`
    display: block;
    margin-top: 20%;
  `;
  return (
    <div className="spinner text-center">
      <ScaleLoader
        loading={isLoading}
        color="#4D008C"
        className={override}
      />
    </div>
  );
};

export default Loading;
