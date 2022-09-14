# ts-design-pattern

## creational Pattern

- [ ] factory method
  - 객체를 생성하는 factory
- [ ] abstract factory
  - factory의 interface정의 후 여러 factory를 운영
- [ ] builder
  - constructor에 Long Parameter List 문제가 발생하는 복잡한 객체의 경우 단계적으로 객체를 생성하는 패턴
  - director class is optional
- [ ] object cloning
  - 객체 clone은 해당 객체의 책임. 객체의 비공개 메서드 등 외부에서는 완전한 clone이 불가하며 비효율적
- [ ] singleton
  - 일반적으로 안티패턴이다. 싱글턴을 여기저기서 사용해서 어디에서 유인한 문제인지 코드의 실행 순서에 따라 디버깅이 어려워짐.
  - service, repository layer 생성시 singleton 객체로 만드는게 일반적.
  - 예전에 node로 알림 서버 만들 때 eventEmitter를 extends한 객체의 singleton 보장을 못해서 고생을 한 기억이 있다.
  - node 런타임에선 타 모듈을 불러올 때 자동으로 key값을 매겨 별 다른 짓을 안해도 singleton을 자연스레 사용하게 되지만 constructor를 private으로 제한하면 더 안전하게 사용할 수 있다.

https://refactoring.guru/
