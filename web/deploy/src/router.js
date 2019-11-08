//로그인 전
import LoginPage from './layout/sub/login/LoginPage';
import SignUpPage from './layout/sub/signUp/SignUpPage';
import FindPassword from './layout/sub/findPassword/FindPassword';
import EmailPwFind from './layout/sub/findPassword/EmailPwFind';
import PhonePwFind from './layout/sub/findPassword/PhonePwFind';
import NewProfile from './layout/sub/profile/NewProfile';

//로그인 후
import HomePage from './layout/main/home/HomePage';


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
    //이메일로 비밀번호 찾기 페이지
    {
        path: '/EmailPwFind',
        route: 'Sub',
        component: EmailPwFind,
    },
    //전화번호로 비밀번호 찾기 페이지
    {
        path: '/PhonePwFind',
        route: 'Sub',
        component: PhonePwFind,
    },
    //프로필 생성 페이지
    {
        path: '/NewProfile',
        route: 'Sub',
        component: NewProfile,
    },

    //메인화면
    {
        path: '/Home',
        route: 'Main',
        component: HomePage,
    },
]

export default router;
