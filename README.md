## 프론트엔드 오전반 3조 페어 1팀 프로젝트

> 참여 인원 

| **지성경**                                                                                                            | **함정우**                                                                                                                  | **윤승빈**                                                                                  

---


<br />



##  배포 링크

<br />

> https://project6-pair1.vercel.app/

<br />

![시연영상1](https://github.com/FrontEnd-Team3/project6-pair1/assets/123251211/169f5f98-98f4-40b7-a043-808fc1878542)
<br/>
<br />
![시연영상2](https://github.com/FrontEnd-Team3/project6-pair1/assets/123251211/55b50a23-0b5a-456a-9edb-8d290f206137)
<br />

---

## 기술스택

<br />

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![styledComponents](https://img.shields.io/badge/styled--components-5.3.5-DB7093?logo=styledcomponents)
![axios](https://img.shields.io/badge/axios-0.27.2-5E22D6)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.3.0-blue?logo=react-router)
![react-markdown](https://img.shields.io/badge/react--markdown-%208.0.3-red)

<br />

---

## 폴더 구조

    issue-project
    |-- README.md
    |-- package.json
    |-- package-lock.json
    |-- .gitignore
    |-- public
    |-- src
        |-- apis
        |-- compoenents
        |-- contexts
        |-- layouts
        |-- pages
        |-- reducer
        |-- routes
        |-- store
        |-- styles
        
<br />

---

##  요구 사항

가. 목록페이지

- 이슈 데이터를 가져와야하는 레퍼지토리는 https://github.com/angular/angular-cli를 활용 할 것
- 이슈 목록은 10개 단위의 페이지네이션으로 구현할 것,
    - 총 이슈의 갯수는 최근 200개로 한정 ( total item: 200 )
        - api에서 구할 수 없는 데이터이므로 임의로 정할 것
        - 만약 총 이슈의 갯수가 200개가 안된다고 하더라도 빈 페이지가 보이도록 구현
        
    - 현재 페이지의 숫자는 포커스 되어있어야 할것 < 1, 2, 3, [4], 5, 6 , 7, 8, 9 , 10 >
    - 10페이지 단위로 마지막 페이지에서 다음 페이지를 누르면 다음 10 페이지가 뜨도록 구현할 것
        - < 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 > [다음버튼]
        - < 11, 12, 13, 14, 15, 16, 17, 18, 18, 20 >
        
    - 버튼은 [맨처음] [이전] 1, [2], 3, 4, 5 [다음] [맨끝]으로 구현할 것

- 필터 기능 구현 (생성순/업데이트순/댓글순, 10개/20개/50개 씩 보기)
- 필터 기능 및 페이지네이션 구현 시 뒤로가기 기능을 지원해야한다
    
    ex) 2페이지 → 3페이지 (뒤로이동) → 2페이지
    
     생성순 → 업데이트순 (뒤로이동) → 생성순
    
- 목록은 RTK를 활용하여 전역 상태 관리 할 것
- 모바일 및 태블릿 화면으로 봐도 UX에 불편함이 없어야 함
- 데이터가 받아오는 동안 리스트 화면은 로딩 페이지를 띄워야함

나. 상세페이지

- 이슈의 id 값을 활용하여 api를 요청하고 해당 issue의 상세페이지를 구현할 것
- 모바일 및 태블릿 화면으로 봐도 UX에 불편함이 없어야 함

다. 공통

- 각 기능 마다 브랜치를 파서 merge 할 것
- README.md에 아래와 같은 사항을 추가할 것
    - 프로젝트 설명
    - 배포 주소 or 시연 영상
    - 프로젝트 폴더 구조
    - 팀원
    - 사용 기술 스택
    - 요구 사항 구현 내역
    - 코드 및 깃허브 커밋 컨벤션
---

## 구현 기능

- 공통구현 사항
  - 이미지 레이아웃 틀 만들기 (각자 파트 맡아서 진행)
  - 폴더 구조 회의로 정하고 시작(https://github.com/woowacourse-teams/2022-mo-rak/blob/dev/frontend/src/App.tsx 참고)
  - 외부 API통신 (Github -> axios) 가져오는 방법, 외부 데이터 state로 관리하는 방법, 데이터 로딩 상태, 에러 상태 구현
 <br />

## 요구 사항 구현 내역

- 이슈 목록 화면
  - 이슈 목록은 10개 단위의 페이지네이션으로 구현 / 총 이슈의 갯수는 최근 200개로 한정 ( total item: 200 ) => item 100개로 진행 리팩토링시 다시 수정 예정
    => https://api.github.com/repos/angular/angular-cli/issues 직접 들어가서 데이터 구조 확인 후 진행
  - 만약 총 이슈의 갯수가 200개가 안된다고 하더라도 빈 페이지가 보이도록 구현 => 실패 // 리팩토링 후 다시 구현 예정
  - 현재 페이지의 숫자는 포커스 되어있도록 구현 => 선택시 background 컬러 변경으로 표시
  - - 10페이지 단위로 마지막 페이지에서 다음 페이지를 누르면 다음 10 페이지가 뜨도록 구현할 것
    - < 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 > [다음버튼]
    - < 11, 12, 13, 14, 15, 16, 17, 18, 18, 20 >
    => 실패 // 데이터를 100개만 받아와지는 현상 해결못해서 위에 사항 실패함 리팩토링 시 다시 구현 예정
  - 버튼은 [맨처음] [이전] 1, [2], 3, 4, 5 [다음] [맨끝]으로 구현
  - 필터 기능 구현 (생성순/업데이트순/댓글순, 10개/20개/50개 씩 보기)
  - 필터 기능 및 페이지네이션 구현 시 뒤로가기 기능을 지원
  - 목록은 RTK를 활용하여 전역 상태 관리
  - 미디어 쿼리로 모바일 및 태블릿 화면으로 봐도 UX에 불편함이 없어야 함 => 어색한 부분이 있어 많이 부족했음
  - 데이터가 받아오는 동안 리스트 화면은 로딩 페이지 구현
  <br />

- 이슈 상세 화면
  - 이슈의 id 값을 활용하여 api를 요청하고 해당 issue의 상세페이지를 구현
  - 미디어 쿼리로 모바일 및 태블릿 화면으로 봐도 UX에 불편함이 없어야 함 => 어색한 부분이 있어 많이 부족했음

  <br />
---

## 커밋 컨벤션

|   Type   | Description                   |
| :------: | ----------------------------- |
|   feat   | Add a new feature             |
|   fix    | Fix the bug                   |
|  design  | UI design changes such as CSS |
|  style   | code formatting               |
| refactor | Refactoring the code          |
|   docs   | Modify the document           |
|  chore   | etc.                          |


