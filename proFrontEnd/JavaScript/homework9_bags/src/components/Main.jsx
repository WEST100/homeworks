import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import Dropdown from "./Dropdown";
import Goods from "./Goods";

const Main = () => {
  const [filters, setFilters] = useState([
    {
      id: "1",
      label: "Сортировать: по цене",
      selected: true,
    },
    {
      id: "2",
      label: "Сортировать: по наименованию",
      selected: false,
    },
  ]);

  const [goods, setGoods] = useState([
    {
      id: "1",
      img: "./src/assets/1.jpg",
      name: "adidas",
      price: 500,
    },
    {
      id: "2",
      img: "./src/assets/1.jpg",
      name: "nike",
      price: 300,
    },
    {
      id: "3",
      img: "./src/assets/1.jpg",
      name: "puma",
      price: 400,
    },
    {
      id: "4",
      img: "./src/assets/1.jpg",
      name: "adidas",
      price: 500,
    },
    {
      id: "5",
      img: "./src/assets/1.jpg",
      name: "adidas",
      price: 500,
    },
    {
      id: "6",
      img: "./src/assets/1.jpg",
      name: "adidas",
      price: 500,
    },
    {
      id: "7",
      img: "./src/assets/1.jpg",
      name: "adidas",
      price: 500,
    },
    {
      id: "8",
      img: "./src/assets/1.jpg",
      name: "adidas",
      price: 500,
    },
  ]);

  const handeleLabelChangeFilters = (label) => {
    const updateLabels = filters.map((item) => ({
      ...item,
      selected: item.id === label.id,
    }));

    // const updateLabels = cars.map(item => {
    //   item.selected = item.id === label.id;

    //   return item;
    // })

    setFilters(updateLabels);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <a href="/">Logo</a>

            <FaCartArrowDown />
          </div>
        </div>
      </header>

      <div className="wrapper">
        <div className="container">
          <div className="wrapper__content">
            <aside className="sidebar">
              <nav className="nav">
                <ul>
                  <li>
                    <a href="/" className="nav__item nav__item_header">
                      Catalogue
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav__item">
                      Bags
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav__item">
                      T-shorts
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav__item">
                      Sneakers
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <main className="content">
              <div className="content__header">
                <Dropdown labels={filters} onSelect={handeleLabelChangeFilters} />
                {/* <select name="" id="">
                  <option value="">link 1</option>
                  <option value="">link 2</option>
                  <option value="">link 3</option>
                </select> */}
              </div>

              <div className="content__container">
                <div className="products">
                  {/* <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div>
                  <div className="item"></div> */}
                  {goods && goods.map((item) => <Goods key={item.id} good={item} />)}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
