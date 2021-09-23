import React, { useReducer, useRef, useState } from "react";

const initstate = { name: "mei", sex: "male", age: 20 };
function init(props) {
  return { name: props.name, age: props.age, show: props.show };
}
function Showinit(props) {
  return <div>点击开始</div>;
}
function Dontshowinit(props) {
  return (
    <div>
      {props.name}
      {props.age}
      <div onClick={props.onClick}>开始</div>
    </div>
  );
}
function WantShowInit(props) {
  if (props.show) {
    return <Showinit />;
  }
  return (
    <Dontshowinit name={props.name} age={props.age} onClick={props.onClick} />
  );
}

function Name(props) {
  const reduce = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, name: state.name + 1, show: false };
      case "addage":
        return { ...state, age: state.age + 1, show: false };
    }
  };

  const [state, dispatch] = useReducer(reduce, props.initstate, init);
  return (
    <div>
      <WantShowInit
        show={props.show}
        name={state.name}
        age={state.age}
        onClick={() => {
          dispatch({ type: "add" });
        }}
      />

      {/* <div
        onClick={() => {
          dispatch({ type: "addage" });
        }}
      >
        修改年龄
      </div> */}
    </div>
  );
}

export default Name;
