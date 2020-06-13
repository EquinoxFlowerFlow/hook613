import Loadable from '../components/Loadablw'

const Home = Loadable( () => import ('@@/home') )
const Login = Loadable( () => import ('@@/login') )
const Reg = Loadable( () => import ('@@/reg') )

export {
  Home,
  Login,
  Reg,
}

