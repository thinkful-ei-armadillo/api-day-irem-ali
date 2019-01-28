/* global Item, api */

// eslint-disable-next-line no-unused-vars
'use strict';
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
    // try {
    //   Item.validateName(name);
    //   this.items.push(Item.create(name));
    // } catch(e) {
    //   console.log(e.message);
    // }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  // const findAndToggleChecked = function(id) {
  //   const item = this.findById(id);
  //   item.checked = !item.checked;
  // };
  const findAndUpdate = function(id,data){
    this.items = this.items.map(item => {
      if(item.id === id){
        return Object.assign(item, data);
      }
      return item;
    });
  };
  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  // const findAndUpdateName = function(id, name) {
  //   try {
  //     Item.validateName(name);
  //     const item = this.findById(id);
  //     item.name = name;
  //   } catch(e) {
  //     console.log('Cannot update name: ' + e.message);
  //   }
  // };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate,
    addItem,
    findById,
    // findAndToggleChecked,
    findAndDelete,
    // findAndUpdateName,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
