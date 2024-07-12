import { AsaideBar } from "./components/AsaideBar/AsaideBar.js";
import { Card } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";

const arr = [
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: '6000',
    img: '/sneakers/1.jpg',
    id: 1
  },
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: '7500',
    img: '/sneakers/1.jpg',
    id: 2
  },
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: '3400',
    img: '/sneakers/1.jpg',
    id: 3
  },
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: '2250',
    img: '/sneakers/1.jpg',
    id: 4
  }
];

function App() {
  return (
    <div className="wrapper clear">
      <Header/>
      <AsaideBar/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img style={{ width:14, height:14 }} src="/img/search.svg" alt="#" />
            <input placeholder="поиск" />
          </div>
        </div>
        <div style={{ flexWrap: 'wrap' }} className="d-flex">
          <Card props={arr} />
        </div>
      </div>
    </div>
  );
}

export default App;
