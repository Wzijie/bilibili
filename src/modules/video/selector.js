import { createSelector } from 'reselect';

const getPage = (state) => state.recommendPage;
const getList = (state) => state.recommendList;
export const getVisibleList = createSelector(
  [getPage, getList],
  (page, list) => list.slice(0, page * 8)
);

const getShowAllPart = (state) => state.showAllPart;
const getPartList = (state) => state.partList;
export const getVisiblePartList = createSelector(
  [getShowAllPart, getPartList],
  (showAllPart, partList) => showAllPart ? partList : partList.slice(0, 3)
);
