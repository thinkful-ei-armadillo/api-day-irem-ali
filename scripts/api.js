'use strict';
/* global $ */

const apiModule = (function(){
  const baseURL = 'https://thinkful-list-api.herokuapp.com/irem/items';
  function getItems(){ 
    return Promise.resolve('A successful response!');
  }
  return getItems();
}());