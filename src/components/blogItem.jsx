import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { Link } from "react-router-dom"

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
        <div className="readmore"><Link to="/post/id">read more → </Link></div>
      </BlogBreif>
    </BLogItem>
  );
}
const BLogItem = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 20rem;
  @media (max-width: 768px) {
    flex-direction: column;

  }
  .image-container {
    width: 50%;
    overflow: hidden;
    @media (max-width: 768px) {
  width:100%!important;
    }
  }
  margin: 3rem 0;

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
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .readmore {
    margin-top: auto;
    font-size: ${sizes.medium};
    font-weight: bold;
    margin-bottom: 3rem;
    color: ${colors.main};cursor: pointer;
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
  @media (max-width: 768px) {
  width:100%!important;
  padding: 2rem 0;.post-details {
    margin: 0.75rem.25rem ;  

    .date {
      margin: 0 0.25rem 0 0;  
      font-size:calc( ${sizes.small} + -4px);

    }
  }
  .post-content {
    font-size: ${sizes.small};
    color: ${colors.main};
  }.post-title {
    font-size: ${sizes.big};
    color: ${colors.secondary};
    margin: 0.5rem 0 0;
    font-weight: bold;
  }
    }.post-tag {
    span {
      margin-right: 10px;
      font-weight: bold;
      color: ${colors.secondary};
      font-size: ${sizes.small};

    }
    display: flex;
    justify-content: flex-start;
  }
  .readmore {
    
    margin-top: 1.5rem;
  }
`;

export default BlogItem;
