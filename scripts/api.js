'use strict';
/* global $, api */
const listFetchApi = function(...args) {
  let error = false;
  return fetch(...args)
    .then(res => {
      if(!res.ok) {
        error = true;
      }
      return res.json();
    })
    .then(data => {
      if (error) throw new Error(data.message);
      return data;
    })
};

const api = (function (){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/irem';

  const getItems = function() { 
    return listFetchApi(`${BASE_URL}/items`);
    
    
    //Promise.resolve('A successful response!');
  };

  const createItem = function(itemName){
    let newItem = JSON.stringify({
      name: itemName
    });
    return listFetchApi(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'}),
      body: newItem
    });
  };

  const updateItem = function(id, updateData) {

    return listFetchApi(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: new Headers({
      'Content-Type': 'application/json'}),
      body: JSON.stringify(updateData)
    });
  };

  // const findAndUpdate = function(id, newData) {
  //   const itemToFind = listFetchApi(`${BASE_URL}/items/${id}`);
  //   Object.assign()
  // }
  


  return {
    getItems: getItems,
    createItem: createItem,
    updateItem: updateItem,
    //findAndUpdate: findAndUpdate
  };
}());




