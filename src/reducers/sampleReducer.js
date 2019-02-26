export default (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return {
        sampleAuth: action.payload
      }  
    default:
      return state
  }
}