import React, { ReactElement } from "react";
import { Breadcrumbs, Container } from "@zeit-ui/react";
import { Coffee, Home } from "@zeit-ui/react-icons";
import Link from "next/link";
import cn from "classnames";
import ArrowLeft from "@zeit-ui/react-icons/arrowLeft";
import { PATHS } from "../lib/constants";
import { ActivePathOptions } from "../types";

type HeaderProps = {
  activePathOptions: ActivePathOptions;
};

const Header = ({ activePathOptions }: HeaderProps): ReactElement => {
  const { isHome, isBlog, isPosts } = activePathOptions;

  const logo = isHome
    ? "assets/home/ft-logo.png"
    : "assets/home/ft-logo-alt.png";

  return (
    <Container className="header-container max-screen">
      {isPosts ? (
        <Link href={PATHS.BLOG}>
          <div className="back-arrow">
            <ArrowLeft size={30} />
          </div>
        </Link>
      ) : (
        <img alt="Furkan Tanyol brand logo" width={30} height={30} src={logo} />
      )}
      <Breadcrumbs size="medium" separator=" ">
        <Link href={PATHS.HOME}>
          <Breadcrumbs.Item
            nextLink
            className={cn("breadcrumbs-link", {
              "breadcrumbs-link-active": isHome,
            })}
          >
            <Home />
            Home
          </Breadcrumbs.Item>
        </Link>
        <Link href={PATHS.BLOG}>
          <Breadcrumbs.Item
            nextLink
            className={cn("breadcrumbs-link", {
              "breadcrumbs-link-active": isBlog,
            })}
          >
            <Coffee />
            Blog
          </Breadcrumbs.Item>
        </Link>
      </Breadcrumbs>
    </Container>
  );
};

export default Header;
