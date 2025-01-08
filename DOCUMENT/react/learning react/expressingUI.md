### export import

- named export와 default export 의 분기점

### root component

- 역할
- 랜더링 되는 방식
- 파일기반으로 라우팅하는 프레임워크일 경우 어떤 특징이 있는지

### props를 spread를 전달할떄

- 똑같은 이름과 똑같은 내용을 props로 전달을 반복하기 싫어서

### children props

- component가 중첩되었을떄

- 패널, 그리드 등의 시각적 래퍼에 종종 children prop를 사용합니다.

### 조건부 렌더링

    - jsx 문법에 익숙해지기

### 삼항연산자와 if

    - 렌더링 영역에 조건문으로 정보를 분산시키는것은 좋지않다
    - 렌더링 영역 전에 변수에 정보를 그룹화하고 렌더링영역은 정보만 렌더링만하면 가독성이 좋다

### 리스트 렌더링

- index: key 구분을 못함
- math.random: 렌더링마다 새로운 key값을 할당 => 새로운 dom을 생성함
- uuid 렌더링 도중에만 key값을 할당안하면 ㄱㅊ
- uuid 올바른 활용

```
import { v4 as uuidv4 } from 'uuid';

const items = [
  { id: uuidv4(), name: 'Apple' },
  { id: uuidv4(), name: 'Banana' },
  { id: uuidv4(), name: 'Cherry' },
];

function App() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li> // 안정적인 key 사용
      ))}
    </ul>
  );
}
```

- react에서 key와 id의 차이점?

### 컴포넌트의 순수성

- 컴포넌트의 순서에 따라 결과가달라지면 안됨
- strict mode로 순수성 검사: 두번 호출해도 결과 동일:
- 지키는 방법
  - 자신의 일에 집중합니다. 렌더링전에 존재했던 객체나 변수를 변경하지 않아야 합니다.
  - 같은 입력, 같은 결과물. 입력이 같을 경우, 컴포넌트는 항상 같은 JSX를 반환해야 합니다.
