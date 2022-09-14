interface Factory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

interface ProductA {
  usefulFunctionA(): string;
}

interface ProductB {
  usefulFunctionB(): string;
}

class ConcreteFactory1 implements Factory {
  createProductA(): ProductA {
    throw new Error("Method not implemented.");
  }
  createProductB(): ProductB {
    throw new Error("Method not implemented.");
  }
}

class ConcreteFactory2 implements Factory {
  createProductA(): ProductA {
    return new ConcreteProductA2();
  }
  createProductB(): ProductB {
    throw new Error("Method not implemented.");
  }
}

class ConcreteProductA1 implements ProductA {
  usefulFunctionA(): string {
    throw new Error("Method not implemented.");
  }
}

class ConcreteProductB1 implements ProductB {
  usefulFunctionB(): string {
    throw new Error("Method not implemented.");
  }
}

class ConcreteProductA2 implements ProductA {
  usefulFunctionA(): string {
    return `I'm ConcreteProductA2`;
  }
}

class concreteProductB2 implements ProductB {
  usefulFunctionB(): string {
    throw new Error("Method not implemented.");
  }
}
