import { useState } from "react";
import styled, { css } from "styled-components";

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

const Input = styled.input<TextInputProps>`
  height: 40px;
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
    error &&
    css`
      border-color: ${Colors.destructive};
    `}
`;

export type TextInputProps = {
  /**
   * Any class name you want to apply to the component, whether to extend styles or some other reason.
   */
  className?: string;
  /**
   * Boolean indicating whether there is an error or not
   */
  error?: boolean;
  /**
   * The CSS ID of the input field.
   */
  id: string;
  /**
   * The name of the input field.
   */
  name: string;
  /**
   * The name of the input field.
   */
  placeholder?: string;
};

export const TextInput = ({
  id,
  name,
  placeholder,
  className,
  error,
  /** inputAttrs is for other textarea attributes,
   * such as autoComplete, maxLength
   * */
  ...inputAttrs
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
      error={error}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputAttrs}
    />
  );
};

TextInput.defaultProps = {
  className: "",
  error: false,
  handleChange: () => {},
};
