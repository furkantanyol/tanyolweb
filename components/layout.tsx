import React from "react";
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import {Page} from "@zeit-ui/react";
import Header from "./header";

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
    return (
        <>
            <Meta/>
            <Page>
                <Page.Header>
                    <Header/>
                </Page.Header>
                <Page.Content>
                   {children}
                </Page.Content>
                <Page.Footer>
                    <Footer/>
                </Page.Footer>
            </Page>
        </>
    )
}

export default Layout
