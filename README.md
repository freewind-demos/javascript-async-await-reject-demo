JavaScript "async/await" Reject/Throw/Catch Demo
================================================

使用`async/await`以后，居然还可以用`throw`，还可以`catch`。
我原来还以为用不了了，看来代码转换做得很彻底。

据说，`throw`会被转换成`new Promise().reject()`，需要写个Demo (TODO)

但是需要注意：

1. 如果在一个Promise代码块中，应该使用`reject`，而不能`throw`。因为在这种情况下，throw不会被转换，所以就成了一个“未处理异常”
2. 在其它的`async function`中，就可以使用`throw`

总结起来，差不多就是，如果能拿到`reject`，就用`reject`；否则就`throw`

```
npm install
npm run demo
```

It will print:

```
--------- catch (1) ---------
string
Err(1): too easy!
-------- catch (2) --------
Err(2): Error: Can't add: too easy!
Error: Can't add: too easy!
    at run (/Users/freewind/workspace/javascript-async-await-reject-demo/demo.js:21:15)
    at <anonymous>

```
