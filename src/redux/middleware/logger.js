const logger = ({ getState, dispatch }) => next => action => {
    next(action)
    console.log(action)
    

} 

export default logger