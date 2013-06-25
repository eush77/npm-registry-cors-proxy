# npm-registry-cors-proxy

The [npm registry](https://npmjs.org/) dishes up extensive JSON info about its modules, but it doesn't support
[CORS](http://enable-cors.org/). Enter the proxy!

- http://npm-registry-cors-proxy.herouapp.com/request
- http://npm-registry-cors-proxy.herouapp.com/minimatch
- http://npm-registry-cors-proxy.herouapp.com/cors

## jQuery/Zepto Example Usage

```js
$(function() {
  var url = "http://npm-registry-cors-proxy.herokuapp.com/colors";
  return $.getJSON(url, function(module) {
    console.log(module);
  });
});
```

Check out a [sample on codepen.io](http://cdpn.io/CJnHE).