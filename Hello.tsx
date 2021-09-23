import React, { useReducer } from 'react';

// const initstate = { count: 0 };
const reduce = (state, action) => {
  switch (action.type) {
    case 'add':
      return { count: Number(state.count) + 1 };
  }
};
function init(initcount) {
  return { count: initcount[0] };
}

function Hello(props) {
  console.log(props.name);
  const [state, dispatch] = useReducer(reduce, props.initstate, init);
  return (
    <div
      onClick={() => {
        dispatch({ type: 'add' });
      }}
    >
      {state.count}
    </div>
  );
}

export default Hello;
