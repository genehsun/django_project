
import {
  REQUEST_BLOGS, 
  RECEIVE_BLOGS, 
  REQUEST_ABOUT,
  RECEIVE_ABOUT,
  CHANGE_PATH
} from '../constant/actionTypes';

const MONTH_NAME = [
  "January", "February", "March", "April", 
  "May", "June", "July", "August", 
  "September", "October", "November", "December"
];

function requestAbout() {
  return {
    type: REQUEST_ABOUT
  }
}

function receiveAbout(json) {
  return {
    type: RECEIVE_ABOUT,
    contents: json
  }
}

function requestBlogs() {
  return {
    type: REQUEST_BLOGS
  }
}

function receiveBlogs(json) {
  return {
    type: RECEIVE_BLOGS,
    items: json
  }
}

export function formatYMD(posted) {
  var date = new Date(posted);
  if (!isNaN(date.getMonth()) && !isNaN(date.getDate()) && !isNaN(date.getFullYear())) {
      var format_date = MONTH_NAME[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
      return format_date;
  } else {
      console.warn("日期参数有误！", posted);
      return posted;
  }
}

export function changePageTitle(title) {
  if (typeof(title) === "string") {
    document.title = title;
  } else {
    console.warn("标题参数有误！", title);
  }
}

export function changeSelectedPath(path) {
  return {
    type: CHANGE_PATH,
    path
  }
}

export function fetchAbout() {
  return dispatch => {
    dispatch(requestAbout())
    
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    var request = new Request("/api/about/", {
        headers: headers,
        method:"GET"
    });
    
    fetch(request)
    .then(response => response.json())
    .then(json => dispatch(receiveAbout(json)))
    .catch(ex => console.warn('Parsing Failed', ex));
  }
}

export function fetchBlogs() {
  return dispatch => {
    dispatch(requestBlogs())
    
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    var request = new Request("/api/blogs/", {
        headers: headers,
        method:"GET"
    });
    
    fetch(request)
    .then(response => response.json())
    .then(json => dispatch(receiveBlogs(json)))
    .catch(ex => console.warn('Parsing Failed', ex));
  }
}