import React, { ReactElement } from "react";
import { Breadcrumbs, useTheme } from "@zeit-ui/react";
import { Coffee, Home } from "@zeit-ui/react-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { PATHS } from "../lib/constants";

function isLinkActive(pathname: string, href: string): boolean {
  return pathname === href;
}

const Header = (): ReactElement => {
  const { pathname } = useRouter();
  const theme = useTheme();

  return (
    <Breadcrumbs size="medium" separator=" ">
      <Link href={PATHS.HOME}>
        <Breadcrumbs.Item
          nextLink
          style={{
            color: isLinkActive(pathname, PATHS.HOME)
              ? theme.palette.accents_8
              : theme.palette.accents_4,
          }}
        >
          <Home />
          Home
        </Breadcrumbs.Item>
      </Link>
      <Link href={PATHS.BLOG}>
        <Breadcrumbs.Item
          nextLink
          style={{
            color: isLinkActive(pathname, PATHS.BLOG)
              ? theme.palette.accents_8
              : theme.palette.accents_4,
          }}
        >
          <Coffee />
          Blog
        </Breadcrumbs.Item>
      </Link>
    </Breadcrumbs>
  );
};

export default Header;
