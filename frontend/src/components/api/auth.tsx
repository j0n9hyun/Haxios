import axios from 'axios';

export const call = async () => {
  await axios
    .get('http://localhost:5000/')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
