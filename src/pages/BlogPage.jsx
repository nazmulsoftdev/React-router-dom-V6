import { useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogContent from "../db/BlogContent";
function BlogPage() {
  const [readBlog, setreadBlog] = useState(BlogContent);

  return (
    <div className="blogWrapper">
      <BlogCard readBlog={readBlog} />
    </div>
  );
}

export default BlogPage;
