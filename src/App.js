import { AsaideBar } from "./components/AsaideBar/AsaideBar.js";
import { Card } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";

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
        <div className="d-flex">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
