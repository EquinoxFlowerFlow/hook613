import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Tag } from 'antd';
import { TEACH_TABLE_ONE, TEACH_TAG_ONE } from '@/constants/actionTypes'
import labelAction from '@/action/label'
import str from '@/utils/string'

export default connect(state =>{
  return {
    dataTag: state.label.data,
    check: state.label.check
  }
},{
  getTag: labelAction[str(TEACH_TABLE_ONE)],
  getSele: labelAction[str(TEACH_TAG_ONE)],
})(Tagg)
function Tagg (props) {
  const { data, getSele, getTag, check, dataTag } = props
  console.log(data)
  const log = val => {
    const selecte = check.filter(item => {
      return item != val
    })
    const Ta = dataTag.filter(item =>{
      return item.key != val
    })
    getSele(selecte)
    getTag(Ta)
  }

  return (
    <div>
      {
        data.map(item => {
          return <Tag closable onClose={() => log(item.key)} key={item.key}>
            {item.name}
          </Tag>
        })
      }
    </div>
  )
}







