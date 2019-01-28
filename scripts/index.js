/* global $, shoppingList, store, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems()
  .then((items) => {
    const item = items[0];
    return api.updateItem(item.id, { name: 'foobar' });
  })
  .then(() => {
    // we don't care about the response body here so we don't need to run res.json()
     console.log('updated!');
  });





// api.getItems()
//   .then(res => res.json())
//   .then((items) => {
//     items.forEach((item) => store.addItem(item));
//     shoppingList.render();
//   });

//store.items.push(Item.create('apples'));

// api.getItems()
//   .then(res => res.json())
//   .then(res => console.log(res));*/

// console.log(api.BASE_URL);

// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then(items => {
//     console.log(items);
//   });