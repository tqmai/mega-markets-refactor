import React from "react";
import styled, { css } from "styled-components";

// these are base styles that can be built upon for specific button use cases
// many of these properties are simply resetting values
// much of this is inspired by Material-UI's ButtonBase
const StyledButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  --webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0; // removes the focus ring - remember to add event listeners for people navigating using keyboards (for accessbility reasons)
  border: 0;
  margin: 0; // removes the margin in Safari
  padding: 0; // removes the padding in Firefox
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  --moz-appearance: none;
  --webkit-appearance: none;
  text-decoration: none; // to override the default style of a native <a /> element
  letter-spacing: normal; // to override the default style of a native <a /> element
  color: inherit;
  &::-moz-focus-inner {
    border-style: none; // removes Firefox dotted outline
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: default;
    `}
`;

type ButtonBaseProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
};

/**
 * A base button component that contains solely base styles
 * @name ButtonBase
 * @param {node} children - button text
 * @param {string} className - className props in case we want to add custom styling
 * @param {boolean} disabled - enabled/disables the button
 * @param {string} href - the URL to link to when the button is clicked.
 * @param {func} onClick - a function that is executed when the button is clicked
 */
const ButtonBase = React.forwardRef(
  (
    {
      className,
      children,
      href,
      disabled = false,
      ...others // used to receive any native HTML element props
    }: ButtonBaseProps,
    ref
  ) => {
    // render button as <a /> if href is present
    let asValue = null;
    if (href) asValue = "a";

    return (
      <StyledButtonBase
        className={className}
        disabled={disabled}
        href={href} // for use with <a />
        as={asValue}
        ref={ref}
        // rule is disabled because we need to receive any native HTML element props
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
      >
        {children}
      </StyledButtonBase>
    );
  }
);

ButtonBase.defaultProps = {
  className: "",
  children: null,
  disabled: false,
  href: "",
};

export default ButtonBase;
