import { combineReducers } from 'redux';
import {
  REQUEST_DAILY_DETAIL,
  RECEIVE_DAILY_DETAIL,
  REQUEST_DAILYS,
  RECEIVE_DAILYS,
  REQUEST_BLOGS,
  RECEIVE_BLOGS,
  REQUEST_ABOUT,
  RECEIVE_ABOUT,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_CATEGORYBLOGS,
  RECEIVE_CATEGORYBLOGS,
  REQUEST_BLOG_DETAIL,
  RECEIVE_BLOG_DETAIL,
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

function blogdetail(state = {}, action) {
  switch(action.type) {
    case REQUEST_BLOG_DETAIL:
    case RECEIVE_BLOG_DETAIL:
      let obj = Object.assign({}, state, action);
      // console.log("blogs reducer", action.type, obj);
      return obj;
    default:
      return state;
  }
}

function dailydetail(state = {}, action) {
  switch(action.type) {
    case REQUEST_DAILY_DETAIL:
    case RECEIVE_DAILY_DETAIL:
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

function dailys(state = {}, action) {
  switch(action.type) {
    case REQUEST_DAILYS:
    case RECEIVE_DAILYS:
      let obj = Object.assign({}, state, action);
      // console.log("DAILYS reducer", action.type, obj);
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
  dailys,
  dailydetail,
  blogdetail,
  categoryblogs,
  categories,
  blogs,
  about,
  selectedPath
})

export default reducer