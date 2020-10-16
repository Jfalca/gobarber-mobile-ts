import { Platform } from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://${Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'}:3333`,
});

export default api;
