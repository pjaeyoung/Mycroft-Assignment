## Mycroft 사전과제 
- 구현 기간 : 3일 (2021/08/02 ~ 2021/08/05)
- 사용 스택 : React / Redux 
- 배포 링크 : https://pjaeyoung.github.io/Mycroft-Assignment/

![스크린샷, 2021-08-05 23-27-48](https://user-images.githubusercontent.com/47022167/128367312-1780ed2a-79ce-4def-96ab-5dfdb2b14c23.png)

### 개발 포인트

1. 폴더 구조 전략
    - 컴포넌트(components), 페이지(pages), 레이아웃(layout) 폴더라 나누었습니다. 
    - 각 페이지는 공통 레이아웃을 가지고 있습니다. 
    - 각 페이지는 필요한 컴포넌트를 가져와 조립한 결과물입니다.   
    - 위 전략으로 컴포넌트 재사용성을 높였습니다. 

2. Token 값 저장
    - Redux와 LocalStorage를 사용해서 로그인 상태를 유지하도록 했습니다. 
    - 마이페이지를 PrivateRoute로 구분시킨 후 token 여부에 따라 마이페이지 접근을 제한했습니다. 
    - useAuth hook을 만들어 반복되는 코드 (useSelector, useDispatch)를 줄였습니다. 

3. 공통 css 변수 
    - 페이지 간 통일성있는 UI 제공을 위해 엘리먼트의 색상, 크기 등을 변수로 만들고 글로벌 스타일로 지정했습니다.

4. Form 검사
    - `Formik` 라이브러리를 사용해 여러 입력창 제어를 간단하고 빠르게 구현했습니다.
    - 양식 유효성 검사는 validation.js 파일로 따로 두어 로그인과 회원가입에서 공통적으로 사용할 수 있게 만들었습니다.

5. 캐싱
    - 마이페이지에서 이전에 요청했던 페이지는 그 결과물을 캐싱하도록 `swr` 라이브러리를 사용했습니다.  
