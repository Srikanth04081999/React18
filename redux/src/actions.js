export const IncAction = (value) => async dispatch =>{
    dispatch({
        type: "INCREMENT",
        payload : value
    })
}

export const DecAction = () => async dispatch =>{
    dispatch({
        type: "DECREMENT"
    })
}