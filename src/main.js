function orderByProps(arr, keys) {
  const inputObj = arr;
  const sortbyName = [];
  const sortByKey = [];

  for (let i = 0; i < keys.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(arr, keys[i])) {
      sortByKey.push({
        key: keys[i],
        value: arr[keys[i]],
      });
      delete inputObj[keys[i]];
    }
  }
  for (const prop in inputObj) {
    if (keys.indexOf(prop) === -1) {
      sortbyName.push({
        key: prop,
        value: inputObj[prop],
      });
    }
  }


  sortbyName.sort((a, b) => b.value - a.value);
  const output = [...sortByKey, ...sortbyName];
  return output;
}

export default orderByProps;
