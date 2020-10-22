import React from 'react';
import Layout from "./layout";
import Header from './header';
import Content from "./content";
import Aside from "./aside";
import Footer from './footer';

export default function (){
    return <>
        <h1>1</h1>
        <Layout className={'hi'}>
            <Header>header</Header>
            <Content>content</Content>
            <Aside>aside</Aside>
            <Footer>footer</Footer>
        </Layout>

    </>
}