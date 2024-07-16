import axios from "axios";

export const axiosGetSneakers = (setState) => {
    axios.get('https://66928bc6346eeafcf46d4774.mockapi.io/sneakers').then(res => setState(res.data));
}

export const axiosGetCart = (setState) => {
    axios.get('https://66928bc6346eeafcf46d4774.mockapi.io/cart').then(res => setState(res.data));
}

export const axiosCartRemove = (id) => {
    axios.delete(`https://66928bc6346eeafcf46d4774.mockapi.io/cart/${id}`);
}

export const axiosAddToCart = (items) => {
    axios.post('https://66928bc6346eeafcf46d4774.mockapi.io/cart', items);
}