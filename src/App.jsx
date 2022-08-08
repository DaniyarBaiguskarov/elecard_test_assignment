import React, { useState } from "react";

import CardsView from "./components/CardsView.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

import TreeView from "./components/TreeView.jsx";

import { buildTree } from "./utils/TreeView.js";
import { sorts, views, SortItems } from "./utils/CardView.js";
import { AdaptData } from "./utils/Adapter.js";

function App() {
  const [view, setView] = useState("cards");
  const [sort, setSort] = useState("category");
  const [items, setItems] = useState([]);

  const [isLoading, setIsloading] = useState(false);
  let deletedItems = JSON.parse(localStorage.getItem("deletedItems")) || [];
  const fetchItems = async () => {
    setIsloading(true);
    const res = await fetch(
      "http://contest.elecard.ru/frontend_data/catalog.json"
    );
    const data = await res.json();
    const adaptedData = AdaptData(data);
    const exludingDelitedItems = adaptedData.filter(
      (item) => !deletedItems.includes(item.image)
    );
    setItems(exludingDelitedItems);
    setIsloading(false);
  };
  const deleteItem = (image) => {
    const filtredArr = items.filter((item) => item.image !== image);
    setItems(filtredArr);

    localStorage.setItem(
      "deletedItems",
      JSON.stringify([...deletedItems, image])
    );
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleView = (e) => {
    setView(e.target.value);
  };
  const handleRefresh = () => {
    deletedItems = [];
    localStorage.setItem("deletedItems", JSON.stringify([]));
    fetchItems();
    setSort("category");
  };

  React.useEffect(() => {
    fetchItems();
  }, []);
  React.useEffect(() => {
    setItems(SortItems([...items], sort));
  }, [sort]);
  return (
    <div className="main">
      <Header
        handleView={handleView}
        handleSort={handleSort}
        sort={sort}
        view={view}
        sorts={sorts}
        views={views}
        handleRefresh={handleRefresh}
      />

      {isLoading ? (
        <div className="main__isLoading isLoading">Идет загрузка...</div>
      ) : view === "cards" ? (
        <CardsView items={items} deleteItem={deleteItem} />
      ) : (
        <TreeView items={buildTree(items)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
