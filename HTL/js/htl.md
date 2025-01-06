# JavaScript have to learn

- [module export import](https://ko.javascript.info/import-export)

- [algorithm : combination with repetition](https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

- ### algorithm : pibonacci

```function solution(n) {
  let a = 1, b = 2;
  for(let i = 3; i <= n; i++) {
      [a, b] = [b, a];
      b = (a + b) % 1234567;
  }
  return n == 1 ? 1 : b;
  }
```
