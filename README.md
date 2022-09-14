# ts-design-pattern

다들 보는 java로 쓰여진 디자인 패턴 책을 그냥 하나 사서 보는게 더 체계 있을 듯... 코드 짜면서 흔히 생각해볼만한 패턴들을 정리하는 의의 정도로 생각하자.

## creational Pattern : 객체를 생성하는 패턴

- [ ] factory method
  - 객체를 생성하는 factory
- [ ] abstract factory
  - factory의 interface정의 후 여러 factory를 운영
- [ ] builder
  - constructor에 Long Parameter List 문제가 발생하는 복잡한 객체의 경우 단계적으로 객체를 생성하는 패턴
  - director class is optional
- [ ] object cloning
  - 객체 clone은 해당 객체의 책임(responsibility!). 객체의 비공개 메서드 등 외부에서는 완전한 clone이 불가하며 비효율적
  - 이건 패턴이라기보다는 그냥 객체 설계의 팁에 가까운 듯
- [ ] singleton
  - 일반적으로 안티패턴이다. 싱글턴을 여기저기서 사용해서 어디에서 유인한 문제인지 코드의 실행 순서에 따라 디버깅이 어려워짐.
  - service, repository layer 생성시 singleton 객체로 만드는게 일반적.
  - 예전에 node로 알림 서버 만들 때 eventEmitter를 extends한 객체의 singleton 보장을 못해서 고생을 한 기억이 있다.
  - node 런타임에선 타 모듈을 불러올 때 자동으로 key값을 매겨 별 다른 짓을 안해도 singleton을 자연스레 사용하게 되지만 constructor를 private으로 제한하면 더 안전하게 사용할 수 있다.

## structural patterns

- [ ] adapter
  - 기존 interface를 유지하면서 다른 interface로 변환할 때. 이미 interface를 활용하여 존재하는 코드가 있을 때 해당 interface의 implementation spec을 충족시키기 위해 사용. 말 그대로 adapter. 한 포맷에서 다른 포맷으로 변환하는 과정을 상상해보자.
  - 결국 호환성의 문제 해결임. 코드량이 적다면 그냥 코드를 바꾸는 선택도 나쁘지 않을 듯

https://refactoring.guru/
