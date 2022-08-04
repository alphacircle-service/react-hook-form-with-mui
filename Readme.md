## react-hook-form 과 mui를 같이 사용하는 데모 프로젝트

##### mui의 uncontrolled component 들을 react-hook-form의 controller를 사용해 form 형태로 다루기 위한 예시를 담은 데모 프로젝트

#

#### 이 프로젝트에서 사용하는 react-hook-form api

- useForm : form을 쉽게 다루기 위한 custom hook,

- Control : React Hook Form 안에 컴포넌트를 등록하기 위한 method를 가지고 있는 객체

- Controller : React-Select, AntD, MUI 같은 외부 controlled component 를 form 과 같이 사용하기 위한 wrapper component

- useController : Controller를 작동시키는 custom hook. Controller와 같은 props와 method를 공유한다.

#### Component

- FormInput : Controller + TextField
- TagInputController : Controller + Autocomplete
- TagInputUseController : useController + Autocomplete

#### 참고

- react-hook-form official : https://react-hook-form.com
- mui official : https://mui.com
