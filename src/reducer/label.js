import { handleActions, handleAction } from 'redux-actions'
import { TEACH_TABLE_ONE, TEACH_TAG_ONE } from '@/constants/actionTypes'

const datadefault = {
  data: [],
  check: []
}


export default handleActions({
  [TEACH_TABLE_ONE]: (state, action) => ({...state, data: action.payload}),
  [TEACH_TAG_ONE]: (state, action) => ({...state, check: action.payload}),
}, datadefault)
