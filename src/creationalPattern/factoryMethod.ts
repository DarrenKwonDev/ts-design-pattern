interface Creator {
  factoryMethod(): Product; // factory method
  someOperation(): string;
}

interface Product {
  operation(): string;
}

class ConcreteCreator1 implements Creator {
  factoryMethod(): Product {
    // do something logical
    return new ConcreteProduct1();
  }
  someOperation(): string {
    return `do some business logic`;
  }
}

class ConcreteCreator2 implements Creator {
  factoryMethod(): Product {
    // do something logical
    return new ConcreteProduct2();
  }
  someOperation(): string {
    throw new Error("Method not implemented.");
  }
}

class ConcreteProduct1 implements Product {
  operation(): string {
    return `I'm ConcreteProduct1`;
  }
}
class ConcreteProduct2 implements Product {
  operation(): string {
    return `I'm ConcreteProduct2`;
  }
}

type someBusinessLogic = (creator: Creator) => string;

const businessLogic: someBusinessLogic = (creator) => {
  const product = creator.factoryMethod();
  return product.operation();
};
