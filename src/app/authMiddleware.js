// authMiddleware.js

import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const authMiddleware = async (context) => {
    const session = await getSession(context);

    if (!session) {
        const router = useRouter();
        router.push('/login');
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
};

export default authMiddleware;

