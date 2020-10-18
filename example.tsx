import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import IconExample from "./lib/icon/iconExample";
import ButtonExample from "./lib/buttonExample";

ReactDom.render((
    <Router>
        <div>
            <header>
                <div className="logo">UI</div>
            </header>
            <div>
                <aside>
                    <h2>components</h2>
                    <ul>
                        <li><Link to={'/icon'}>icon</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={'/button'}>button</Link></li>
                    </ul>
                </aside>
                <main>
                    <Route path={'/icon'} component={IconExample}>
                    </Route>
                    <Route path={'/button'} component={ButtonExample}>
                    </Route>
                </main>
            </div>
        </div>
    </Router>

), document.querySelector('#root'))