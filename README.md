# 파일 구조

- bin: will contain all executable .js files
- lib: contains other files which files of bin might use

# package.json

- bin
  - key of this field is command
  - value is file to execute with that command which is
- main
  - local import해서 쓰는 경우만 있으면 됨.
  - Adding main makes our module both locally and globally usable.
  - tells node that when somebody is trying to import this module locally like
  - If main is missing, then node by default will try to pull index.js file from module’s root directory
- preferGlobal
  - local import용으로도 쓴다면 셋팅할 필요 없음(default: false)
  - true로 하고 local import해도 기능상 오작동이 생기는것은 아니며 경고문구가 뜸.

# npm repo에 배포되지 않은 패키지 설치하는 법

- npm install -g {local_dir_path}
  - ex) `npm install -g ./`

# 주요 라이브러리

- Commander.js
  - node module which will help us parse process.argv in much easy and better way while
  - parses process.argv and gives very easy interface to work with.
- Inquirer.js
  - will help us design interactive CLI application.
- colors
  - add some colors to console output
- pad
  - output 메시지에 간격 추가

# 참고

- https://medium.com/jspoint/creating-cli-executable-global-npm-module-5ef734febe32
- https://medium.com/jspoint/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac
