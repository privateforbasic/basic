export const isEmptyValues = obj => {
  return Object.values(obj).some(el =>
    typeof el === "object" ? isEmptyValues(el) : el
  );
};

export const isEmptyAllValues = obj => {
  return Object.values(obj).every(el =>
    typeof el === "object" ? isEmptyAllValues(el) : el
  );
};
