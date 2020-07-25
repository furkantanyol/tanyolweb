import React, { ReactElement } from "react";
import { Page } from "@zeit-ui/react";
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props): ReactElement => {
  return (
    <>
      <Meta />
      <Page.Header>
        <Header />
      </Page.Header>
      <Page>
        <Page.Content>{children}</Page.Content>
      </Page>
      <Page.Footer style={{ position: "relative" }}>
        <Footer />
      </Page.Footer>
    </>
  );
};

export default Layout;
