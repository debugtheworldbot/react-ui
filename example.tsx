import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import IconExample from "./lib/icon/iconExample";
import DialogExamole from "./lib/dialog/dialog.example";
import ButtonExample from "./lib/buttonExample";
import LayoutExample from "./lib/layout/layout.example";

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
                    <ul>
                        <li><Link to={'/dialog'}>dialog</Link></li>
                    </ul>
                    <ul>
                        <li><Link to={'/layout'}>layout</Link></li>
                    </ul>
                </aside>
                <main>
                    <Route path={'/icon'} component={IconExample} />
                    <Route path={'/button'} component={ButtonExample} />
                    <Route path={'/dialog'} component={DialogExamole} />
                    <Route path={'/layout'} component={LayoutExample} />
                </main>
            </div>
        </div>
    </Router>

), document.querySelector('#root'))