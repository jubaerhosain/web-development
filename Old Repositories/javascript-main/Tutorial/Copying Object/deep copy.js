// if you do not use Dates, functions, undefined, regExp or Infinity within your object, 
// a very simple one liner is JSON.parse(JSON.stringify(object)):

const a = {
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(),  // stringified
    undef: undefined,  // lost
    inf: Infinity,  // forced to 'null'
    getName() {
        return this.string;
    }
  }
  console.log(a);
  console.log(typeof a.date);  // Date object
  const clone = JSON.parse(JSON.stringify(a));
  console.log(clone);
  console.log(typeof clone.date);  // result of .toISOString()