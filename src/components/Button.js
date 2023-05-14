import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color, outline }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }

      &:active {
        background: ${darken(0.1, selected)};
      }

      ${outline &&
      css`
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
        &:hover {
          background: ${selected};
          color: white;
        }
        &:active {
          background: ${darken(0.1, selected)};
          color: white;
        }
      `}
    `;
  }}
`;

const sizeStyles = css`
  ${({ theme, size }) => {
    const selected = theme.length[size];
    return css`
      ${selected};
    `;
  }}
`;

const full = css`
  ${({ fullwidth }) =>
    fullwidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  ${sizeStyles}

  ${colorStyles}

  &:not(:first-child) {
    margin-left: 1rem;
  }

  ${full}
`;

function Button({
  children,
  color,
  size,
  outline,
  fullwidth,
  visible,
  ...rest
}) {
  if (visible != null && !visible) return null;
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullwidth={fullwidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "blue",
  size: "medium",
};

export default Button;
