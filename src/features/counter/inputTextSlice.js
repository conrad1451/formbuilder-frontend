import { createSlice } from '@reduxjs/toolkit'

export const inputTextSlice = createSlice({
  name: 'inputText',
  initialState: {
    value: "",
  },
  reducers: { 
    displayThisText: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { displayThisText } = inputTextSlice.actions

//  

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectInputText = (state) => state.inputText.value

export default inputTextSlice.reducer
