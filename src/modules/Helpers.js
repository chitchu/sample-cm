const sorter = (entities, sortBy, order) => (a, b) => {
  const compareA = entities[a][sortBy];
  const compareB = entities[b][sortBy];
  let compare = 0;
  if (compareA > compareB) {
    compare = 1;
  } else if (compareA < compareB) {
    compare = -1;
  }
  return compare * (order === 'asc' ? 1 : -1);
};

const filterer = (entities, filterString) =>
  key =>
    entities[key].name
      .replace(/[^\w\s]/gi, '')
      .toLowerCase()
      .indexOf(filterString.toLowerCase()) !==
      -1;

const filterAndSort = (entities, sortBy, order, filterString = '') =>
  Object
    .keys(entities)
    .filter(filterer(entities, filterString))
    .sort(sorter(entities, sortBy, order));

export { filterAndSort, sorter, filterer };
