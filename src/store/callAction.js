import axios from 'axios';
import { callActions } from './callSlice';

export const callResult = (id, name, amount) => {
    const url = 'http://35.208.58.86:8080';

    return async (dispatch) => {
        try {
            const response = await axios.post(
                `${url}/api/customer/request`,
                { id, name, amount },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.data) {
                throw new Error('데이터를 찾을 수 없습니다.');
            }

            dispatch(callActions.addCall(response.id));
            dispatch(callActions.addCall(response.name));
            dispatch(callActions.addCall(response.amount));

            console.log('요청 성공', response.data);
            return response.data;
        } catch (e) {
            console.error('요청 실패', e.message);
        }
    };
};
