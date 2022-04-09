import { createContext, useState } from "react";

/*
    You can see the context as two pieces. The actaul storage thing itself, and this is the literal context.
    What we pass to it is the 'default' value. Not neccessarily the inital value.


*/

// as the actualy value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// then there's going to be a provider, which we export both
// A provider is the actual component, this userproivder is this
// literal functional component. And what we do is we receive children
// and what we need to do is return UserContext.Provider

// For every context that gets built there is a .Provider. And the
// .Provider is the component that will wrap around any other components that
// need access to the values inside.

// inside the UserContext.Provider we are just going to render the children
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*


    Let's say you have app, for example, app being our app component.

    We're going to wrap this in the UserProvider component.

    ```js

        <UserProvider>
            <app />
        </UserProvider>

    ```

    and then inside of app, of course will now be the children. So we want to take this
    children and then put it around our user context provider.

    This is really just some kind of alias component that allows us to use this UserContext app rpovider and
    wrap the children.

    So what else do we need to pass to this provider?

    Well, this provider is where its going to reviece the value, which is going to hold the actaul contexual values.


    ```js

        export const UserProvider = ({ children }) => {
            return <UserContext.Provider value={}>{children}</UserContext.Provider>
        }
    ```

    So this is where it might get a little confusing.. but follow along with me now.

    1. What we know is that we want to store a user object.

     ```js

     import { createContext, useState } from "react";
     
     
                                ...

        export const UserProvider = ({ children }) => {
            const [currentUser, setCurrentUser] = useState(null);
            const value = 
            return <UserContext.Provider value={}>{children}</UserContext.Provider>
        }
    ```

    and what we can do becase as a componoent is leverage all of our hooks. That allow us to store things.
    So we want to store a user state. Let's just use the useState hook.

    2. And here I'm going to say that curent gets both the actual value, but also the setter function. And I want to be able
    to initalize this value as null.

    3. Next what I want to do is actually generate the value that I'm going to pass in here. Meaning pass to value={}.
    This is going to be an object that passes the two values that are import, which is both the currentUser, as well as
    setCurrentUser. 

    So both the setter function and the actaul value. So what you can think about with this provider. Is that this provider
    is essentailly allowing any of its child components to acess the values inside of its useState.

    So we're just doing useState as we normally do. We have a value for that useState and we have the setter for that useState.
    (Which is setCurrentUser).

    But I want to be able to call this setter and get the value anywhere inside of the component tree. That is nested within this actaul
    Provider value.

    So what we do is we pass this value into the value parameter like we would do with props.
    ```js

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

```

        Now we go back to this context abd renenber we;re trying to instantiate the inital point of this. i.e.(value={value})

        So I know that this value you can see as if. "Well you're like Yihua, didn't we pass in an inital null value into the current user. "


        We did.

        But this is for state, this is not neccessarily for the context. The context needs an inital value as well. 
        We just want to build the base empty state of what this is.


        ```js

        /* as the actaul value you want to access 
    
        export const UserContext = createContext({
            currentUser: null,
            setCurrentUser: () => null
        })


        ```

        So currentUser being an actauly object. Usually, the empty state of an object should be null because
        you want a null check to define whether or not you have a user existing object or no object.

        An empty object is still going to add value as true.

        So we know that there's no context when the currentUser value is null.

        

        And then what's the default value of the setter function? Well this is actaully a function that does nothing. we set it to
        null.

        Its the most basic type of blank function that you cna think of, but this is all we need.


        Essentailly, what's happening is we are going to create this user provider and we want to wrap it around the portion
        of our code that matters.


        So I'm going to go into index.js and I'm going to wrap the entire App component

        Next we import our UserProvider, and then we wrap our app inside of our UserProvider


        ```js

        render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

```

            So now any component inside of this user provider nested deep within the app can access the context value inside of the
            Provider itself.


            So the UserProvider is soley mean to tell us, Oh, inside of my component tree, which components have access to my context?

            Its going to be any components inside of the Provider.

            Anything outside will not be able to access the context. So here inside of app, we know that we want our sign in form to be able
            to access this context.

            Because, whenever the user sign in, we want to actauly take this user objec tan d we want to store it inside of the context.
            So to do this we need two things. 


            1. First we need the UseContext hook 


            2. Bring in i.e. import { UserContext } object

            this object is going to give us back any value that is passed in as the value.
            Which is the currentUser of useState as well as the setter function setCurrentUser.

            So this value, we've instantiate it as an object. So we'll get this exact object
            back with whatever the curretUser value inside of the UserProvier useState is currently
            set at.


            To use this, what we need to do is. 


*/
