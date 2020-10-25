const windowSizeReducer = (state = window.innerWidth, action) => {
  switch(action.type) {
    case 'RESIZE':
      return window.innerWidth;
    default:
      return state;
  } 
}

export default windowSizeReducer;