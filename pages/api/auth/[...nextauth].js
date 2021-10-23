import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { decode } from 'next-auth/jwt';
import axios from '../../../axios-config';
import headerConfig from '../header-config';

// const nextAuthOptions = (req, res) => {
//     return {
//         session: {
//             jwt: true,
//             maxAge: 30 * 24 * 60 * 60
//         },
//         providers: [
//             Providers.Credentials({
//                 authorize: async ({ email, password }) => {
//                     const { data, headers } = await axios.post('auth/login', { email, password });

//                     const cookies = headers['set-cookie'];
//                     res.setHeader('Set-Cookie', cookies);

//                     return {
//                         email: data.user.email,
//                         name: data.user.firstName,
//                     };
//                 }   
//             }),
//         ],
//         callbacks: {
//             // jwt: async (token, user, account, profile, isNewUser) => {
//             //     return {
//             //         token,
//             //         user,
//             //     }
//             // },  
//             session: async (session, token) => {
//                 session.jwt = token;

//                 const response = await fetch('http://localhost:2000/api/current-user');
//                 const data = await response.json();
//                 console.log('current user data in callbacks', data);

//                 return session;
//             }
//         }
//     }
// }

// const handler = (req, res) => NextAuth(req, res, nextAuthOptions);

// export default handler;

export default NextAuth({
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        Providers.Credentials({
            authorize: async ({ email, password }) => {
                const { data } = await axios.post('auth/login', { email, password });
                return {
                    jwt: data.token,
                    currentUser: data.user,
                };
            },
        }),
    ],
    callbacks: {
        jwt: async (token, user) => {
            if (user) {
                token.jwt = user.jwt;
                token.user = user.currentUser;
            }
            
            return Promise.resolve(token);
        },
        session: async (session, token) => {
            session.currentUser = token.user;
            session.jwt = token.jwt;

            const { data } = await axios.get('current-user', headerConfig(session.jwt));
            const { currentUser } = data;

            session.currentUser = currentUser;
            
            // console.log('session', session);

            // console.log('current user data in callbacks', data);

            return Promise.resolve(session);
        },
    }
});