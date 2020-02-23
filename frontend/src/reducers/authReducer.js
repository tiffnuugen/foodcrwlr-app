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
        user: action.user
      };
    default:
      return state;
  }
};
