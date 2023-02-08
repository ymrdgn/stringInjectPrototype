String.prototype.inject = function (params) {
  return this.replace(/{{ *(.+?) *}}/g, (_, name) => {
    let value = params;
    try {
      with (params) {
        value = eval(name);
      }
    } catch (e) {
      value = params[name];
    }
    return value === undefined ? name : value;
  });
};

const text = 'Total: {{ a }} + {{ b }} = {{ sum(a, b) }}'.inject({ a: 1, b: 2, sum: (a, b) => a + b });

console.log(text);