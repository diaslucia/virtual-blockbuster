import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({loading, children}) => {
    if(loading){
    const override = css`
        display: block;
        margin: auto;
        margin-top: 20rem;
        margin-bottom: 20rem;
        `;
    return (
        <ClipLoader size={50} color={"#1C4DA4"} loading={loading} css={override}/>
    );
    }
    return children;
};

export default LoadingSpinner
