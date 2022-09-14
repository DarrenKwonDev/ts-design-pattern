class Singleton {
  private static instance: Singleton;

  // constructor를 private으로 선언해야 외부에서 생성 불가
  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();

console.log(inst1 === inst2); // single works!
