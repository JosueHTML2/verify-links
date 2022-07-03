<p style="text-align: center;">Links verifier</p>
 It is a package that verifys links

# How to use it

<p styles="text-align: center;">Examples</p>

<p styles="text-align: center;">Fecthing one website</p>


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

<p styles="text-align: center;">More than one</p>

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

<p styles="text-align: center;">Classes</p>

<p styles="text-align: center;"><strong>Methods</strong></p>

- check
    - One parameter options
        options - object with two propeties
            options#link - should be string, the link to the website.
            options#startsWith - should be a string, the [protocol](https://developer.mozilla.org/en-US/docs/Glossary/Protocol)
    - Returns an object.

<p styles="text-align: center;"><strong>Properties</strong></p>

- links -> An array of objects. Filled by the links that were fetched.



<p style="text-align:center;">Releases</p>

<p style="color: red">1.0.1 -> **Adding readme file.**</p>

<p style="color: red">1.0.2 -> **Fixing typings issues.**</p>

<p style="color: red">1.0.3 -> **Adding *url* to the result of the function checkLink#check. And adding options to the method check not to the constructor of the class.**</p> 