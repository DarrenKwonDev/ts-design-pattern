interface Builder {
  producePartA(): this;
  producePartB(): this;
  producePartC(): this;
}

class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

class ConcreteBuilder1 implements Builder {
  private product!: Product1;

  reset() {
    this.product = new Product1();
  }

  constructor() {
    this.reset();
  }

  producePartA() {
    this.product.parts.push("PartA1");
    return this;
  }
  producePartB() {
    this.product.parts.push("PartB1");
    return this;
  }
  producePartC() {
    this.product.parts.push("PartC1");
    return this;
  }

  getProduct(): Product1 {
    const result = this.product;
    this.reset(); // reset the builder to build another product
    return result;
  }
}

class Director {
  private builder!: Builder;

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  buildMinimalViableProduct() {
    this.builder.producePartA();
  }

  buildFullFeaturedProduct() {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

// use-case
const director = new Director();
const builder = new ConcreteBuilder1();
director.setBuilder(builder);

director.buildMinimalViableProduct();
builder.getProduct().listParts(); // reset

director.buildFullFeaturedProduct();
builder.getProduct().listParts(); // reset

builder.producePartA().producePartB(); // custom
builder.getProduct().listParts(); // reset
