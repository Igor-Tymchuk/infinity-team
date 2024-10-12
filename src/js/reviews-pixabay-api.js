import axios from "axios";

export async function fetchPosts() {
    const response = await axios.get("https://portfolio-js.b.goit.study/api/reviews", {
            headers: {
                accept: 'application/json'
            }
        });
    return response.data;
};