const deepCopy = (obj: any) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    console.error('deep copy failed;', e);
  }
  return obj;
};

const genUniqueId = () => `_${Math.random().toString(36).substr(2, 9)}`;

export default {
  deepCopy,
  genUniqueId
};
