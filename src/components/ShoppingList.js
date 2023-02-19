import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, addItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function onCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function onItemFormChangeName(event) {
    setName(event.target.value)
  }

  function onItemFormChangeCategory(event) {
    setCategory(event.target.value)
  }

  function onItemFormSubmit(event) {
    event.preventDefault()

    console.log(event)

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };

    addItems(newItem)

  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter(item => {
      if (search === "") return true
      return item.name.includes(search)
    })
  ;

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        onItemFormChangeName={onItemFormChangeName}
        onItemFormChangeCategory={onItemFormChangeCategory}
        name={name}
        category={category}
      />
      <Filter
        onCategoryChange={onCategoryChange}
        selectedCategory={selectedCategory}
        onSearchChange={onSearchChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
