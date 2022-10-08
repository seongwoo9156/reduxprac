// Action Value

const add_list = "add_list";

// Action Creator
export const addlist = () => {
  return {
    type: add_list,
  };
};

// 초기 상태값
const initialState = [
  {
    id: 1,
    title: "안녕난리덕스야",
  },
  {
    id: 2,
    title: "응 그래 난 리액트야",
  },
];

// 리듀서
const lists = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default lists;
