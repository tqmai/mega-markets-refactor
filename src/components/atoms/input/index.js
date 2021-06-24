import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import {
  Colors,
  BorderWidths,
  Radii,
  FontSizes,
  FontWeights,
  LineHeights,
  Spacing,
  MediaQueries,
  FontFamilies,
} from "../../../styles/tokens";

const ToolTipBoldFont = css`
  font-style: normal;
  font-weight: ${FontWeights[700]};
  font-size: ${FontSizes[500]};
  line-height: ${LineHeights[200]};
  color: ${Colors.neutral700};
  @media (max-width: ${MediaQueries.lg}) {
    font-size: ${FontSizes[400]};
  }
`;

const Input = styled.input`
  height: ${({ size }) => (size === "lg" ? "60px" : "40px")};
  background: ${Colors.neutral0};
  border: ${BorderWidths.hairline} solid ${Colors.neutral200};
  border-radius: ${Radii.rounded};
  outline: none;
  padding: 0 ${Spacing[16]};
  font-family: ${FontFamilies.openSans} !important;
  ${ToolTipBoldFont}

  &::placeholder {
    color: ${Colors.neutral700};
  }

  /** Error State */
  ${({ error }) =>
    error === "true" &&
    css`
      border-color: ${Colors.destructive};
    `}
`;

// eslint-disable-next-line import/prefer-default-export
export const TextInput = ({
  id,
  name,
  placeholder,
  className,
  error,
  handleChange,
  /** inputAttrs is for other textarea attributes,
   * such as autoComplete, maxLength
   * */
  ...inputAttrs
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleChange(e.target.name, e.target.value);
  };

  return (
    <Input
      className={className}
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      error={String(error)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputAttrs}
    />
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  handleChange: PropTypes.func,
};

TextInput.defaultProps = {
  className: "",
  error: false,
  handleChange: () => {},
};
