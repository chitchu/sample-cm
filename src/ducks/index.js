import Thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { handleActions, createAction } from 'redux-actions';
import fetch from 'isomorphic-fetch';
import { loadState, saveState } from '../modules/Localstore';
import { filterAndSort } from '../modules/Helpers';

import defaultPhoto from '../images/default.jpg';

const contentLoaded = createAction('CONTENT_LOADED', response => {
  // normalize result
  const entities = response.results.reduce(
    (current, next, index) => {
      // we "tokenize" an id by kebab-casing the name
      // Yeah! that should be unique enough... I think...
      const id = `${next.name.replace(/\s+/g, '-').toLowerCase()}`;
      return {
        ...current,
        [window.encodeURI(id)]: { ...next, note: '', score: 0, photo: '' }
      };
    },
    {}
  );
  return { ...response, keys: Object.keys(entities), entities };
});

const updatePerson = createAction('UPDATE_PERSON');
const filter = createAction('FILTER');
const sort = createAction('SORT');

const ui = handleActions(
  {
    [contentLoaded]: state => {
      return { ...state, charactersLoaded: true };
    }
  },
  {
    charactersLoaded: false,
    currentPage: 1,
    sortingOptions: [
      { value: 'score', label: 'Popularity' },
      { value: 'name', label: 'Name' }
    ],
    orderOptions: [
      { value: 'desc', label: 'Descending' },
      { value: 'asc', label: 'Ascending' }
    ]
  }
);

const content = handleActions(
  {
    [contentLoaded]: (state, { payload: { entities, keys } }) => {
      const mergedEntities = { ...state.entities, ...entities };
      return {
        ...state,
        entities: { ...state.entities, ...entities },
        keys: [ ...state.keys, ...keys ],
        filteredKeys: filterAndSort(
          mergedEntities,
          state.sortBy,
          state.order,
          state.filterString
        )
      };
    },
    [updatePerson]: (state, { payload: { characterId, value, prop, type } }) =>
      {
        const character = state.entities[characterId];
        const entities = {
          ...state.entities,
          [characterId]: {
            ...character,
            [prop]: type === 'append'
              ? character[prop] ? character[prop].concat(value) : [ value ]
              : value
          }
        };
        return {
          ...state,
          entities,
          filteredKeys: filterAndSort(
            entities,
            state.sortBy,
            state.order,
            state.filterString
          )
        };
      },
    [filter]: (state, { payload }) => ({
      ...state,
      filterString: payload,
      filteredKeys: filterAndSort(
        state.entities,
        state.sortBy,
        state.order,
        payload
      )
    }),
    [sort]: (state, { payload: { sortBy, order } }) => ({
      ...state,
      sortBy,
      order,
      filteredKeys: filterAndSort(
        state.entities,
        sortBy,
        order,
        state.filterString
      )
    })
  },
  {
    entities: {},
    filteredKeys: [],
    filterString: '',
    keys: [],
    order: 'desc',
    sortBy: 'score'
  }
);
const api = handleActions(
  {
    [contentLoaded]: (state, { payload: { next, prev } }) => ({
      ...state,
      next,
      prev
    })
  },
  {
    base: 'https://swapi.co/api/people/?page=1',
    imageSearch: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search'
  }
);

const reducers = combineReducers({ ui, content, api });
const persistentState = loadState();
/**
 * exports
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  persistentState,
  composeEnhancers(applyMiddleware(Thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

const loadCurrentPage = () => (dispatch, getState) => {
  const { api: { base } } = getState();

  fetch(base.replace(/http:/g, 'https:'))
    .then(xhr => xhr.json())
    .then(response => dispatch(contentLoaded(response)))
    .catch(console.error); // maybe some error handling? nah...
};
const loadMore = () => (dispatch, getState) => {
  const { api: { next } } = getState();
  fetch(next.replace(/http:/g, 'https:'))
    .then(xhr => xhr.json())
    .then(response => dispatch(contentLoaded(response)))
    .catch(console.error);
};
const populatePerson = (characterId, prop, endpoint) => dispatch => {
  const type = endpoint instanceof Array ? 'append' : 'update';
  [].concat(endpoint).forEach(url => {
    fetch(url.replace(/http:/g, 'https:'))
      .then(xhr => xhr.json())
      .then(({ name, title }) => {
        dispatch(
          updatePerson({ characterId, value: name || title, prop, type })
        );
      })
      .catch(console.error);
  });
};
let queue = 0;
const searchForPhoto = (id, name) => (dispatch, getState) => {
  const { api: { imageSearch } } = getState();
  const request = new Request(`${imageSearch}?q=sta wars ${name}&count=1`, {
    headers: new Headers({
      // please don't kill me
      // 'Ocp-Apim-Subscription-Key': '7415893f67a948769a788563c05b5243'
      'Ocp-Apim-Subscription-Key': '80fadb089f8d43d195499207177c07d2'
    })
  });
  const delay = 300 * queue;
  queue++;
  // Bing has a 5 requests per second rule.
  setTimeout(
    () => {
      queue--;
      fetch(request)
        .then(xhr => xhr.json())
        .then(({ value }) => {
          dispatch(
            updatePerson({
              characterId: id,
              value: value && value.length
                ? value[0].thumbnailUrl
                : defaultPhoto,
              prop: 'photo'
            })
          );
        })
        .catch(console.error);
    },
    delay
  );
};

export {
  store as default,
  loadCurrentPage,
  loadMore,
  updatePerson,
  filter,
  sort,
  populatePerson,
  searchForPhoto
};
