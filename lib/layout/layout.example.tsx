import React from 'react';
import Layout from "./layout";
import Header from './header';
import Content from "./content";
import Aside from "./aside";
import Footer from './footer';

export default function () {
    return <>
        <h1>1</h1>
        <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
        </Layout>
        <h1>2</h1>
        <Layout>
            <Header>header</Header>
            <Layout>
                <Aside>aside</Aside>
                <Content>content</Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
        <h1>3</h1>
        <Layout>
            <Header>header</Header>
            <Layout>
                <Content>content</Content>
                <Aside>aside</Aside>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
        <h1>4</h1>
        <Layout>
            <Aside>aside</Aside>
            <Layout>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        </Layout>


    </>
}