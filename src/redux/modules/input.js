// Action Value

const add_input = "add_input";

// Action Creator
export const addinput = (val) => {
  return {
    type: add_input,
  };
};

// 초기 상태값
const initialinput = [
  {
    title: "",
  },
];

// 리듀서
const inputs = (state = initialinput, action) => {
  switch (action.type) {
    case add_input:
      return {
        title: action.val,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default inputs;
