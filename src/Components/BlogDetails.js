import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { Accordion, Text } from "@contentful/f36-components";

const BlogDetails = () => {
  const [blogPost, setBlogPost] = useState([]);
  const client = createClient({
    space: "uakjv0bi8j3l",
    environment: "staging",
    accessToken: "XMyU3iuLAUflD6kmsKjxfXR25DHftpXV2IyRpaisxbQ",
  });

  const { id } = useParams();
//   console.log(id);

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries);
          setBlogPost(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getEntryById();
  }, []);

  return (
    <div id="layout" className="pure-g">
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <Link to="/blogList" className="content-subhead">
              Blog post
            </Link>

            <section className="post">
              <header className="post-header">
                <img
                  src={blogPost?.fields?.blogImage?.fields?.file?.url}
                  title={blogPost?.fields?.blogTitle}
                  alt="alt text"
                  width="578"
                  height="291"
                />
                <h2 className="post-title pt-3">
                  {blogPost?.fields?.blogTitle}
                </h2>
                <p className="post-meta">
                  By
                  <a href="/" className="post-author">
                    {blogPost?.fields?.blogAuthor}
                  </a>
                  Date <span></span>
                  <small>{blogPost?.fields?.createdDate}</small>
                </p>
              </header>
              <div className="post-description">
                <p>{blogPost?.fields?.postContent}</p>
              </div>
            </section>

            <Accordion>
              <Accordion.Item title="What payment methods do you accept?">
                <Text>
                  Customers on the Team tier can pay with a credit card
                  (American Express, MasterCard or Visa). Enterprise customers
                  have the choice of paying with a credit card or wire transfer.
                </Text>
              </Accordion.Item>
            </Accordion>
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

export default BlogDetails;
