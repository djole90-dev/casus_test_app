export const sortAlphabetically = (arr) =>
  [ ...arr ].sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );
export const sortAlphabeticallyReverse = (arr) =>
  [ ...arr ].sort((a, b) =>
    b.title.toLowerCase().localeCompare(a.title.toLowerCase())
  );

export const documentSorter = (sortType, arrToSort) => {
  if (sortType === 'A_Z') {
    return sortAlphabetically(arrToSort);
  } else if (sortType === 'Z_A') {
    return sortAlphabeticallyReverse(arrToSort);
  } 
  return [ ...arrToSort ];
};
