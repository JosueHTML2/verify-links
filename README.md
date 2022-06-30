# verify-links
 It is a package that verifys links

# How to use it

- Example

```js

const { checkLink } = require("./index.js"),
    checker = new checkLink({
        link: "www.google.com",
        startsWith: "https://" // Default is http.
    });

checker.check().then(result => {
    console.log(result);
});
```

- Releases

- 1.0.1 - **Adding readme file.**

- 1.0.2 - **Fixing typings issues.**