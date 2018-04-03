import { combineReducers } from 'redux';
import {
  REQUEST_BLOGS,
  RECEIVE_BLOGS,
  REQUEST_ABOUT,
  RECEIVE_ABOUT,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_CATEGORYBLOGS,
  RECEIVE_CATEGORYBLOGS,
  CHANGE_PATH
} from '../constant/actionTypes';

function categoryblogs(state = {}, action) {
  switch(action.type) {
    case REQUEST_CATEGORYBLOGS:
    case RECEIVE_CATEGORYBLOGS:
      let obj = Object.assign({}, state, action);
      // console.log("blogs reducer", action.type, obj);
      return obj;
    default:
      return state;
  }
}

function categories(state = {}, action) {
  switch(action.type) {
    case REQUEST_CATEGORIES:
    case RECEIVE_CATEGORIES:
      let obj = Object.assign({}, state, action);
      // console.log("blogs reducer", action.type, obj);
      return obj;
    default:
      return state;
  }
}

function blogs(state = {}, action) {
  switch(action.type) {
    case REQUEST_BLOGS:
    case RECEIVE_BLOGS:
      let obj = Object.assign({}, state, action);
      // console.log("blogs reducer", action.type, obj);
      return obj;
    default:
      return state;
  }
}

function about(state = {}, action) {
  switch(action.type) {
    case REQUEST_ABOUT:
    case RECEIVE_ABOUT:
      let obj = Object.assign({}, state, action);
      // console.log("about reducer", action.type, obj);
      return obj;
    default:
      return state;
  }
}

function selectedPath(state = {}, action) {
  switch(action.type) {
    case CHANGE_PATH:
      let obj = Object.assign({}, state, action);
      // console.log("selectedPath reducer", action.type, obj);
      return obj;
    default:
      return state;
  }
}

const reducer = combineReducers({
  categoryblogs,
  categories,
  blogs,
  about,
  selectedPath
})

export default reducer