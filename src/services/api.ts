import axios from 'axios';

import { config } from '@/src/config';

export const baseApi = axios.create({
  baseURL: config.SERVER_URL,
});
