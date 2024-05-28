import React from 'react';
import { CiSearch, CiShoppingBasket, CiSliderHorizontal } from "react-icons/ci";
import "./App.scss";
import { useSelector } from 'react-redux';
import {NavLink, Routes, Route} from "react-router-dom";
import Products from './components/Products/Products';

const App = () => {

  const setIsActive = ({isActive}) => isActive ? "tab__item tab__item-active" : "tab__item";

  return (
    <>
      <div className="page-mobile">
        <header className='header'>
          <div className='header__info'>
            <span>Hello 🖐</span>
            <h2>John Done</h2>
          </div>

          <div className='header__search'>
            <div className='search'>
              <input type="text" placeholder="Search coffee" className='search__input' />
              <CiSearch className='search__icon' />
            </div>

            <button className='btn'><CiSliderHorizontal className='btn-icon' /></button>
          </div>

          <div className="banner">
            <img src="../images/banner.png" alt="" className='banner__image' />
          </div>
        </header>

        <main className='content'>
          <div className="menu">
            <ul className="tab">
              <li><NavLink to="/" className={setIsActive}>All Coffee</NavLink></li>
              <li><NavLink to="/categories/1" className={setIsActive}>Machiato</NavLink></li>
              <li><NavLink to="/categories/2" className={setIsActive}>Latte</NavLink></li>
              <li><NavLink to="/categories/3" className={setIsActive}>Americano</NavLink></li>
              <li><NavLink to="/categories/4" className={setIsActive}>Stained</NavLink></li>
            </ul>
          </div>


          <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/categories/:categoryId" element={<Products />} />
          </Routes>

        </main>
      </div>
    </>
  )
}

export default App