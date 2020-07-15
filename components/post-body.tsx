import React, { ReactElement } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props): ReactElement => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: content }} // eslint-disable-line react/no-danger
      />
    </div>
  );
};

export default PostBody;
