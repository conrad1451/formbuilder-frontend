import { createSlice } from '@reduxjs/toolkit'

export const newSlice = createSlice({
  name: 'compIDToDelete',
  initialState: {
    value: "",
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
  },
})

export const { updatingID } = newSlice.actions
 

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCompIDToDelete = (state) => state.compIDToDelete.value; 

export default newSlice.reducer
