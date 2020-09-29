import React, { ReactElement } from "react";
import { Image } from "@geist-ui/react";

const BlogCover = (): ReactElement => {
  return (
    <div className="full-width bg-white">
      <Image
        height={305}
        src="/assets/home/blog-bg.jpg"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default BlogCover;
