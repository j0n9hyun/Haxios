import { atom, selector, useRecoilState } from 'recoil';
import axios from 'axios';

// export const test = selector({
//   key: 'testkey',
//   get: async() => {
//     await axios.post('http://localhost:5000/api/users/register', {
//       email: id,
//       password: pw,
//     })
//   }
// })
