import React from 'react'
import {connect} from 'react-redux'
import { IncAction } from './actions'
import { DecAction } from './actions'

const App = ({local_varaible,IncAction,DecAction}) => {
  return (
    <div>
      <h1>{local_varaible}</h1> <br />
      <button onClick={ () => IncAction(5)}>INCREMENT</button>
      <button onClick={DecAction}>DECREMENT</button>
    </div>
  )
}

const mapStateToProps = state => ({
  local_varaible : state
})

export default connect(mapStateToProps,{IncAction,DecAction}) (App);
