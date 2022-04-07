# Asynchronous Communication in JavaScript

## Promise(s)

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(psots))
  .catch((error) => console.log(error));
```

## Async / Await

```js
const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    const secondUser = users[0];
    console.log(secondUser);
    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
    );
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (err) {
    console.log("there was an error");
  }
};
```

## useEffect

### Yihua's code

```js
useEffect(async () => {
  const response = await getRedirectResult(auth);
  console.log(response);
}, []);
```

refer to './logs/localhost-1649374278751.log'

query = "Instead, write the async function inside your effect and call it immediately"
https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret

### Here's my refactor

```js
useEffect(() => {
  async function getResponse() {
    const response = await getRedirectResult(auth);
    console.log(response);
  }
  getResponse();
});
```

Longer term we'll discourage this pattern because it encourages race conditions. Such as — anything could happen between your call starts and ends, and you could have gotten new props. Instead, we'll recommend Suspense for data fetching which will look more like

You can read more about experimental suspense here.

https://17.reactjs.org/docs/concurrent-mode-suspense.html
https://reactjs.org/docs/react-api.html#reactsuspense
