import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produto from './pages/Produtos/'


function Rotas() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/produto" exact component={Produto} />
    </Switch>
  )
}

export default Rotas