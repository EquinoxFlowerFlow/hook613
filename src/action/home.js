import { post } from '@/utils/request'
import api from '@/services/api'

export function getName (options) {
  return {
    //type  都是大写
    type:'TECH_HOME_LIST',
    //payload 不能写别的
    payload: post(api.list),
  }
}

export function getAdd (options) {
  post(api.add, options)
  return {
    //type  都是大写
    type:'TECH_HOME_LIST',
    //payload 不能写别的
    payload: post(api.list),
  }
}

export function getUpd (options) {
  post(api.update, options)
  return {
    //type  都是大写
    type:'TECH_HOME_LIST',
    //payload 不能写别的
    payload: post(api.list)
  }
}

export function getdel (options) {
  post(api.delete, options)
  return {
    //type  都是大写
    type:'TECH_HOME_LIST',
    //payload 不能写别的
    payload: post(api.list)
  }
}

export function status(options) {
  return {
    type: 'TECH_STATUS',
    payload: options
  }
}

