import { post } from '@/utils/request'
import api from '@/services/api'

export function getName (options) {
  return {
    //type  都是大写
    type:'TECH_LOGIN_USER',
    //payload 不能写别的
    payload: post(api.login, options)
  }
}


