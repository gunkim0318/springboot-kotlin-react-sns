//로그인 전
import LoginPage from './layout/sub/login/LoginPage';
import SignUpPage from './layout/sub/signUp/SignUpPage';

//로그인 후

const router = [
    {
        path: '/Login',
        route: 'Sub',
        component: LoginPage,
    },
    {
        path: '/SignUp',
        route: 'Sub',
        component: SignUpPage,
    }
]

export default router;
