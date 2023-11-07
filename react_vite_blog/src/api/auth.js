import { backendUrl } from '../config/app';
import axios from 'axios';


const fnLoginMutaton = async (loginData) => {
    const response = await axios.post(backendUrl+'login', loginData, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });

    // console.log(response);

    if(!response.status == 200){
        console.log('Failed to Login');
        throw new Error('Failed to Login');
    }

    const accessToken = response.data.data.access_token;
    const refreshToken = response.data.data.refresh_token;    
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    return response.data.data;
}

export {fnLoginMutaton};

