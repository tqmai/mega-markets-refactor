// importing the following files here so we can modify its values before exporting them
// export { default as FontFamilies } from "./figmagic/fontFamilies"
import lineHeights from "./figmagic/lineHeights";

export { default as BorderWidths } from "./figmagic/borderWidths";
export { default as Colors } from "./figmagic/colors";
export { default as FontSizes } from "./figmagic/fontSizes";
export { default as FontWeights } from "./figmagic/fontWeights";
export { default as LetterSpacings } from "./figmagic/letterSpacings";
export { default as Opacities } from "./figmagic/opacities";
export { default as Radii } from "./figmagic/radii";
export { default as Shadows } from "./figmagic/shadows";
export { default as Spacing } from "./figmagic/spacing";
export { default as ZIndices } from "./figmagic/zIndices";
export { default as Durations } from "./figmagic/durations";
export { default as MediaQueries } from "./figmagic/mediaQueries";

/** Convert line height values to rem */
const LineHeights: any = {}; // because we are adding additional properties to this object, we need this object type to be 'any'
const lineHeightKeys = Object.keys(lineHeights);
for (let i = 0; i < lineHeightKeys.length; i += 1) {
  const key = lineHeightKeys[i];
  LineHeights[key] = `${Number(lineHeights[key])}rem`;
}

export { LineHeights };

const systemFontStack = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

// fonts are hard-coded because Figmagic didn't export them correctly
export const FontFamilies = {
  montserrat: `"Montserrat", ${systemFontStack}`,
  merriweather: `"Merriweather", Georgia, "Times New Roman", Times, serif`,
  openSans: `"Open Sans", ${systemFontStack}`,
};
