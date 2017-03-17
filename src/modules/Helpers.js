const filterAndSort = (entities, sortBy, order, filterString = '') => {
  //bubble sorting time!
  let orderedKeys = Object
    .keys(entities)
    .filter(
      key =>
        entities[key].name
          .replace(/[^\w\s]/gi, '')
          .toLowerCase()
          .indexOf(filterString.toLowerCase()) !==
          -1
    );
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < orderedKeys.length; i++) {
      let current = entities[orderedKeys[i]];
      let next = orderedKeys[i + 1] && entities[orderedKeys[i + 1]];

      if (current && next) {
        if (order === 'asc') {
          if (current[sortBy] > next[sortBy]) {
            [ orderedKeys[i], orderedKeys[i + 1] ] = [
              orderedKeys[i + 1],
              orderedKeys[i]
            ];
            swapped = true;
          }
        } else {
          if (current[sortBy] < next[sortBy]) {
            [ orderedKeys[i + 1], orderedKeys[i] ] = [
              orderedKeys[i],
              orderedKeys[i + 1]
            ];
            swapped = true;
          }
        }
      }
    }
  } while (swapped);
  return orderedKeys;
};

export { filterAndSort };
