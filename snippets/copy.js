function rename(obj, newValue) {
  const newObject = structuredClone(obj);
  return Object.freeze({
    ...newObject,
    name: newValue,
  });
}
