import styled from "styled-components";

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
    
    ${(props) =>
    
    props.isLanding &&
    `width: 220px;`}

    ${(props) =>
    
    props.isLanding && `
    background-color: ${colors.textPrimary};
    color: ${colors.bgSecondary};
    `



`;
