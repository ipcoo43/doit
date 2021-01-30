# 외장 모듈 사용 하기
- 폴더를 생성하고 npm init 한다
  - npm init는 프로젝트가 시작 할 때 한번 실행 한다
  - 생성될때 프로젝트 이름 입력할때 모듈 이름을 쓰면 에러가 발생하므로 export_sample 처럼 _sample를 입력 한다
- node_modules 폴더 가 만들어 진다
- 프로젝트 폴더를 복사 할 경우 : npm install
- package.json 안에 들어 있는 패키지 정보를 이용해 패키지 일과 설치
# nconf module
- 패키지에 정보 추가 : npm install nconf --save
- 패키지에 삭제 : npm uninstall nconf
- ode_modules 폴더에 nconf 폴더가 생성된다.
- nconf : 시스템 환경 변수에 접근 할 수 있다.
```
const nconf = require('nconf')
nconf.env()
console.log('OS 환경변수의 값 : ' + nconf.get('OS'))
```

# 내장 모듈 사용하기
- 노드 설치시 미리 제공하는 모듈 이다.
- http://nodejs.org/api 사이트에서 확인 가능 하다.
- require 함수를 이용해 불러온 후 사용 한다.
## os module  : 시스템 정보를 알려 준다
- hostname() : 운영체제의 호스트 이름을 알려 준다
- totalmem() : 시스템 전체 메모리 용량을 알려 준다
- freemem() : 시스템에서 사용 가능한 메모리 용량을 알려 준다
- cpus() : cpu 정보를 알려 준다
- networkInterfaces() : 네트워크 인터페이스 정보를 담은 배열 객체를 반환 한다.
```
const os = require('os');
console.log('시스템의 hostname :' + os.hostname())
console.log('시스템의 메모리 : ' + os.freemem(), os.totalmem())
console.log('시스템의 CPU 정보 : ' + os.cpus())
console.log('시스템의 네트워크 인터페이스 정보 :' + os.networkInterfaces())
```
## path module : 파일을 다룰 때 파일 패스에서 파일 이름을 구별하는 등의 기능 제공
- join() : 여러 개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어 준다.
- dirname() : 파일 패스에서 디렉터리 이름을 반환 한다.
- basename() : 파일 패스에서 파일의 확자장를 제외한 이름을 반환 한다.
- extname() : 파일 패스에서 파일의 확장자를 반환 한다.

```
const path = require('path')
```
- 디렉터리 이름 합치기
```
const directories = ['users','mike','docs']
const docsDirectory = directories.join(path.sep)
console.log('문서 디렉터리 : ' + docsDirectory)
```
- 디렉터리 이름과 파일 이름 합치기
```
const curPath = path.join('/Users/mike','notepad.exe')
console.log('파일 패스 : ' + curPath)
```
- 패스에서 디렉토리, 파일 이름, 확장자 구별하기
```
const filename = 'C:\\Users\\mike\\notepad.exe'
const dirname = path.dirname(filename)
console.log('dirname : ' + dirname)
const basename = path.basename(filename)
console.log('basename : ' + basename)
const extname = path.extname(filename)
console.log('extname : ' + extname)
```