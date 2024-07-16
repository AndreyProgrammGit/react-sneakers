import styles from './Card.module.scss';
import { useState } from 'react';

export const Card = ( { cards, onPlus } ) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const title = cards.title;
  const price = cards.price;
  const img = cards.img;

  const addToCart = () => {
    onPlus({title, price, img});
    setIsAdded(!isAdded);
  }

  const addToFavorite = () => {
    setIsFavorite(!isFavorite);
  }
  
  return (
      <div className={styles.card} key={cards.id}>
        <div className={styles.favorite}>
          <img onClick={addToFavorite} src={ isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="#" />
        </div>
        <img style={{ width: 133, height: 112 }} src={cards.img} alt="sneakers" />
        <h5>{cards.title}</h5>
        <div className="d-flex justify-between align-center ">
          <div className="d-flex flex-column ">
            <span>
              цена:
            </span>
            <b>
              {cards.price} грн. 
            </b>
          </div>
          <img className={styles.plus} onClick={addToCart} src={ isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="#" />
        </div>
      </div> 
    )
}