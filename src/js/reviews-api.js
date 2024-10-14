import axios from 'axios';

export async function fetchPosts() {
    const response = await axios(
        'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
}
fetchPosts()
    .then(response => response)
    .catch(e => e);

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const iziError = () =>
    iziToast.show({
        message: 'Service not found',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageSize: '16',
        messageColor: '#fff',
        theme: 'dark',
        maxWidth: '350px',
        icon: 'ico-error',
    });
let showSection = false;

export const listenHeight = () => {
    if (!showSection) {
        const section = document.querySelector('#reviews');
        const sectionPosition = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionPosition < screenHeight && sectionPosition >= 0) {
            iziError();
            showSection = true;
        }
    }
};
