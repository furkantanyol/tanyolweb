import React, { ReactElement } from "react";
import { Text } from "@zeit-ui/react";

type SectionProps = {
  title: string;
  children: ReactElement | string | Array<ReactElement | string>;
};

const Section = ({ title, children }: SectionProps): ReactElement => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <Text h4>{title}</Text>
      {children}
    </div>
  );
};

export default Section;
