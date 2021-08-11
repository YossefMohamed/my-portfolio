import React from "react";
import styled from "styled-components";
import BlogItem from "../components/blogItem";
import colors from "../util/colors";
import sizes from "../util/sizes";

function Blog() {
  return (
    <BlogContainer>
      <BlogTitle>
        <span>Articles</span> 📝
      </BlogTitle>
      <BlogDescribtion>
        <div className="breif">
          Articles on front-end design engineering, focused on HTML, CSS, SVG,
          accessiblity, and everything in between, with practical tips from real
          projects. Included here are links to articles published on magazines.
        </div>
        <div className="blog-tages">
          <span>#CSS</span>
          <span>#HTML</span>
          <span>#JavaScript</span>
          <span>#GraphQL</span>
          <span>#React</span> <span>#Node</span>
        </div>
      </BlogDescribtion>

      <div className="postsContainer">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </BlogContainer>
  );
}
const BlogDescribtion = styled.div`
  display: flex;
  margin: 3rem 0;

  .breif {
    width: 65%;
    color: ${colors.main};
    font-size: calc(${sizes.small} + 5px);
    font-weight: 550;
    padding: 0 3rem 0 0;
    display: flex;
    align-items: center;
    vertical-align: middle;

    /* background-color: red; */
  }
  .blog-tages {
    width: 35%;
    align-items: center;

    /* background-color: red; */
    flex-wrap: nowrap;
    flex-flow: row wrap;
    display: flex;
    color: ${colors.light};
    filter: brightness(60%);
    span {
      margin: 5px 0;
      border-radius: 10px;
      flex-wrap: nowrap;
      width: 30%;
    }
  }
`;
const BlogContainer = styled.div`
  margin: 5rem 0;
`;
const BlogTitle = styled.div`
  font-size: ${sizes.huge};

  color: ${colors.main};
`;
export default Blog;
