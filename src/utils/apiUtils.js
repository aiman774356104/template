
import axios from 'axios';

// const instance = axios.create({
// //   baseURL: `${process.env.REACT_APP_PM_API}/api`,
// });

function performanceAPI(url, params, method, data = null) {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return axios({
    method,
    url,
    params,
    // paramsSerializer: paramObject => Qs.stringify(paramObject, serializerConfig),
    data,
    headers,
  });
}

export {
  performanceAPI,
};
