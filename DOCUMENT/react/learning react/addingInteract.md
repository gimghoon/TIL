### state

- state를 설정하면 리렌더링이 유발되지만, 이미 실행 중인 코드에서는 변경되지 않습니다

### react가 동작하는 원리

- 사용자는 state를 활용하여 값을 기억시키고 set함수를 통해 값을 변경시킨다
- react는 세가지 단계를 거친다
  - trigger: -초기 렌더링에 의해
    - set함수호출(state업데이트)에 의해
  - render: setState는 비동기나 이벤트 핸들러에 의해 호출되면 업데이트 요청이 updateQueue에 추가됩니다.
    렌더링 사이클중 updateQUeue를 통해 비동기적으로 처리된다.vitual dom을 생성한다.

    - 렌더링이 완료되면 이떄 batch처리 방식으로 한꺼번에 계산을 한다. batch에서는 setState함수호출을 묶어서 한번에 계산하고 업데이터 함수 (콜백함수)를 쓰지 않으면 이전의 상태를 참조하지 않아서 덮어씌우게 된다.
    - batch 가 완료되면 diffing을 통해 virtual dom과 real dom을 비교하여 state의 변경점을 찾는다.

  - commit
    -Commit 단계에서는 Virtual DOM의 변경 내용을 실제 DOM에 반영한다.
  - browser paint
    - parsing
    - render tree Construction
    - layout
      -Paint
    - compositing
    * 일단 화면을 다시 그려서 변경된것을 사용자에게 보여주기 위해서 하는거다.
