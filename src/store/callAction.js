import axios from 'axios';

export const callResult = () => {
    const url = 'http://35.208.58.86:8080';

    return async (id, name, amount) => {
        try {
            const response = await axios.post(
                `${url}/api/customer/request`,
                {
                    id: id,
                    name: name,
                    amount: amount,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.data) {
                throw new Error('데이터를 찾을 수 없습니다.');
            }

            console.log('응답 성공', response.data);
            return response.data;
        } catch (e) {
            console.error('응답 실패', e.message);
        }
    };
};
