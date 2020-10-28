import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import IconExample from "./lib/icon/iconExample";
import DialogExamole from "./lib/dialog/dialog.example";
import ButtonExample from "./lib/buttonExample";
import LayoutExample from "./lib/layout/layout.example";
import {Layout,Header,Aside,Content,Footer} from "./lib/layout/layout";
import './example.scss'
ReactDom.render((
    <Router>
        <Layout className={'page'}>
            <Header>
                <div className="logo">
                    <img src="./lib/icons/logo.png" alt="logo"/>
                </div>
            </Header>
            <Layout>
                <Aside>
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
                </Aside>
                <Content>
                    <Route path={'/icon'} component={IconExample} />
                    <Route path={'/button'} component={ButtonExample} />
                    <Route path={'/dialog'} component={DialogExamole} />
                    <Route path={'/layout'} component={LayoutExample} />
                </Content>
            </Layout>
            <Footer>footer</Footer>

        </Layout>
    </Router>

), document.querySelector('#root'))