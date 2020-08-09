import React, { ReactElement } from "react";
import { Grid, Spacer } from "@zeit-ui/react";
import { GridProps } from "@zeit-ui/react/dist/grid/grid";

type ExternalLinkProps = {
  children: ReactElement | ReactElement[] | Array<ReactElement | string>;
  href: string;
  spaced?: boolean;
  newTab?: boolean;
  gridProps?: GridProps | Record<string, unknown>;
};

const ExternalLink = ({
  children,
  href,
  spaced,
  newTab,
  gridProps = {},
}: ExternalLinkProps): ReactElement => {
  return (
    <Grid {...gridProps} style={{ display: "flex" }}>
      <a
        className="footer-link"
        {...(newTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        href={href}
      >
        {children}
      </a>
      {spaced && <Spacer x={2} />}
    </Grid>
  );
};

export default ExternalLink;
