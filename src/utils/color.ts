import convert from 'color-convert';
/**
 * 减淡给定的十六进制颜色值。
 * @param hexColor - 需要减淡的十六进制颜色字符串，例如 "#FF5733"。
 * @param percent - 减淡的百分比，范围在 0 到 1 之间。
 * @returns 减淡后的十六进制颜色字符串。
 */
export const lightenColor = (hexColor: string, percent: number): string => {
    if (!hexColor) {
        return '';
    }
    const rgb = convert.hex.rgb(hexColor);
    const r = Math.min(255, Math.max(0, Math.round(rgb[0] + (255 - rgb[0]) * percent)))
    const g = Math.min(255, Math.max(0, Math.round(rgb[1] + (255 - rgb[1]) * percent)))
    const b = Math.min(255, Math.max(0, Math.round(rgb[2] + (255 - rgb[2]) * percent)))
    return `#${convert.rgb.hex(r, g, b)}`;
}