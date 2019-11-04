# 스터디 프로젝트

# 개발 환경
    Operating System : centOS 7
    Ram : 1GB
    DataBase : MySQL
    WAS : enginX
    Language : Java 1.8, JavaScript
    FrameWork : MyBatis, Spring Boot, React.js
    Build Tool : WebPack, Gradle
    Client Tool : DBeaver
    IDE Tool : IntelliJ, Visual Studio Code
    Configuration : git


# 구현 목표 
* 게시물 등록하기
* 게시물 삭제하기
* 게시물 조회하기
* 댓글 등록하기
* 프로필 수정하기, 비밀번호 변경
* 회원가입하기
* 로그인, 비밀번호 찾기
* 좋아요 누르기
* 친구 찾기, 친구 삭제, 친구 추가

# 구현 순서 및 기간
기능|기간
---------|---- 
로그인|4일
회원가입|2일
비밀번호 찾기|1일
프로필 수정 및 변경|5일
친구 관리|7일
게시물 상세 보기,등록|7일
게시물 수정, 삭제|2일
게시물 좋아요|4일

# REST API 데이터 구조
* Response Header
{
    header: {
        page: 요청페이지,
        netKind: 통신 종류,
        mapKey: 로그인전 통신인증 키,
    }
    
}
* Request Header
{
    header: {
        resCode: 0 - 성공, 100~199 - ERROR LV.1, 200~299 - ERROR LV.2, 300~399 - ERROR LV.3 ...,
        page: 요청페이지,
        netKind: 통신 종류,
        mapKey: 로그인전 통신인증 키,
    }
}