**useEffect** replaces, and is equivalent to the combination of <em>componentWill-</em> and <em>componentDid-<em> Unmount. **useEffect** introduces **side effects**.

We usually like <em>functional components</em> because they do not have **side-effects**. This means that, given the same input, a component will return the same output everytime. This type of component is referred to as a <em>Pure component</em>.

**useEffect**, when called, references and triggers a function and then this function triggers a different function, a.k.a. a side effect.

The best usage of the **useEffect** hook is when Adding and Removing DOM event listeners. e.g. we add a listener to a DOM element and then, once the **functional component** goes away (finishes), we want to execute another **functional component**, i.e. the <em>side effect</em>, in order to preclude any potential resource leaks in the application.
