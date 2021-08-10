import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";

function BlogItem() {
  return (
    <BLogItem>
      <div className="image-container">
        <BlogPicture src="https://gatsby-persoanl.netlify.app/static/e3f68d71a295941dde8a20efd117eb38/fc91b/b77a3d5bbb3c4138f637152fc823caa2.webp" />
      </div>
      <BlogBreif>
        <div className="post-tag">
          <span>#Web_development</span>
          <span>#CSS</span>
          <span>#Tricks</span>
        </div>

        <div className="post-title">New Beginnings</div>
        <div className="post-details">
          <div className="date">
            <i className="fas fa-calendar-week"></i> date published : May 28,
            2015
          </div>

          <div className="date">
            {" "}
            <i className="fas fa-eye"></i> views{" "}
          </div>
        </div>
        <div className="post-content">
          Radio buttons and checkboxes have long been components that cause
          users confusion. These components are often used in the same context,
          but look completely different.
        </div>
        <div className="readmore">read more →</div>
      </BlogBreif>
    </BLogItem>
  );
}
const BLogItem = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 25rem;
  .image-container {
    width: 50%;
    overflow: hidden;
  }
  margin: 2rem 0;
`;

const BlogPicture = styled.img`
  width: 100%;
  height: 100%;
      &:hover {
        transform: scale(1.5) rotate(20deg);
      }
    }
`;

const BlogBreif = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  padding: 1rem 3rem;
  .post-title {
    font-size: ${sizes.huge};
    color: ${colors.secondary};
    margin: 0.5rem 0 0;
    font-weight: bold;
  }
  flex-direction: column;
  .post-tag {
    span {
      margin-right: 10px;
      font-weight: bold;
      color: ${colors.secondary};
    }
    display: flex;
    justify-content: flex-start;
  }
  .post-content {
    font-size: ${sizes.medium};
    color: ${colors.main};
  }
  .readmore {
    margin: 1rem 0;
    font-size: ${sizes.small};
    font-weight: bold;
    color: ${colors.main};
  }
  .post-details {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin: 1rem 0;
    .date {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      color: ${colors.main};
      font-weight: 300;
    }
    i {
      margin-right: 10px;
      color: ${colors.secondary};
    }
  }
`;

export default BlogItem;
