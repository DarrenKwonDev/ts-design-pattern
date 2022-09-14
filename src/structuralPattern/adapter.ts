class Target {
  request(): string {
    return "default req";
  }
}

class Adaptee {
  specificRequest(): string {
    return "specific req";
  }
}

// Target 형식을 Adaptee 형식으로 변환하는 Adapter
class FromAdapteeToTargetAdapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request(): string {
    return this.adaptee.specificRequest();
  }
}

function useCase(target: Target) {
  console.log(target.request());
}

useCase(new FromAdapteeToTargetAdapter(new Adaptee()));
