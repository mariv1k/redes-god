export function nextChar(c: String) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

export function shuffle<T>(array: T[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex--);
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function hexToRgba(hex: string, opacity = 1) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);

  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
}

export function round(num: number, decimals = 2) {
  return Math.round((num + Number.EPSILON) * 10 * decimals) / (10 * decimals);
}

export function clamp(num: number, min: number, max: number) {
  return num <= min ? min : num >= max ? max : num;
}
