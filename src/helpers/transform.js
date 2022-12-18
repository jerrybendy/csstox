import postcss from "postcss";
import postcssJs from "postcss-js";
import transform from "css-to-react-native";
import json5 from "json5";

const toJSSObject = (cssText) => {
  const root = postcss.parse(cssText);
  return postcssJs.objectify(root);
};

export const toJSS = (cssText) => {
  try {
    return JSON.stringify(toJSSObject(cssText), null, 2);
  } catch (e) {
    return "Error translating CSS to JSS";
  }
};

export const toRN = (cssText) => {
  try {
    const output = toJSSObject(cssText);
    const result = Object.keys(output).map((rules) => [rules, output[rules]]);
    const transformResult = transformFontFamily(transform(result));
    console.log(transformResult);

    return json5.stringify(transformResult, {
      space: 2,
      quote: '"',
    });
  } catch (e) {
    return "Error translating CSS to RN";
  }
};

const fontWeightSuffix = {
  "100": "Thin",
  "300": "Light",
  "400": "Regular",
  "normal": "Regular",
  "500": "Medium",
  "700": "Bold",
  "bold": "Bold",
  "900": "Black",
}

function transformFontFamily(styles) {
  if (styles.fontFamily && styles.fontWeight) {
    styles.fontFamily += `-${fontWeightSuffix[styles.fontWeight]}`;
    delete styles.fontWeight;
  }
  return styles;
}
