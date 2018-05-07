
import {
  REQUEST_DAILY_DETAIL,
  RECEIVE_DAILY_DETAIL,
  REQUEST_DAILYS,
  RECEIVE_DAILYS,
  REQUEST_ABOUT,
  RECEIVE_ABOUT,
  CHANGE_PATH,
} from '../constant/actionTypes';

import hljs from 'highlight.js';
import marked from 'marked';

marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value,
});

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

function requestDailys() {
  return {
    type: REQUEST_DAILYS
  }
}

function receiveDailys(json) {
  return {
    type: RECEIVE_DAILYS,
    items: json
  }
}

function requestDailyDetail() {
  return {
    type: REQUEST_DAILY_DETAIL
  }
}

function receiveDailyDetail(json) {
  return {
    type: RECEIVE_DAILY_DETAIL,
    items: json
  }
}

export function formatYMD(posted) {
  let date = new Date(posted);
  if (!isNaN(date.getMonth()) && !isNaN(date.getDate()) && !isNaN(date.getFullYear())) {
      let month = "";
      let day = "";
      if (date.getMonth() >= 10) {
        month = date.getMonth() + 1;
      } else {
        month = "0" + (date.getMonth() + 1);
      }
      if (date.getDate() >= 10) {
        day = date.getDate();
      } else {
        day = "0" + date.getDate();
      }
      let format_date = date.getFullYear() + "/" + month + "/" + day;
      return format_date;
  } else {
      console.warn("日期参数有误！", posted);
      return posted;
  }
}

export function getVersions() {   
  var u = navigator.userAgent;
  return {//移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') === -1 //是否web应该程序，没有头部与底部
  };
};

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
    .then(json => {
      json[0].body = marked(json[0].body);
      dispatch(receiveAbout(json))
    })
    .catch(ex => console.warn('Parsing Failed', ex));
  }
}

export function fetchDailys() {
  return dispatch => {
    dispatch(requestDailys())
    
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    var request = new Request("/api/dailys/", {
        headers: headers,
        method:"GET"
    });
    
    fetch(request)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveDailys(json));
    })
    .catch(ex => console.warn('Parsing Failed', ex));
  }
}

export function fetchDailyDetail(daily_id) {
  return dispatch => {
    dispatch(requestDailyDetail())

    var data = new FormData();
    data.append("json", JSON.stringify({daily_id: daily_id}));
  
    fetch("/api/dailys/detail/", {method: "POST", body: data})
    .then(response => response.json())
    .then(json => {
      if (json && json[0]) {
        json[0].body_1 = marked(json[0].body_1);
        json[0].body_2 = marked(json[0].body_2);
        json[0].body_3 = marked(json[0].body_3);
      }
      dispatch(receiveDailyDetail(json));
    })
    .catch(ex => console.warn('Parsing Failed', ex));
  }
}

