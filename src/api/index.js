import axios from 'axios';
import {api_base} from '../utils';

export const getProduct = async categories => {
  try {
    const response = await axios.get(
      `${api_base}products/category/${categories}`,
    );
    return response.data;
  } catch (error) {}
};
export const getAllProduct = async categories => {
  try {
    const response = await axios.get(`${api_base}products/`);
    return response.data;
  } catch (error) {}
};
