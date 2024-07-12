export const Card = () => {
  return (
    <div className="card">
        <div className="favorite">
          <img src="/img/unliked.svg" alt="#" />
        </div>
        <img style={{ width: 133, height: 112 }} src="/sneakers/1.jpg" alt="sneakers" />
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center ">
          <div className="d-flex flex-column ">
            <span>
              цена:
            </span>
            <b>
              6000 грн.
            </b>
          </div>
          <button className="button">
            <img style={{ width: 11, height: 11 }} src="/img/plus.svg" alt="#" />
          </button>
        </div>
    </div>
  )
}