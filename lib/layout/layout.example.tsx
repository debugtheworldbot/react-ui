import React from 'react';
import Layout from "./layout";
import Header from './header';
import Content from "./content";
import Aside from "./aside";
import Footer from './footer';
import './layout.example.scss'

export default function () {
    return <>
        <h1>1</h1>
        <Layout>
            <Header className={'x'}>header</Header>
            <Content className={'y'}>content</Content>
            <Footer className={'x'}>footer</Footer>
        </Layout>
        <h1>2</h1>
        <Layout>
            <Header className={'x'}>header</Header>
            <Layout>
                <Aside className={'a'}>aside</Aside>
                <Content className={'z'}>content</Content>
            </Layout>
            <Footer className={'x'}>footer</Footer>
        </Layout>
        <h1>3</h1>
        <Layout>
            <Header className={'x'}>header</Header>
            <Layout>
                <Content className={'z'}>content</Content>
                <Aside className={'a'}>aside</Aside>
            </Layout>
            <Footer className={'x'}>footer</Footer>
        </Layout>
        <h1>4</h1>
        <Layout>
            <Aside className={'a'}>aside</Aside>
            <Layout>
                <Header className={'x'}>header</Header>
                <Content className={'z'}>content</Content>
                <Footer className={'x'}>footer</Footer>
            </Layout>
        </Layout>


    </>
}