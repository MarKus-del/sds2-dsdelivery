import axios from 'axios';

const API_URL = 'https://marcos-sds2-delivery.herokuapp.com'

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmarDelivery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}