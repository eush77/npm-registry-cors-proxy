# npm-registry-cors-proxy

The [npm registry](https://npmjs.org/) dishes up extensive JSON info about its modules, but it doesn't support
[CORS](http://enable-cors.org/). Enter the proxy!

## jQuery/Zepto Example Usage

```js
$(function() {
  var url = "http://npm-registry.herokuapp.com/colors";
  return $.getJSON(url, function(module) {
    console.log(module);
  });
});
```

Check out a [sample on codepen.io](http://cdpn.io/CJnHE).