import axios from 'axios';

export async function fetchPosts() {
    const response = await axios(
        'https://portfolio-js.b.goit.study/api/reviews'
    );
    console.log(response.status);
    if (response.status !== 200) {
        document.addEventListener('scroll', listenHeight);
        console.log(response);
    }
    return response.data;
}
fetchPosts()
    .then(response => console.log(response))
    .catch(e => console.log(e.response.data.message));

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

const listenHeight = () => {
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
