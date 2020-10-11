const unit = "px";
const step = 2;

export const values = {
  min: 0,
  fab: 480,
  xs: 768,
  sm: 960,
  md: 1024,
  lg: 1440,
  xl: 1760,
  xxl: 1920,
};

export const keys = Object.keys(values);

export const up = key => {
  const value = typeof values[key] === "number" ? values[key] : key;
  return `@media (min-width:${value}${unit})`;
};

export const down = (key: any) => {
  const endIndex = keys.indexOf(key);
  const upperbound = values[keys[endIndex]];

  if (endIndex === keys.length) {
    // md down applies to all sizes
    return up("xs");
  }

  const value =
    typeof upperbound === "number" && endIndex > 0 ? upperbound : key;
  return `@media (max-width:${value - step / 100}${unit})`;
};

export const between = (start, end) => {
  const endIndex = keys.indexOf(end);

  if (endIndex === keys.length) {
    return up(start);
  }

  return (
    `@media (min-width:${values[start]}${unit}) and ` +
    `(max-width:${values[keys[endIndex]] - step / 100}${unit})`
  );
};

export const only = (key: any) => {
  return between(key, key);
};

export const width = (key: any) => {
  return values[key];
};
