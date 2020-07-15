import React, { ReactElement, ReactNode } from "react";
import { Description as ZeitDescription, Spacer } from "@zeit-ui/react";

type DescriptionProps = {
  title: ReactNode;
  content: ReactNode;
  x?: number;
  y?: number;
};

const Description = ({
  title,
  content,
  x,
  y,
}: DescriptionProps): ReactElement => {
  return (
    <>
      <ZeitDescription
        className="custom-description"
        title={title}
        content={content}
      />
      <Spacer x={x} y={y} />
    </>
  );
};

export default Description;
