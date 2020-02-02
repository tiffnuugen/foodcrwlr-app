const initialState = {
  loginStatus: 'NOT_LOGGED_IN',
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      console.log('login user action:', action);
      return {
        ...state,
        loginStatus: 'LOGGED_IN',
        user: action.payload
      };
    case 'LOGOUT_USER':
      console.log('logout user action:', action);
      return initialState;
    default:
      return state;
  }
};
