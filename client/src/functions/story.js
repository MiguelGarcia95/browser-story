export const getOptionsNotPicked = (options, pickedOption) => options.filter(option => option._id !== pickedOption);

export const getPreviousOptionsArray = options => {
  return options.reduce((newArray, option) => {
    newArray.push(option._id);
    return newArray;
  }, []);
};

export const getUniqueOptions = options => {
  return options.reduce((newArray, option) => {
    const doesItExistInArray = newArray.indexOf(option);
    if (doesItExistInArray === -1) {
      newArray.push(option);
    }
    return newArray
  }, [])
}