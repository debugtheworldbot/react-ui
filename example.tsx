import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router,  Route, NavLink} from 'react-router-dom'
import IconDemo from "./lib/icon/icon.demo";
import DialogExamole from "./lib/dialog/dialog.example";
import ButtonExample from "./lib/buttonExample";
import LayoutExample from "./lib/layout/layout.example";
import SwitchExample from "./lib/switch/switch.example";
import FormExample from "./lib/form/form.example"
import {Layout,Header,Aside,Content,Footer} from "./lib/layout/layout";
import './example.scss'



ReactDom.render((
    <Router>
        <Layout className={'page'}>
            <Header className={'site-header'}>
                <div className="logo">
                    <img src="./lib/icons/logo.jpg"  width={80} alt="logo"/>
                    <span>CzUI</span>
                </div>
            </Header>
            <Layout>
                <Aside className={'site-aside'}>
                    <h2>组件</h2>
                    <ul>
                        <li><NavLink to={'/icon'}>icon</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to={'/dialog'}>dialog</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to={'/layout'}>layout</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to={'/switch'}>switch</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to={'/form'}>form</NavLink></li>
                    </ul>
                </Aside>
                <Content>
                    <Route path={'/icon'} component={IconDemo} />
                    <Route path={'/button'} component={ButtonExample} />
                    <Route path={'/dialog'} component={DialogExamole} />
                    <Route path={'/layout'} component={LayoutExample} />
                    <Route path={'/switch'} component={SwitchExample} />
                    <Route path={'/form'} component={FormExample} />
                </Content>
            </Layout>
            <Footer className={'site-footer'}>
                &copy; TmIgVl
            </Footer>

        </Layout>
    </Router>

), document.querySelector('#root'))