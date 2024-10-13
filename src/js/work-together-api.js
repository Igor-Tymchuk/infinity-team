import axios from 'axios';
import { formData } from './work-together';

export async function sendMessageAPI(formData) {
  try {
    const response = await axios.post(
      `https://portfolio-js.b.goit.study/api/requests`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
