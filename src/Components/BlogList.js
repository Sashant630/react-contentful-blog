import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const client = createClient({
    space: "uakjv0bi8j3l",
    environment: "staging",
    accessToken: "XMyU3iuLAUflD6kmsKjxfXR25DHftpXV2IyRpaisxbQ",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, []);

  // console.log(blogPosts);

  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Web Dev Blog</h1>

            {blogPosts?.items ? (
              blogPosts?.items.map((post) => (
                
            <section className="post" key={post.sys.id}>
              <header className="post-header">
                <img
                  src={post?.fields?.blogImage?.fields?.file?.url}
                  title={post?.fields?.blogTitle}
                  alt="alt text"
                  width="578"
                  height="291"
                />
                <h2 className="post-title pt-3">{post?.fields?.blogTitle}</h2>
                <p className="post-meta">
                  By
                  <a href="/" className="post-author">
                    {post?.fields?.blogAuthor}
                  </a>
                  Date <span></span>
                  <small>{post?.fields?.createdDate}</small>
                </p>
              </header>
              <div className="post-description">
                <p>{post?.fields?.blogSummary}</p>
                <Link
                  to={`/blogdetails/${post?.sys?.id}`}
                  className="button button1"
                >
                  Read More
                </Link>
              </div>
            </section>
              ))
            ) : (
              <div className="loading-spinner">Loading blog posts...</div>
            )}

          </div>

          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a href="/" className="pure-menu-link">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
