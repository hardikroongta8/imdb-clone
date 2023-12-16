const checkIfLoggedIn = () => {
    const sessionId = localStorage.getItem('sessionId');
    return !(sessionId == null || sessionId === 'undefined');
}

const authReducer = (state, action) => {
    switch (action) {
      case 'login':
        return true;
      case 'logout':
        return false;
      default:
        return false;
    }
  }

export {
    checkIfLoggedIn,
    authReducer
}