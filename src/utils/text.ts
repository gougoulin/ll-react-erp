export const capitalize = (txt: string): string => {
  if(txt.length === 0) return txt;
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}