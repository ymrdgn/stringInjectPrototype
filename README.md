### `String Inject Prototype`

A Javascript prototype that takes dynamic fields written in the template as parameters and calculates with these parameters.

### `Examples`

```javascript
  'Hello {{ name }}'.inject({ name: 'Yusuf' });

   return 'Hello Yusuf'
   
   
   'Total: {{ a }} + {{ b }} = {{ sum(a, b) }}'.inject({ a: 1, b: 2, sum: (a, b) => a + b });

    return 'Total: 1 + 2 = 3'
```


### `Installation and Setup Instructions`

Clone down this repository. You will need node installed on your machine.


##### To Start Script:

```node prototype.js```
