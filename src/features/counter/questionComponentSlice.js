// Sources

// [Q1]: https://www.google.com/search?q=use+spread+to+copy+part+of+an+arrrya+js&client=firefox-b-1-d&sca_esv=746687e9b17ac835&ei=pAIhZ4jrCYGs5NoP4NLvuAM&ved=0ahUKEwiIzbWU97OJAxUBFlkFHWDpGzcQ4dUDCA8&uact=5&oq=use+spread+to+copy+part+of+an+arrrya+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiJ3VzZSBzcHJlYWQgdG8gY29weSBwYXJ0IG9mIGFuIGFycnJ5YSBqczIHECEYoAEYCjIHECEYoAEYCjIHECEYoAEYCkjfNFDXBFjCM3ABeAGQAQCYAY4CoAG1MKoBBjEuMzIuNbgBA8gBAPgBAZgCJ6ACsDHCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAAGIAEGEMYigXCAhAQLhiABBjRAxhDGMcBGIoFwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICBRAuGIAEwgIOEC4YgAQYsQMY0QMYxwHCAgsQABiABBiRAhiKBcICBRAAGIAEwgIIEAAYgAQYsQPCAg4QABiABBixAxiDARiKBcICCBAuGIAEGLEDwgIEEAAYA8ICBxAAGIAEGArCAgYQABgWGB7CAggQABgWGAoYHsICCBAAGBYYHhgPwgILEAAYgAQYhgMYigXCAggQABiABBiiBMICBRAhGKABwgIFECEYqwLCAgUQIRifBcICBxAhGAoYqwKYAwCIBgGQBgqSBwYxLjMzLjWgB-u0Ag&sclient=gws-wiz-serp

import { createSlice } from '@reduxjs/toolkit'

export const questionComponentSlice = createSlice({
  name: 'compID',
  initialState: {
    compIDToDelete: "",
    modalOpen:false,
    dummyVar: "",
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
          // [Q1]:
          let copiedPart = [...state.myArr.slice(0, targetIndex), ...state.myArr.slice(targetIndex+1)];
          // let bro = [...state.myArr]
          
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
    updateDeletionTarget: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //CHQ: the below line worked!
      state.compIDToDelete = action.payload;
    }, 
    updateModalDisplaying: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //CHQ: the below line worked!
      state.modalOpen = action.payload;
    },
    toggleModalDisplaying: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //CHQ: the below line worked!
      state.modalOpen = !state.modalOpen;
    }, 
    updateDummyVar: (state, action) =>{
      state.dummyVar = action.payload;
    }
  },
})
 

export const { addComponent } = questionComponentSlice.actions
export const { removeComponent } = questionComponentSlice.actions
export const { removeLastComponent } = questionComponentSlice.actions
export const { updateDeletionTarget } = questionComponentSlice.actions
export const { updateModalDisplaying } = questionComponentSlice.actions
export const { toggleModalDisplaying } = questionComponentSlice.actions
export const { updateDummyVar } = questionComponentSlice.actions
 
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectDeletionID = (state) => state.compID.compIDToDelete; 
export const selectModalOpen = (state) => state.compID.modalOpen; 
export const selectMyArr = (state) => state.compID.myArr; 
export const selectDummyVar = (state) => state.compID.dummyVar; 
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

// antoerh thunk
export const updateDummyVarHelper = () => {
  return (dispatch, getState) => {
    const currentValue = selectDummyVar(getState())
    if (21 % 2 === 1) {
      dispatch(updateDummyVar(currentValue+currentValue))
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