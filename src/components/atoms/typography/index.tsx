import React from "react";
import styled, { css } from "styled-components";

import { Colors, FontWeights, FontSizes, LineHeights, FontFamilies } from "../../../styles/tokens";

const BaseTypography = styled.span<TypographyProps>`
  text-align: ${({ align }) => align};
  display: ${({ display }) => display};
`;

const H1 = styled(BaseTypography)`
  font-weight: ${FontWeights[700]};
  color: ${Colors.textHeadlinesLight};

  ${({ set }) => {
    if (set === "brand") {
      return css`
        font-family: ${FontFamilies.montserrat};
        font-size: ${FontSizes.brandH1};
        line-height: ${LineHeights[1000]};
      `;
    }
    if (set === "product") {
      return css`
        font-family: ${FontFamilies.openSans};
        font-size: ${FontSizes.productH1};
        line-height: ${LineHeights[600]};
      `;
    }

    return undefined;
  }}
`;

const H2 = styled(BaseTypography)`
  font-weight: ${FontWeights[700]};
  color: ${Colors.textHeadlinesLight};

  ${({ set }) => {
    if (set === "brand") {
      return css`
        font-family: ${FontFamilies.montserrat};
        font-size: ${FontSizes.brandH2};
        line-height: ${LineHeights[800]};
      `;
    }
    if (set === "product") {
      return css`
        font-family: ${FontFamilies.openSans};
        font-size: ${FontSizes.productH2};
        line-height: ${LineHeights[600]};
      `;
    }

    return undefined;
  }}
`;

const H3 = styled(BaseTypography)`
  font-weight: ${FontWeights[700]};
  color: ${Colors.textHeadlinesLight};

  ${({ set }) => {
    if (set === "brand") {
      return css`
        font-family: ${FontFamilies.montserrat};
        font-size: ${FontSizes.brandH3};
        line-height: ${LineHeights[600]};
      `;
    }
    if (set === "product") {
      return css`
        font-family: ${FontFamilies.openSans};
        font-size: ${FontSizes.productH3};
        line-height: ${LineHeights[600]};
      `;
    }

    return undefined;
  }}
`;

const H4 = styled(BaseTypography)`
  color: ${Colors.textHeadlinesLight};

  ${({ set }) => {
    if (set === "brand") {
      return css`
        font-family: ${FontFamilies.montserrat};
        font-weight: ${FontWeights[700]};
        font-size: ${FontSizes.brandH4};
        line-height: ${LineHeights[500]};
      `;
    }
    // there is no product H4, so these styles match the Body styles
    if (set === "product") {
      return css`
        font-family: ${FontFamilies.openSans};
        font-weight: ${FontWeights[400]};
        font-size: ${FontSizes.brandBody};
        line-height: ${LineHeights[200]};
      `;
    }

    return undefined;
  }}
`;

const Body = styled(BaseTypography)`
  font-family: ${FontFamilies.openSans};
  font-weight: ${FontWeights[400]};
  font-size: ${FontSizes.brandBody};
  line-height: ${LineHeights[200]};
  color: ${Colors.textBodyLight};
`;

const Caption = styled(BaseTypography)`
  font-family: ${FontFamilies.openSans};
  font-weight: ${FontWeights[400]};
  font-size: ${FontSizes.brandCaption};
  line-height: ${LineHeights[200]};
  color: ${Colors.textBodyLight};
`;

const Disclosure = styled(BaseTypography)`
  font-family: ${FontFamilies.openSans};
  font-weight: ${FontWeights[400]};
  font-size: ${FontSizes.brandDisclosure};
  line-height: ${LineHeights[200]};
  color: ${Colors.textBodyLight};
`;

const Microcopy = styled(BaseTypography)`
  font-family: ${FontFamilies.openSans};
  font-weight: ${FontWeights[400]};
  font-size: ${FontSizes.brandMicrocopy};
  line-height: ${LineHeights.root};
  color: ${Colors.textBodyLight};
`;

type TVariantMapping = {
  [key: string]: React.ElementType;
};

const VariantMapping: TVariantMapping = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  body: Body,
  caption: Caption,
  disclosure: Disclosure,
  microcopy: Microcopy,
};

// function to determine what HTML tag to render the component as
const asPropChooser = (variant: TypographyProps["variant"]) => {
  let asValue = "";

  switch (variant) {
    case "h1":
      asValue = "h1";
      break;
    case "h2":
      asValue = "h2";
      break;
    case "h3":
      asValue = "h3";
      break;
    case "h4":
      asValue = "h4";
      break;
    // all other variants will be rendered as <p />
    default:
      asValue = "p";
  }

  return asValue;
};

export type TypographyProps = {
  /**
   * Set the text-align on the component.
   */
  align?: "inherit" | "left" | "center" | "right" | "justify";
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * Any class name you want to apply to the component, whether to extend styles or some other reason.
   */
  className?: string;
  /**
   * The color of the component. This overrides the default colors.
   */
  color?: string;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * Controls the display type.
   */
  display?: "initial" | "block" | "inline";
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom?: boolean;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis. Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean;
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph?: boolean;
  /**
   * The type set to use. The two sets have different uses and needs, and thus have different styling.
   */
  set?: "brand" | "product";
  /**
   * The variant of the component to use.
   */
  variant?: string;
};

/**
 * props to add:
 * color
 * dark
 * font
 * gutterBottom
 * noWrap
 * paragraph
 * set
 * variant
 */

export function Typography({
  align = "inherit",
  children,
  className,
  component,
  display = "initial",
  set = "brand",
  variant = "h1",
}: TypographyProps) {
  // determine the right typography variant to render
  const Component = VariantMapping[variant];

  return (
    <Component
      align={align}
      className={className}
      display={display}
      variant={variant}
      as={component || asPropChooser(variant)}
      set={set}
    >
      {children}
    </Component>
  );
}
