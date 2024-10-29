import { createSlice } from '@reduxjs/toolkit'

export const questionComponentSlice = createSlice({
  name: 'compID',
  initialState: {
    value: "",
    value2:"",
    myArr:[],
    // value: "testme",
  },
  reducers: {  
    addComponent: (state, action) => {
      state.myArr.push(action.payload)
    },
    removeComponent: (state, action) => {
        if(state.myArr.length > 1)
        {

            let targetIndex = action.payload;
// https://www.google.com/search?q=use+spread+to+copy+part+of+an+arrrya+js&client=firefox-b-1-d&sca_esv=746687e9b17ac835&ei=pAIhZ4jrCYGs5NoP4NLvuAM&ved=0ahUKEwiIzbWU97OJAxUBFlkFHWDpGzcQ4dUDCA8&uact=5&oq=use+spread+to+copy+part+of+an+arrrya+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiJ3VzZSBzcHJlYWQgdG8gY29weSBwYXJ0IG9mIGFuIGFycnJ5YSBqczIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCkjfNFDXBFjCM3ABeAGQAQCYAY4CoAG1MKoBBjEuMzIuNbgBA8gBAPgBAZgCJ6ACsDHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAAGIAEGEMYigXCAhAQLhiABBjRAxhDGMcBGIoFwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICBRAuGIAEwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBiRAhiKBcICBRAAGIAEwgIIEAAYgAQYsQPCAg4QABiABBixAxiDARiKBcICCBAuGIAEGLEDwgIEEAAYA8ICBxAAGIAEGArCAgYQABgWGB7CAggQABgWGAoYHsICCBAAGBYYHhgPwgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAhGKABwgIFECEYqwLCAgUQIRifBcICBxAhGAoYqwKYAwCIBgGQBgqSBwYxLjMzLjWgB-u0Ag&sclient=gws-wiz-serp
            
            let copiedPart = [...state.myArr.slice(0, targetIndex), ...state.myArr.slice(targetIndex+1)];
        //    let bro = [...state.myArr]

            // state.myArr.pop()
            // state.myArr = copiedPart;
            state.myArr = [];
        }
    },
    removeLastComponent: (state) => {
        if(state.myArr.length > 1)
        {
            state.myArr.pop()
        }
    },
  },
})
 

export const { addComponent } = questionComponentSlice.actions
export const { removeComponent } = questionComponentSlice.actions


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCompID = (state) => state.compID.value; 
export const selectCompID2 = (state) => state.compID.value2; 
export const selectMyArr = (state) => state.compID.myArr; 
// export const selectMyArrAlt = (state) => state.compID.myArr; 

export default questionComponentSlice.reducer


// The function below is called a thunk, which can contain both sync and async logic
// that has access to both `dispatch` and `getState`. They can be dispatched like
// a regular action: `dispatch(incrementIfOdd(10))`.
// Here's an example of conditionally dispatching actions based on current state.
export const addToList = (theCompID) => {
  return (dispatch, getState) => {
    const currentValue = selectMyArr(getState())
    if (21 % 2 === 1) {
      dispatch(addComponent(theCompID))
    }
  }
}

export const removeFromListOld = (theIndex) => {
    return (dispatch, getState) => {
      const currentValue = selectMyArr(getState())
    //   CHQ: failed line below since currentValue.myArr is undefined
    //   if (currentValue.myArr.length > 1) {
    //     dispatch(removeComponent(theIndex))
    //   }
    dispatch(removeComponent(theIndex))
    }
  }
  
  export const removeFromList = (theCompID) => {
    return (dispatch, getState) => {
      const currentValue = selectMyArr(getState())
       
      let indexOfTheTarget

      for (let index = 0; index < currentValue.length && true; index++) {
        const element = currentValue[index];

        // CHQ: if the current element equals the compID, grab the index it is sitting 
        // at and pass it into the removeComponent function
        if(element === theCompID )
        {
          indexOfTheTarget = index;
        }
        
      }


    dispatch(removeComponent(indexOfTheTarget))
    }
  }