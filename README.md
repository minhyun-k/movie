<div align="center">

<!-- logo -->
<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/loading-1.png" width="400" height="400"/>

### YFLIX 🖍️

</div> 

## 📝 프로젝트 소개


**YFLIX**은 최신 영화 정보와 사용자 리뷰를 제공하는 영화 정보 검색 웹입니다.  
- **목적**: 사용자가 다양한 영화 정보를 탐색하고 관심 있는 영화를 선택할 수 있도록 돕습니다.  
- **특징**: React.js와 TMDB(The Movie Database) API를 기반으로 구현되었으며, 영화 검색, 인기 영화 리스트, 상세 정보 조회 기능을 제공합니다.  
- **주요 학습 목표**: 
  - RESTful API 연동을 통해 비동기 데이터 처리를 학습.
  - 컴포넌트 기반 UI 설계로 코드의 재사용성과 가독성을 향상.
  - 반응형 디자인과 사용자 친화적인 인터페이스 구현.

---

[배포사이트 링크](https://vercel.com/minhyun-ks-projects/movie)  
[GitHub Repository](https://github.com/minhyun-k/movie.git)
<br />

## 🗓 프로젝트 일정
**총 일정 2024.06 ~ 2024.08**



<br />
## 🛠 화면 구성

|화면 명|
|:---:|
|로딩 화면|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/loading.gif" width="450"/>|
|처음 어플리케이션 실행 시 로딩화면 출력|
|메인 홈|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/Home.gif" width="450"/>|
|홈 화면은 서버요청을 통해 베스트셀러, 신간 등 카테고리에 맞는 데이터가 출력되어 사용자가 도서 목록을 확인할 수 있습니다.|
|도서목록|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/list.gif" width="450"/>|
|홈 화면에서 각 카테고리별 더보기 클릭시, 혹은 헤더 메뉴 클릭시 각 카테고리에 맞는 도서 목록이 페이지에 출력됩니다.|
|상세페이지|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/detail.gif" width="450"/>|
|홈, 도서목록에서 사용자가 관심있는 도서 컨텐츠를 클릭 시, 클릭한 도서의 상세정보가 포함된 페이지가 열립니다. 이 페이지에서는 도서의 상세내용, 북마크, 코멘트 작성이 가능하며, 베스트셀러의 경우 베스트 순위, 신간의 경우 신간도서 표시가 제공됩니다.|
|북마크 등록 및 코멘트 작성|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/detail2.gif" width="450"/>|
|북마크 클릭시 '읽는중', '읽고싶어요' 등록 가능, firebase를 통해 각 로그인한 사용자 개인 북마크 기능 활성화, 코멘트 작성 시 별점과 리뷰(댓글형식)가 표시됩니다.|
|마이페이지|
|:---:|
|<img src="https://github.com/minhyun-k/Book-IEUM/blob/main/public/mypage.gif" width="450"/>|
|로그인 시 firebase를 사용하여, 각 사용자가 사용한 북마크와 코멘트가 출력되어 사용자의 경험, 히스토리를 확인할 수 있습니다.|

<br />

## ⚙ 기술 스택

이 프로젝트는 다양한 최신 기술을 활용하여 구현되었습니다.

- **Frontend**: React.js, JavaScript, HTML5, CSS3  
- **API**: [TMDB API](https://www.themoviedb.org/documentation/api)  
- **배포**: Vercel  
- **GitHub**: 버전 관리 및 협업 도구

<br />

## :wrench: 주요 기능 및 특징

### 1) **최신 영화 및 인기 영화 목록**
- **설명**: TMDB API를 활용하여 최신 및 인기 영화를 실시간으로 표시.  
- **사용 방법**: 
  - 메인 페이지에서 최신 영화와 인기 영화 섹션을 확인.  
  - 영화 이미지를 통해 즉시 영화 상세 정보로 이동 가능.

### 2) **영화 검색 기능**
- **설명**: 사용자가 영화 제목을 입력하여 원하는 영화를 검색 가능.  
- **특징**: 검색 결과가 TMDB의 방대한 데이터베이스에서 즉각적으로 반영.

### 3) **영화 상세 정보 제공**
- **설명**: 개별 영화 카드 클릭 시 상세 정보 페이지로 이동.  
- **제공 정보**: 
  - 영화 제목, 개봉일, 평점, 줄거리 등.
  - 추가로 영화 예고편 링크 및 제작사 정보 제공.

### 4) **반응형 디자인**
- **설명**: 모바일, 태블릿, 데스크톱에 최적화된 UI 제공.  
- **기술 사용**: CSS Grid 및 Flexbox를 조합하여 유동적인 레이아웃 구성.

### 5) **즐겨찾기 기능 (예정)**  
- **설명**: 사용자가 좋아하는 영화를 저장하고 관리할 수 있는 기능(개발 중).

---
<br />

## 🤔 기술적 이슈와 해결 과정

### 1) **API 데이터 호출 최적화**
- **문제**: 대량의 데이터를 호출하면서 발생하는 페이지 로딩 지연.  
- **해결 방법**:
  1. API 데이터 페이징(Pagination)을 구현하여 한 번에 불러오는 데이터 양 제한.  
  2. React의 `useEffect`를 통해 필요한 시점에만 데이터 요청.

### 2) **이미지 로딩 속도 문제**
- **문제**: TMDB에서 제공하는 고화질 이미지로 인해 초기 로딩 속도가 느려짐.  
- **해결 방법**: 
  - **Lazy Loading**을 도입하여 사용자가 스크롤할 때 이미지를 동적으로 로드.  
  - 이미지 크기를 최적화하고 CDN을 활용.

### 3) **다양한 화면 크기 대응**
- **문제**: 반응형 디자인 미흡으로 모바일 환경에서 레이아웃 깨짐 발생.  
- **해결 방법**: 
  - CSS 미디어 쿼리를 사용해 화면 크기별 레이아웃 조정.  
  - Grid와 Flexbox를 활용하여 콘텐츠 정렬 및 크기 조절.


---

<br />

##  :file_folder: 폴더 구조
📂 src
 ┣ 📂 components         # 공통 컴포넌트
 ┃ ┣ 📜 Header.jsx       # 헤더 UI 컴포넌트
 ┃ ┣ 📜 MovieCard.jsx    # 개별 영화 카드 컴포넌트
 ┃ ┣ 📜 Footer.jsx       # 푸터 UI 컴포넌트
 ┣ 📂 pages              # 주요 페이지
 ┃ ┣ 📜 Home.jsx         # 메인 페이지
 ┃ ┣ 📜 Search.jsx       # 검색 결과 페이지
 ┃ ┗ 📜 Detail.jsx       # 영화 상세 페이지
 ┣ 📂 assets             # 정적 파일 (이미지, 아이콘 등)
 ┣ 📂 utils              # 유틸리티 함수
 ┃ ┗ 📜 api.js           # TMDB API 호출 함수
 ┣ 📜 App.js             # 메인 애플리케이션 파일
 ┗ 📜 index.js           # React DOM 렌더링
