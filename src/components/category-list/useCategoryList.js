export const useCategoryList = () => {
  const filterByType = (arr, prop) => {
    return arr.filter((el) => el.type === prop);
  };

  return { filterByType };
};
