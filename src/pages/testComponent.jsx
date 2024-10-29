// SOurce: 
// [1A]: https://forum.freecodecamp.org/t/how-to-change-the-redux-state-by-input/274809/4
// [1B]: https://codepen.io/Dee73/pen/xeoYay?editors=0010

const { Component, Fragment } = React;
const { createStore } = Redux;
const { Provider, connect } = ReactRedux;


// A simple stateless React Component that displays
// a controlled text input and txt length from the 
// redux store
class App extends Component{
  handleChange = ({target:{value}}) => {
    const { updateInput } = this.props;
    updateInput(value)
  }
  render(){
    const { txt = '' } = this.props;
    return(
      <Fragment>
        <textarea value={txt} onChange={this.handleChange} />
      </Fragment>
    ) 
  }
}

// Display component that gets content to display from redux store
class Display extends Component{
  render(){
    const { len = 0 } = this.props;
    return(<h4>{`Text Length ${len}`}</h4>)
  }
}

// Action Creator
const updateInput = (input) => (
  {
    type: 'UPDATE_INPUT', 
    payload: {txt: input, len: input.trim().length},
  }
)
// Reducer
const reducer = (state = {} , action) => {
  switch(action.type){
      case('UPDATE_INPUT'):
        return action.payload
      default:
        return state
  }
  return state
}

// Create Redux Store and pass the reducer, add thunk here as another
// argument to createStore to handle reduction of async actions
const store= createStore(reducer)

// Need Pure functions to pass to  React-Redux connect

// Maps the store's state to the Components Props
const mapStateToProps = state => state;

/*
Maps store.dispatch to component's props 
note that even if we left out mapDispatch connect automatically 
would attach the store.dispatch() method to the props of the 
component however it is recommended to explicitly define it
read more: https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = dispatch => bindActionCreators({
  updateInput,
}, dispatch)
*/
// A less verbose way to map dispatch to props
const actionCreators = {updateInput};

// Connects React App and display to Redux and returns the connected App component
const ConnectedApp = connect(mapStateToProps, actionCreators)(App)
const ConnectedDisplay = connect(mapStateToProps)(Display)
// Need to wrap the connected App in the Provider component as well
const reduxApp =(
  <Provider store={store}>
     <ConnectedApp />
     <ConnectedDisplay />
  </Provider>
  )
// Render
ReactDOM.render(reduxApp, document.getElementById('root'))