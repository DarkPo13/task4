import axios from "axios";
import * as _ from "lodash";
import { start, done } from "nprogress/nprogress";

import { router } from '../_helpers';


const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

API.interceptors.request.use(onRequestSuccess, onRequestRejected);
API.interceptors.response.use(onResponseSuccess, onResponseRejected);

function onRequestSuccess(config) {
  config.withCredentials = true;

  config.headers = {
    ...config.headers,
    "Content-Type": "application/json",
  };

  // start loader during making request
  start();

  return config;
}

function onRequestRejected(error) {
  return Promise.reject(error.response.data);
}

function onResponseSuccess(response) {
  // finish loader
  done();
  return response;
}

async function onResponseRejected({ response, config }) {
  const { status } = response;

  done();

  switch (status) {
    case 401:
      if (router.currentRoute.path === '/') break;
      
      break;
    // case 500:
    //   store.dispatch("localLogout");
  }

  return Promise.reject(response.data);
}

function getPostsList() {
    return API.get(`posts`).then(({ data }) => data);
  }
  
  export const postsService = {
    getPostsList
  };

