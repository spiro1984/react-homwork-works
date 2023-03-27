import styled from "styled-components";
import { breakpoints } from "../../utils/style/theme";

export const Input = styled.input`
  padding: 0 15px;
  line-height: 30px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 14px;
  }
`;
