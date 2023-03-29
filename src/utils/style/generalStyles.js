import styled from "styled-components";
import { colors, breakpoints, fonts } from "./theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";

export const Form = styled(FormFormik)``;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

export const Field = styled(FieldFormik)`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border-color: ${colors.textPrimary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 150px;
  line-height: 48px;
  font-size: 16px;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border-radius: 30px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  border: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ${(props) => props.isLanding && `width: 220px;`}

  ${(props) =>
    props.isLanding &&
    `
    background-color: ${colors.textPrimary};
    color: ${colors.bgSecondary};
    `}
`;
