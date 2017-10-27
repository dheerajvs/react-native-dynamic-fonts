// @flow
import { loadFont } from 'react-native-dynamic-fonts';
import { createIconSet } from 'react-native-vector-icons';

export async function loadFontFromUrl(
  url: string,
  name: string,
  format?: string = 'ttf'
): Promise<void> {
  if (!url) {
    return Promise.resolve();
  }

  return fetch(url)
    .then(response => response.text())
    .then(base64 => loadFont(name, base64, format));
}

export function loadFontsFromUrl(fontlist: Array): Promise<void> {
  return Promise.all(
    fontlist.map(({url, name, format}) => loadFontFromUrl(url, name, format))
  );
}

const glyphMap = {
  'bicycle': 0xf206,
  'camera': 0xf030,
  'coffee': 0xf0f4
};

export function createFontIcon(
  fontName: string,
  fontUrl?: string,
  format?: string
) {
  const FontIcon = createIconSet(glyphMap, fontName);
  FontIcon.loadFont = () => loadFontFromUrl(fontUrl, fontName, format);
  return FontIcon;
}
