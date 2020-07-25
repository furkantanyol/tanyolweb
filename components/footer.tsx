import React, { ReactElement } from "react";
import { Grid, Spacer } from "@zeit-ui/react";
import {
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
} from "@zeit-ui/react-icons";
import { PATHS } from "../lib/constants";

type FooterLinkProps = {
  icon: ReactElement;
  href: string;
  spaced?: boolean;
  newTab?: boolean;
};

const FooterLink = ({
  icon,
  href,
  spaced,
  newTab,
}: FooterLinkProps): ReactElement => {
  return (
    <Grid>
      <a
        className="footer-link"
        {...(newTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        href={href}
      >
        {icon}
      </a>
      {spaced && <Spacer x={2} />}
    </Grid>
  );
};

const Footer = (): ReactElement => {
  return (
    <Grid.Container justify="center">
      <FooterLink icon={<Mail />} href={PATHS.EMAIL} spaced />
      <FooterLink icon={<Github />} href={PATHS.GITHUB} spaced newTab />
      <FooterLink icon={<Linkedin />} href={PATHS.LINKEDIN} spaced newTab />
      <FooterLink icon={<Instagram />} href={PATHS.INSTAGRAM} spaced newTab />
      <FooterLink icon={<Twitter />} href={PATHS.TWITTER} newTab />
      <Spacer y={3} />
    </Grid.Container>
  );
};

export default Footer;
