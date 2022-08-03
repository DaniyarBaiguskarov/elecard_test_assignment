import React, { useState } from "react";

import CardsView from "./components/CardsView.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import RadioButtonGroup from "./components/RadioButtonGroup.jsx";

import TreeView from "./components/TreeView.jsx";

import { buildTree } from "./utils/TreeView.js";
import { sorts, views, SortItems } from "./utils/CardView.js";

function App() {
  const [view, setView] = useState("cards");
  const [sort, setSort] = useState("image");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  const [isLoading, setIsloading] = useState(false);

  const fetchAndStoreItems = async () => {
    setIsloading(true);
    const res = await fetch(
      "http://contest.elecard.ru/frontend_data/catalog.json"
    );
    const data = await res.json();
    setItems(data);
    localStorage.setItem("items", JSON.stringify(data));
    setIsloading(false);
  };
  const deleteItem = (image) => {
    const filtredArr = items.filter((item) => item.image !== image);
    setItems(filtredArr);
    localStorage.setItem("items", JSON.stringify(filtredArr));
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handleView = (e) => {
    setView(e.target.value);
  };

  React.useEffect(() => {
    if (items) {
      fetchAndStoreItems();
    }
  }, []);
  React.useEffect(() => {
    setItems(SortItems([...items], sort));
  }, [sort]);

  return (
    <div className="main">
      <Header />
      <div className=" main__functionality functionality">
        {" "}
        <RadioButtonGroup items={views} handleFunc={handleView} active={view} />
        <div className="refresh" onClick={() => fetchAndStoreItems()}>
          refersh
        </div>
      </div>

      {isLoading ? (
        <div className="main__isLoading isLoading">Идет загрузка...</div>
      ) : view === "cards" ? (
        <>
          <RadioButtonGroup
            items={sorts}
            handleFunc={handleSort}
            active={sort}
          />
          <CardsView items={items} deleteItem={deleteItem} />
        </>
      ) : (
        <TreeView items={buildTree(items)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
