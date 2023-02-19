import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, onItemFormChangeName, onItemFormChangeCategory, name, category}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={onItemFormChangeName}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={onItemFormChangeCategory}
        >
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
