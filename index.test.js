const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: 'foo', bar: 'bar', baz: 'baz' };
    const actual = utils.trimProperties(input);
    expect(actual).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    utils.trimPropertiesMutation(input);
    expect(input).toEqual(expected);
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    utils.trimPropertiesMutation(input);
    expect(input).toBe(input);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const integerObjects = [
      { integer: 1 }, 
      { integer: -11 }, 
      { integer: 2 }, 
      { integer: -5 }, 
    ]
    const largest = utils.findLargestInteger(integerObjects);
    expect(largest).toEqual(2);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
    expect(counter.countDown()).toEqual(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let i = 10;
    while (i-- >= 0) {
      counter.countDown();
    }
    expect(counter.countDown()).toEqual(0);
  });
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let i = 2;
    while (--i > 0){
      seasons.next();
    }
    expect(seasons.next()).toEqual("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let i = 3;
    while (--i > 0){
      seasons.next();
    }
    expect(seasons.next()).toEqual("winter");
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let i = 4;
    while (--i > 0){
      seasons.next();
    }
    expect(seasons.next()).toEqual("spring");
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let i = 5;
    while (--i > 0){
      seasons.next();
    }
    expect(seasons.next()).toEqual("summer");
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let i = 40;
    while (--i > 0){
      seasons.next();
    }
    expect(seasons.next()).toEqual("spring");
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(20)).toEqual(20)
    expect(focus.drive(40)).toEqual(60);
  })
  test('[16] driving the car uses gas', () => {
    expect(focus.drive(30)).toEqual(30);
    expect(focus.tank).toEqual(19);
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(660)
    expect(focus.tank).toEqual(0);
    expect(focus.odometer).toEqual(600);
    expect(focus.refuel(20)).toEqual(20);
    expect(focus.drive(600)).toEqual(1200);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(100)).toEqual(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const hopefullyEven = await utils.isEvenNumberAsync(20);
    expect(hopefullyEven).toEqual(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const hopefullyOdd = await utils.isEvenNumberAsync(21);
    expect(hopefullyOdd).toBe(false);
  })
  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    const gibberish = await utils.isEvenNumberAsync('trodgor');
    expect(gibberish).toEqual('number must be a number')
  })
  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    const naan = await utils.isEvenNumberAsync(isNaN);
    expect(naan).toEqual('number must be a number')
  })
})
