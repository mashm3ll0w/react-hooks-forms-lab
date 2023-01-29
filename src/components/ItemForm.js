import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  function handleNewItem(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleNewItemSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      ...formData
    });
  }


  return (
    <form className="NewItem" onSubmit={handleNewItemSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItem} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItem} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
