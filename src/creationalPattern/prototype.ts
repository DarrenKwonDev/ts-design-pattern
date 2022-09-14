class Prototype {
  primitive: any;
  reference: object;
  circularReference?: ComponentWithBackReference;

  constructor(
    primitive: any,
    reference: object,
    circularReference?: ComponentWithBackReference
  ) {
    this.primitive = primitive;
    this.reference = reference;
    this.circularReference = circularReference;
  }

  clone(): this {
    const clone = Object.assign({}, this);

    clone.reference = Object.assign({}, this.reference);

    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };

    return clone;
  }
}

class ComponentWithBackReference {
  prototype: Prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

const p1 = new Prototype(1, { a: 1 });
p1.circularReference = new ComponentWithBackReference(p1);

const p2 = p1.clone();

console.log(
  "is copied?",
  Boolean(
    (p2.circularReference!.prototype.primitive =
      p1.circularReference!.prototype.primitive) &&
      p2.reference !== p1.reference &&
      p1.primitive == p2.primitive
  )
);
