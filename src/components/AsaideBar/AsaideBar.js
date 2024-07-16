export const AsaideBar = ({onClose, cartItems = [], onClickRemoveItem}) => {

  return (
    <div className="overlay">
      <aside className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина 
          <img onClick={onClose} className="close cu-p" src="/img/btn-remove.svg" alt="#" />
        </h2>
        <div className="items">
          {
            cartItems.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: `url(${obj.img})` }} className="cartItemImage" />
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <p>{obj.price} грн.</p>
                </div>
                <img onClick={() => onClickRemoveItem(obj.id)} className="cartItemRemove" src="/img/btn-remove.svg" alt="#" />
              </div>
            ))
          }
        </div>
        <div className="cartTotalBlock">
          {
            cartItems.length ? 
            (
              <>
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
              </> 
            )
            : 
            (
              <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img src="/img/empty-cart.jpg" width={120} height={120} alt="#" className="mb-20" />
                <h2>Корзина пустая</h2>
                <p className="opacity-6">Добавьте хотя бы одну пару кросовок, чтобы сделать заказ.</p>
                <button onClick={onClose} className="greenButton">
                  Вернуться назад <img src="/img/arrow.svg" alt="#" />
                </button>
              </div>

            )
          }  
        </div>
      </aside>
    </div>
  )
}