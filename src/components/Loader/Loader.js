import React from "react";
import { LoaderWrapper } from "./LoaderStyles";
import { ThreeDots } from "react-loader-spinner";
import { colors } from "../../utils/style/theme";

const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={colors.primary}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
