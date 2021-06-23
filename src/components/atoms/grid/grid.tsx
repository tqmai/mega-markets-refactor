/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import styled, { css } from "styled-components";
import { MediaQueries } from "@paclife/plds.tokens";

const GridOuterContainer = styled.div<GridProps>`
  display: flex;
  justify-content: center;

  overflow: hidden;

  /* create margins based on screen size and user input */
  ${({ margins, smMargins }) => {
    const spacing = `${margins * 8}px`;
    const smSpacing = `${smMargins * 8}px`;

    return css`
      /* for mobile devices */
      padding: 0 ${smSpacing};

      /* for tablet, desktop, and widescreen devices */
      @media screen and (min-width: ${MediaQueries.md}) {
        padding: 0 ${spacing};
      }
    `;
  }}
`;

const GridInnerContainer = styled.div<GridProps>`
  box-sizing: border-box;
  width: 100%;

  /* flexbox container properties */
  display: flex;
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap};

  /* create gutters based on screen size and user input */
  ${({ gutters, smGutters, xlFluid }) => {
    const spacing = `${gutters * 8}px`;
    const smSpacing = `${smGutters * 8}px`;

    const baseSpacingStyles = css`
      /* for mobile devices */
      width: calc(100% + ${smSpacing});
      margin-top: -${smSpacing};
      margin-left: -${smSpacing};

      /* for tablet, desktop, and widescreen devices */
      @media screen and (min-width: ${MediaQueries.md}) {
        width: calc(100% + ${spacing});
        margin-top: -${spacing};
        margin-left: -${spacing};
      }

      /* gutter spacing applied to GridItems */
      .item {
        /* for mobile devices */
        padding-top: ${smSpacing};
        padding-left: ${smSpacing};

        /* for tablet, desktop, and widescreen devices */
        @media screen and (min-width: ${MediaQueries.md}) {
          padding-top: ${spacing};
          padding-left: ${spacing};
        }
      }
    `;

    if (xlFluid) {
      return baseSpacingStyles;
    }

    return css`
      ${baseSpacingStyles}

      /* styling for fixed columns for widescreen devices */
      @media screen and (min-width: ${MediaQueries.xl}) {
        max-width: calc(${MediaQueries.xl} + ${spacing});
      }
    `;
  }}
`;

// this is used in GridItem
// this function will be run for each breakpoint
const itemWidthStyleGenerator = (breakpoint) => {
  // default flexbox item behavior
  if (breakpoint === "auto") {
    return css`
      flex-basis: auto;
      flex-grow: 0;
      max-width: none;
    `;
  }

  // alternative auto layout - item will stretch to fill the container
  if (breakpoint === true) {
    return css`
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    `;
  }

  if (typeof breakpoint === "number") {
    // determine width of item based on number of columns it spans
    // 12 refers to number of columns
    // width will be precise to 7 significant numbers
    const width = `${Math.round((breakpoint / 12) * 10e7) / 10e5}%`;

    return css`
      flex-basis: ${width};
      flex-grow: 0;
      max-width: ${width};
    `;
  }

  return undefined;
};

const GridItem = styled.div<GridProps>`
  box-sizing: border-box;
  margin: 0;

  /* determine width of items based on breakpoints */
  ${({ sm }) => itemWidthStyleGenerator(sm)}
  ${({ md }) =>
    css`
      @media screen and (min-width: ${MediaQueries.md}) {
        ${itemWidthStyleGenerator(md)}
      }
    `}
  ${({ lg }) =>
    css`
      @media screen and (min-width: ${MediaQueries.lg}) {
        ${itemWidthStyleGenerator(lg)}
      }
    `}
  ${({ xl }) =>
    css`
      @media screen and (min-width: ${MediaQueries.xl}) {
        ${itemWidthStyleGenerator(xl)}
      }
    `}
`;

