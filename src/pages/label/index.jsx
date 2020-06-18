import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'

import Tabl from './table'
import Tagg from './tag'

export default connect(state => {
  return ({
    dataTag: state.label.data
  })
})(Label)
function  Label (props) {
  const { dataTag } = props
  return (
    <div>
      <Tagg data={dataTag} />
      <Tabl />
    </div>
  )
}







