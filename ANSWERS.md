- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components enable us to have state in our components. Functional components before the introduction of hooks did not have the ability to store state in the components

- [ ] Name three lifecycle methods and their purposes.

* Component did mount:
  This is a method that runs if and only if the component gets rendered on the DOM.

* Component did update:
  This is a method that runs when there is a change in the DOM or an events that could trigger a render of the DOM.

* Constructor:
  This is a method that runt before a component is mounted
  
- [ ] What is the purpose of a custom hook?

If a number of our components happen to do the same function, a custom hook allows us to reuse that funtion in any component that requires that logic

- [ ] Why is it important to test our apps?

Testing our apps provides a way for us to check for bugs and make our apps much safer