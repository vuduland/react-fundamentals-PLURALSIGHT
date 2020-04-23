# Reducer Defined

`(previousState, action) => newState`

---

> Hook takes in the previous state as the first param, then an action function to change the state in some way, then outputs the new state.

---

# useReducer hook Syntax

```js
import React, { useReducer } from 'react';

const FunctionalComponent = () => {
  const [currentState, stateModifier] = useReducer((state, action) => action, []);
};
```

> \*where **state** is the **current state** and **action** is a function that changes it

---

# with _dispatch_ and _action_ keywords:

```js
import React, { useReducer } from 'react';

function stateReducer(state, action) {
    switch(action.type) {
        case "setState": {
            return action.data;
        }
        default:
            return state;
    }

};

const FunctionalComponent = () => {
    const [currentState, stateModifier] =
    useReducer(,[]);

};
```

---
