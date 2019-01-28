'use strict';
/* global $, api */

const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/irem';

  const getItems = function() { 
    return fetch(`${BASE_URL}/items`);
    
    
    
    //Promise.resolve('A successful response!');
  };

  const createItem = function(name){
    let newItem = {
      name: name
    };
    return fetch(`${BASE_URL}/items`, {
      name,
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'}),
      body: JSON.stringify(newItem)
    });
  };
  

  return {
    getItems: getItems,
    createItem: createItem
  };
}());




