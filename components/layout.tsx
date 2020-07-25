import React, { ReactElement } from "react";
import { Page } from "@zeit-ui/react";
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";
import cn from "classnames";
import { useRouter } from "next/router";
import { PATHS } from "../lib/constants";
import { ActivePathOptions } from "../types";

type LayoutProps = {
  preview?: boolean;
  children: React.ReactNode;
};

function getActivePathOptions(pathname: string): ActivePathOptions {
  const isHome: boolean = pathname === PATHS.HOME;
  const isBlog: boolean = pathname === PATHS.BLOG;
  const isPosts: boolean = pathname.includes(PATHS.POSTS);
  return { isHome, isBlog, isPosts };
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  const { pathname } = useRouter();
  const activePathOptions = getActivePathOptions(pathname);
  const { isHome, isBlog, isPosts } = activePathOptions;
  return (
    <>
      <Meta />
      <Page.Header
        className={cn({
          "bg-black": isHome,
          "bg-snow": isBlog,
          "bg-white": isPosts,
        })}
      >
        <Header activePathOptions={activePathOptions} />
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
