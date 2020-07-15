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
      <Page>
        <Page.Header>
          <Header />
        </Page.Header>
        <Page.Content>{children}</Page.Content>
        <Page.Footer>
          <Footer />
        </Page.Footer>
      </Page>
    </>
  );
};

export default Layout;
