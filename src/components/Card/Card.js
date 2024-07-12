export const Card = ( { props } ) => {
  return (
    props.map((obj) => (
      <div className="card" key={obj.id}>
        <div className="favorite">
          <img src="/img/unliked.svg" alt="#" />
        </div>
        <img style={{ width: 133, height: 112 }} src={obj.img} alt="sneakers" />
        <h5>{obj.title}</h5>
        <div className="d-flex justify-between align-center ">
          <div className="d-flex flex-column ">
            <span>
              цена:
            </span>
            <b>
              {obj.price} грн. 
            </b>
          </div>
          <button className="button">
            <img style={{ width: 11, height: 11 }} src="/img/plus.svg" alt="#" />
          </button>
        </div>
      </div> 
    ))
  )
}