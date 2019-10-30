//로그인 전
import LoginPage from './layout/sub/login/LoginPage';
import SignUpPage from './layout/sub/signUp/SignUpPage';
import FindPassword from './layout/sub/findPassword/FindPassword';

//로그인 후

const router = [
    //로그인 페이지
    {
        path: '/Login',
        route: 'Sub',
        component: LoginPage,
    },
    //회원가입 페이지
    {
        path: '/SignUp',
        route: 'Sub',
        component: SignUpPage,
    },
    //비밀번호 찾기 페이지
    {
        path: '/FindPassword',
        route: 'Sub',
        component: FindPassword,
    },
]

export default router;
