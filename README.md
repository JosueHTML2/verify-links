# Links verifier

## It is a package that verifys links

# How to use it

**Examples**

**Fecthing one website**


```js

const { checkLink } = require("./index.js"),
    checker = new checkLink({
        link: "www.google.com",
        startsWith: "https://" // Default is https.
    });

checker.check().then(result => {
    console.log(result);
});
```

**More than one**

```js 
(async () => {
   await checker.check({
        link: "www.google.com",
        startsWith: "http://"
    }).then(result => {
        console.log(result);
    });
    
    await checker.check({
        link: "www.youtube.com",
        startsWith: "https://"
    }).then(result => {
        console.log(result);
    });
    
    console.log(checker.links);
})()

```


**Methods**

> checkLink#check: One parameter options is object with two propeties.
>> options#link - should be string, the link to the website.
>> options#startsWith - should be a string, the [protocol](https://developer.mozilla.org/en-US/docs/Glossary/Protocol)
> Returns an object.

**Properties**

> links -> An array of objects. Filled by the links that were fetched.

**Releases**

> 1.0.1 -> **Adding readme file.**

> 1.0.2 -> **Fixing typings issues.**

> 1.0.3 -> **Adding *url* to the result of the function checkLink#check. And adding options to the method check not to the constructor of the class.**