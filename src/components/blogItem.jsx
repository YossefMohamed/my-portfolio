import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import removeMarkdown from "markdown-to-text";


function BlogItem({ post }) {
  return (
    <Card>
      <Link to={`/post/${post.id}`} className="top">
        <p className="category">{post.tages[0].tag}</p>
        <img src={`/images/${post.coverImage}`} alt={post.title} />
      </Link>

      <div className="bottom">
        <h2>
          <Link to={`/post/${post.id}`} className="title-link">
            {post.title}
          </Link>
        </h2>

        <p className="intro">     
        
        {removeMarkdown(post.brief).replaceAll("#", "").replaceAll("]", "")
        .replaceAll("-", " ").replaceAll("(", "")
        .replaceAll(")", "").replaceAll("[", "")}
              ...</p>
        <div className="info">
          <ion-icon name="time"></ion-icon>
          <p className="info">
            {" "}
            <Moment fromNow>{post.createdAt}</Moment>
          </p>
        </div>
      </div>
    </Card>
  );
}
const Card = styled.div`
  height: 520px;
  width: 32%;
  margin-right: 1.333333333333%;
  @media (max-width: 910px) {
    width: 48%;
    margin-right: 0;
  }
  @media (max-width: 608px) {
    width: 100%;
    margin-right: 0;
  }
  margin-bottom: 3rem;
  background-color: white;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  .top {
    min-height: 50%;
    width: 100%;    border: 0.5px solid rgba(0, 0, 0, 0.1);

    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: -99;
    }
  }

  .category {
    background-color: ${colors.secondary};
    width: 100px;
    height: 30px;
    color: white;
    z-index: 99;
    padding: 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: left;
    font-size: ${sizes.small};
    letter-spacing: 1px;
  }

  h2 {
    padding: 10px 0 0px 22px;
    flex-grow: 1;

    display: flex;
    align-items: center;
  }
  .title-link {
    font-size: calc(${sizes.medium} + -2px);
  }

  p {
    font-size: calc(${sizes.small} + -2px);
    padding: 0 0 0 22px;
    line-height: 24px;
    margin: 0;
  }

  .intro {
    width: 100%;
    padding : 0 22px;
  }

  a:hover {
    color: ${colors.secondary};
    transition: 0.3s;
  }

  .author {
    display: flex;
    align-items: center;
  }

  .name {
    padding-left: 10px;
    cursor: pointer;
    font-weight: 300;
  }

  .name a {
    font-weight: 400;
    color: ${colors.secondary};
  }

  .info {
    display: flex;
    color: #999;
    font-size: calc(${sizes.small}-3px);
    margin-top: 8px;
    margin-bottom: 10px;
    padding-left: 0;
  }

  .info a {
    cursor: pointer;
  }

  ion-icon {
    height: 20px;
    width: 20px;
    display: flex;
    padding: 10px 8px 0 22px;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 0px;
  }

  .intro {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`;

export default BlogItem;
