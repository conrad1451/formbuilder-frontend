import { createSlice } from '@reduxjs/toolkit'

export const newSlice = createSlice({
  name: 'compIDToDelete',
  initialState: {
    value: "",
    value2:"",
    myArr:[],
    // value: "testme",
  },
  reducers: {
    updatingID: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //CHQ: the below line worked!
      state.value += "compIDToDelete11"
    }, 
    updatingID2: (state, aa) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //CHQ: the below line worked!
      state.value2 += "Hello"
    }, 
    updateArr: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      // CHQ: this worked
      // state.myArr = ["dd"]
      // CHQ: this worked
      state.myArr.push("dd")
      // CHQ: this did not work
      // state.myArr.concat("dd")
    },  
    updateArrAlt: (state, action) => {
      state.myArr.push(action.payload)
    },
  },
})

export const { updatingID } = newSlice.actions
export const { updatingID2 } = newSlice.actions
export const { updateArr } = newSlice.actions
export const { updateArrAlt } = newSlice.actions


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCompIDToDelete = (state) => state.compIDToDelete.value; 
export const selectCompIDToDelete2 = (state) => state.compIDToDelete.value2; 
export const selectArr = (state) => state.compIDToDelete.myArr; 
// export const selectArrAlt = (state) => state.compIDToDelete.myArr; 

export default newSlice.reducer


// The function below is called a thunk, which can contain both sync and async logic
// that has access to both `dispatch` and `getState`. They can be dispatched like
// a regular action: `dispatch(incrementIfOdd(10))`.
// Here's an example of conditionally dispatching actions based on current state.
export const modifyTheArr = (amount) => {
  return (dispatch, getState) => {
    const currentValue = selectArr(getState())
    if (21 % 2 === 1) {
      dispatch(updateArrAlt(amount))
    }
  }
}