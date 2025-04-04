import { createSlice } from '@reduxjs/toolkit'

const valTostore = 3;

export const arraySlice = createSlice({
  name: 'myArray',
  initialState: {
    value: [5, 5, 4],
  },
  reducers: {
    addElements: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(valTostore)
    },
    removeElements: (state) => {
      state.value.pop()
    },
    addMultiElems: (state, action) => {
        for (let index = 0; index < action.payload; index++) {
            state.value.push(valTostore);
         }
    //   state.value += action.payload
    },
  },
})

export const { addElements, removeElements, addMultiElems } = arraySlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(addMultiElems(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.myArray.value)`
export const selectArr = (state) => state.myArray
// below doesn't work
// export const selectArr = (state) => state.myArray.value 


export default arraySlice.reducer
