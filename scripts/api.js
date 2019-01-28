'use strict';
/* global $, api */

const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/irem';

  const getItems = function() { 
    return fetch(`${BASE_URL}/items`);
    
    
    
    //Promise.resolve('A successful response!');
  };

  return {
    getItems: getItems
  };
}());


