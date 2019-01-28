/* global $, shoppingList, store, api */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems()
    .then(items => items.forEach(item => store.addItem(item)))
    .then(()=> {
      console.log(store.items);
      const item = store.items[0];
      console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'foobar' });
      // console.log('new name: ' + item.name);
      shoppingList.render();
    });
  
  
});



// api.getItems()
//   .then((items) => {
//     const item = items[0];
//     return api.updateItem(item.id, { name: 'foobar' });
//   })
//   .then(() => {
//     // we don't care about the response body here so we don't need to run res.json()
//     console.log('updated!');
//   });





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