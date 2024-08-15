let o = {
  a: 4, b: 4
};

update = ({a, b}) => {
  o.a = a;
  o.b = b;
}

console.log(o);


update({...o, a: 10});
console.log(o);

update({a: 10});
console.log(o);

update({...o, b: 10});
console.log(o);