export type GridProps = {
  /**
   * Defines the `align-content` style property. It's applied for all screen sizes.
   */
  alignContent?: "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
  /**
   * Defines the `align-items` style property. It's applied for all screen sizes.
   */
  alignItems?: "stretch" | "center" | "flex-start" | "flex-end" | "baseline";
  /**
   * The content of the grid.
   */
  children?: React.ReactNode;
  /**
   * Any class name you want to apply to the component, whether to extend styles or some other reason.
   */
  className?: string;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * If true, the component will have the flex container behavior. You should be wrapping items with a container.
   */
  container?: boolean;
  /**
   * Defines the `flex-direction` style property. It's applied for all screen sizes.
   */
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  /**
   * Defines the gutter spacing between the type `item` component for all screen sizes besides mobile. It can only be used on a type `container` component. The spacing between two grid items follows a linear function: `output(spacing) = spacing * 8px`, e.g. `spacing={2}` creates a 16px wide gap. Default spacing is 24px.
   */
  gutters?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * If true, the component will have the flex item behavior. You should be wrapping items with a container.
   */
  item?: boolean;
  /**
   * Defines the `justify-content` style property. It's applied for all screen sizes.
   */
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  /**
   * Defines the number of columns the component is going to use. It's applied for the `lg` (desktop) breakpoint and wider screens, if not overridden.
   */
  lg?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Defines the left-and-right margin spacing of the grid for desktop and tablet screen sizes. It will also apply to widescreen devices if `xlFluid` is true. It can only be used on a type `container` component. The spacing follows a linear function: `output(spacing) = spacing * 8px`, e.g. `spacing={2}` creates a 16px wide gap. Default margins are 24px.
   */
  margins?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Defines the number of columns the component is going to use. It's applied for the `md` (tablet) breakpoint and wider screens, if not overridden.
   */
  md?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * Defines the number of columns the component is going to use. It's applied for all the screen sizes, if not overriden. Note that there are fewer number options available at this breakpoint - this is to simulate having a 4-column grid for mobile devices, as per the PLDS specs.
   */
  sm?: false | "auto" | true | 3 | 6 | 9 | 12;
  /**
   * Defines the gutter spacing between the type `item` component for mobile screens. It can only be used on a type `container` component. The spacing between two grid items follows a linear function: `output(spacing) = spacing * 8px`, e.g. `spacing={2}` creates a 16px wide gap. Default spacing is 16px.
   */
  smGutters?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Defines the left-and-right margin spacing of the grid for mobile screen sizes. It can only be used on a type `container` component. The spacing follows a linear function: `output(spacing) = spacing * 8px`, e.g. `spacing={2}` creates a 16px wide gap. Default margins are 16px.
   */
  smMargins?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Defines the `flex-wrap` style property. It's applied for all screen sizes.
   */
  wrap?: "wrap" | "no-wrap" | "wrap-reverse";
  /**
   * Defines the number of columns the component is going to use. It's applied for the `xl` (widescreen) breakpoint.
   */
  xl?: false | "auto" | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * If true, use a fluid column layout for widescreen devices. This prop can only be used on a type `container` component. Default value is false.
   */
  xlFluid?: boolean;
};

export function Grid({
  alignContent = "stretch",
  alignItems = "stretch",
  children,
  className,
  component = "div",
  container = false,
  direction = "row",
  gutters = 3,
  item = false,
  justify = "flex-start",
  lg = false,
  margins = 3,
  md = false,
  sm = false,
  smGutters = 2,
  smMargins = 2,
  wrap = "wrap",
  xl = false,
  xlFluid = false,
}: GridProps) {
  // note: if user doesn't specify `container` or `item`, we default to `container`
  if (container || !item) {
    return (
      <GridOuterContainer className={className} as={component} margins={margins} smMargins={smMargins}>
        <GridInnerContainer
          alignContent={alignContent}
          alignItems={alignItems}
          direction={direction}
          gutters={gutters}
          justify={justify}
          smGutters={smGutters}
          wrap={wrap}
          xlFluid={xlFluid}
        >
          {children}
        </GridInnerContainer>
      </GridOuterContainer>
    );
  }

  return (
    // note that all GridItems have a class name of `item` - this is used for styling purposes
    <GridItem className={`${className} item`} as={component} lg={lg} md={md} sm={sm} xl={xl}>
      {children}
    </GridItem>
  );
}
