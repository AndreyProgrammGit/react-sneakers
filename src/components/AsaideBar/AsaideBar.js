export const AsaideBar = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <aside className="drawer">
        <h2 className="mb-30 d-flex justify-between">Корзина <img className="cartItemRemove cu-p" src="/img/btn-remove.svg" alt="#" /></h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/sneakers/1.jpg)' }} className="cartItemImage" />
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <p>6000 грн.</p>
            </div>
            <img className="cartItemRemove" src="/img/btn-remove.svg" alt="#" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/sneakers/1.jpg)' }} className="cartItemImage" />
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки Nike Blazer Mid Suede</p>
              <p>6000 грн.</p>
            </div>
            <img className="cartItemRemove" src="/img/btn-remove.svg" alt="#" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>20 000 грн.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>1000 грн.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="#" />
          </button>
        </div>
      </aside>
    </div>
  )
}