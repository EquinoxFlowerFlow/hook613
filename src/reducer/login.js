const defaultData = {
  username: ''
}

export default function home (state = defaultData, action) {
  switch(action.type){
    case "TECH_LOGIN_USER":
      console.log(action.payload)
      return {...state, username: action.payload.data.user_name}//, username: action.payload
    default:
      return state
  }
}



