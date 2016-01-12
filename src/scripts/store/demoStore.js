import { doLogin } from './../actions/loginActions'

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(doLogin('Learn about actions'))

// Stop listening to state updates
unsubscribe()