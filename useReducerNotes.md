# Reducer Defined

<code>(previousState, action) => newState</code>

<p>Hook takes in the previous state as the first param, then an action function to change the state in some way, then outputs the new state.</p>
</hr>
<h1>useReducer Syntax</h1>
<code>
import React, { useReducer } from 'react';

const FunctionalComponent = () => {
const [currentState, stateModifier] = useReducer((state, action) => action, []);

}
</code>

**where <em>state</em> is the <em>currentState</em> and <em>action</em> is a function that changes it**

# with _dispatch_ and _action_ keywords:

```js
import React, { useReducer } from 'react';

function stateReducer(state, action) {


}

const FunctionalComponent = () => {
const [currentState, stateModifier] = useReducer(, []);

}
```
