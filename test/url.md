- 노드의 기본 기능 알아보기
- 주소 문자열과 요청 파라미터 다루기
  - 일반 문자열을 Url 객체로 만들거나 Url 객체를 일반 문자열로 변환
  - 주소 문자열
    - https://www.google.co.kr/?gws_rd=ssl#newwindow=1&q=actor
  - url 모듈
    - protocol : https:
    - host : www.google.co.kr
    - query : gws_rd=ssl#newwindow=1&q=actor
  - https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcon
    - 요청 패스 : search.naver.com/search.naver
    - 요청 파라미터 : ?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=popcon
  - parse와 format 사용
    - parse() : 주소 문자열을 파싱하여 Url 객체를 만들어 준다
    - format() : Url 객체를 주소 문자열로 변환 한다.