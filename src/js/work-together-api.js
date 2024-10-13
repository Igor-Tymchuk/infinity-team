import axios from 'axios';

export async function sendMessageAPI(formData) {
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/contact',
      formData,
      {
        headers: {
          'Content-Type': 'application/json', // відправка даних в форматі джейсон
        },
      }
    );
    return response; // відповідь повертається з сервера
  } catch (error) {
    throw error; // щоб обробити помилку в іншому файлі
  }
}
