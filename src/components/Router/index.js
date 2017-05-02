import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import HelloWorld from '../../pages/HelloWorld'
import Props from '../../pages/SimpleProps'
import MoreProps from '../../pages/CompleteProps'
import State from '../../pages/State'
import Lifecycle from '../../pages/Lifecycle'
import HigherOrder from '../../pages/HigherOrder'
import ManipulatingData from '../../pages/ManipulatingData'
import Children from '../../pages/Children'
import './styles.css'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className='Navigation'>
          <ol>
            <li><Link to='/' className='Link'>Home</Link></li>
            <li><Link to='/HelloWorld' className='Link'>Hello World</Link></li>
            <li><Link to='/SimpleProps' className='Link'>Props</Link></li>
            <li><Link to='/CompleteProps' className='Link'>More props</Link></li>
            <li><Link to='/Children' className='Link'>React Children</Link></li>
            <li><Link to='/Lifecycle' className='Link'>Lifecycle</Link></li>
            <li><Link to='/State' className='Link'>Stateful components</Link></li>
            <li><Link to='/HigherOrder' className='Link'>Higher-order functions</Link></li>
            <li><Link to='/ManipulatingData' className='Link'>Manipulating Data</Link></li>
          </ol>
        </div>

        <Route exact path='/' component={Home} />
        <Route path='/HelloWorld' component={HelloWorld} />
        <Route path='/SimpleProps' component={Props} />
        <Route path='/CompleteProps' component={MoreProps} />
        <Route path='/Children' component={Children} />
        <Route path='/State' component={State} />
        <Route path='/Lifecycle' component={Lifecycle} />
        <Route path='/HigherOrder' component={HigherOrder} />
        <Route path='/ManipulatingData' component={ManipulatingData} />
      </div>
    )
  }
}

export default Navigation