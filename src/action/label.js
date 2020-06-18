import { createActions, createAction } from 'redux-actions'
import { TEACH_TABLE_ONE, TEACH_TAG_ONE } from '@/constants/actionTypes'


export default createActions({
  [TEACH_TABLE_ONE]: option => option,
  [TEACH_TAG_ONE]: option => option
})


