import axios from './axios';

// ----------------------------------------------------------------------

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.clear()
        delete axios.defaults.headers.common.Authorization;
    }
};

export { setSession };
