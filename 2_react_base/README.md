# 1. 노드 리액트 기초

# 2. Node.js 와 Express 다운로드
yarn add express

index.js 추가

packge.json에 명령어 추가
"scripts": {
    "start":"node index.js"
  },

yarn start 
# 3. 몽고 DB 연결
https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_south_korea_search_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986522&gclid=Cj0KCQiA0MD_BRCTARIsADXoopbbGawjaatWOlEmvpg3oVHTbm69-sMmb9QdtH4RW73MpWOUdC-OtY4aApTAEALw_wcB

1. 몽고 DB 사이트 회원가입
2. 몽고DB 클러스터 생성
https://backend-intro.vlpt.us/2/01.html

3. mongoose 설치/ 연결

# 4. 회원가입 기능
1. 서버 클라이언트 통신의 이해
2. bodyparse 이용
yarn body-parser
3. 포스트맨 사용 로그인 기능 시험해보기


# 5. nodemon 
소스를 변경할 때 그걸 감지해서 자동으로 서버를 재 시작해주는 tool
1. nodemon 다운로드 
yarn add nodemon

2. packge.json에 명령어 추가
"scripts": {
    "start": "node index.js",
    "dev":"nodemon index.js"
  },