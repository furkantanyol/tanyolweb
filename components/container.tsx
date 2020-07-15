import React, { ReactNode, FunctionComponent, ReactElement } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props): ReactElement => {
  return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
