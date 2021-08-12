import React from "react";
import styled from "styled-components";
import BlogItem from "../components/blogItem";
import colors from "../util/colors";
import sizes from "../util/sizes";
import "./blog.css";
function Blog() {
  return (
    <BlogContainer>
      <BlogTitle>
        <span>Articles</span> 📝
      </BlogTitle>
      <BlogDescribtion>
        <div className="blog-tages">
          <span>All</span>
          <span>#HTML</span>
          <span>#JS</span>
          <span>#GraphQL</span>
          <span>#React</span>
          <span>#Node</span> <span>#HTML</span>
          <span>#JS</span>
          <span>#GraphQL</span>
          <span>#React</span>
          <span>#Node</span> <span>#HTML</span>
          <span>#JS</span>
          <span>#GraphQL</span>
          <span>#React</span>
          <span>#Node</span> <span>#HTML</span>
          <span>#JS</span>
          <span>#GraphQL</span>
          <span>#React</span>
          <span>#Node</span>
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
      <Paginate />
    </BlogContainer>
  );
}
const BlogDescribtion = styled.div`
  margin: 3rem 0;
  h3 {
    width: 100%;
    margin: 2rem 0 1rem;
  }
  .breif {
    width: 65%;
    color: ${colors.main};
    font-size: calc(${sizes.small} + 5px);
    font-weight: 550;
    padding: 0 3rem 0 0;
    display: flex;
    align-items: center;
    vertical-align: middle;
    @media (max-width: 768px) {
      padding: 0 0.1rem 0 0;
      font-size: calc(${sizes.small} + 0px);
    }
    /* background-color: red; */
  }
  .blog-tages {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    /* background-color: red; */
    flex-wrap: nowrap;
    flex-flow: row wrap;
    display: flex;
    color: ${colors.light};
    filter: brightness(60%);
    span {
      &:first-child {
        background-color: rgba(0, 0, 0, 0.07);
        color: white !important;
      }
      margin: 5px 0;
      /* border-radius: 10px; */
      flex-wrap: nowrap;
      width: max-content;
      margin-right: 0.5rem;
      padding: 5px 20px;
      border: 1px solid rgba(0, 0, 0, 0.07);
    }
    @media (max-width: 768px) {
      span {
        width: max-content;

        margin-right: 1rem;
      }
    }
  }
`;
const BlogContainer = styled.div`
  margin: 5rem 0;
  .postsContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;
const BlogTitle = styled.div`
  font-size: ${sizes.huge};

  color: ${colors.main};
`;

function Paginate() {
  const [currentPage, setCurrentPage] = React.useState(4);
  let maxPages = 10;
  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage ? "round-effect active" : "round-effect"
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
  }
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginationRender = (
    <div className="page-container">
      <div className="flex-container">
        <div className="paginate-ctn">
          <div className="round-effect" onClick={prevPage}>
            {" "}
            &lsaquo;{" "}
          </div>
          {items}
          <div className="round-effect" onClick={nextPage}>
            {" "}
            &rsaquo;{" "}
          </div>
        </div>
      </div>
    </div>
  );
  return paginationRender;
}

export default Blog;
