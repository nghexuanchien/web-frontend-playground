import React from 'react'
import { Route, Link } from 'react-router-dom'

const Home = props => (
  <div className={'container'}>
    <div className={'text-center'}>
      <h1>Task Runner</h1>
      <h4>Manage Your Tasks</h4>
      <p>This is the place where you can track and edit your tasks, do not hesitate to become a user of this amazing web application!</p>
      <Link to="/task" className="btn btn-primary">Go to Task page</Link>
    </div>
  </div>
)

export default Home;