import { useEffect, useState } from "react";
import { AsaideBar } from "./components/AsaideBar/AsaideBar.js";
// import axios from 'axios';
import { Card } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";
import { axiosAddToCart, axiosCartRemove, axiosGetCart, axiosGetSneakers } from "./service/service.js";

// const data = [
//   {
//     title: 'Мужские кроссовки Nike Blazer Mid Suede',
//     price: '6000',
//     img: '/sneakers/1.jpg',
//     id: 1
//   },
//   {
//     title: 'Мужские кроссовки Nike Blazer Mid Suede',
//     price: '7500',
//     img: '/sneakers/2.jpg',
//     id: 2
//   },
//   {
//     title: 'Мужские кроссовки Nike Blazer Mid Suede',
//     price: '3400',
//     img: '/sneakers/3.jpg',
//     id: 3
//   },
//   {
//     title: 'Мужские кроссовки Nike Blazer Mid Suede',
//     price: '2250',
//     img: '/sneakers/4.jpg',
//     id: 4
//   }
// ];

function App() {

  const [ sneakers, setSneakers ] = useState([]);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartOpened, setCartOpened ] = useState(false);
  const [ search, setSearchValue ] = useState('');

  useEffect(() => {
    // fetch('https://66928bc6346eeafcf46d4774.mockapi.io/sneakers')
    // .then(res => (
    //   res.json()
    // ))
    // .then(data => (
    //   setSneakers(data)
    // ));

    // axios.get('https://66928bc6346eeafcf46d4774.mockapi.io/sneakers').then(res => setSneakers(res.data));
    // axios.get('https://66928bc6346eeafcf46d4774.mockapi.io/cart').then(res => setCartItems(res.data));
    axiosGetSneakers(setSneakers);
    axiosGetCart(setCartItems);
  }, []);

  const onAddToCart = (items) => {
    // axios.post('https://66928bc6346eeafcf46d4774.mockapi.io/cart', items);
    axiosAddToCart(items);
    setCartItems(prev => [...prev, items]);
  }

  const onClickRemoveItem = (id) => {
    // axios.delete(`https://66928bc6346eeafcf46d4774.mockapi.io/cart/${id}`);
    axiosCartRemove(id);
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
  
  const onChangeSeacrhInput = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="wrapper clear">
      <Header onClickCart={() => setCartOpened(true)} />
      { cartOpened && <AsaideBar cartItems={cartItems} onClickRemoveItem={(id) => onClickRemoveItem(id)} onClose={() => setCartOpened(false)} /> }
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{ search ? `Поиск по запросу: ${search}` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img style={{ width:14, height:14 }} src="/img/search.svg" alt="#" />
            {search && <img onClick={() => setSearchValue('')} className="cleare cu-p" src="/img/btn-remove.svg" alt="#" />}
            <input placeholder="поиск" value={search} onChange={(e) => onChangeSeacrhInput(e)} />
          </div>
        </div>
        <div style={{ flexWrap: 'wrap' }} className="d-flex">
          {
            sneakers.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map((obj) => (
              <Card key={obj.id} cards={obj} onPlus={(items) => onAddToCart(items)} onFavorite={() => console.log('Favorite')} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
