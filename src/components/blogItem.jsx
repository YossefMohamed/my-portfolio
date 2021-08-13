import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { Link } from "react-router-dom";
function BlogItem() {
  return (
    <Card>
      <div class="top">
        <p class="category">Nature</p>
        <img
          src="https://w0.peakpx.com/wallpaper/609/467/HD-wallpaper-bugs-bunny-looney-tunes-cartoon-baseball.jpg"
          alt="postImage"
        />
      </div>

      <div class="bottom">
        <h2>
          <Link to="/post/123">React And Performance</Link>
        </h2>

        <p class="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          consectetur mauris sed mauris sagittis, nec pretium metus posuere.{" "}
        </p>
        <div class="info">
          <ion-icon name="time"></ion-icon>
          <p class="info">2 days ago</p>
          <ion-icon name="chatboxes"></ion-icon>
          <p class="info">13 Views</p>
        </div>
      </div>
    </Card>
  );
}
const Card = styled.div`
  height: 500px;
  width: 32%;
  @media (max-width: 910px) {
    width: 48%;
  }
  @media (max-width: 608px) {
    width: 100%;
  }
  margin-bottom: 3rem;
  background-color: white;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  .top {
    height: 52%;
    width: 100%;
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
    background-color: #ff2e3a;
    width: 100px;
    height: 30px;
    color: white;
    z-index: 99;

    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-align: left;
    font-size: 16px;
    letter-spacing: 1px;
  }

  h2 {
    padding: 22px 22px 0;
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    padding: 0 0 0 22px;
    line-height: 24px;
    margin: 0;
  }

  .intro {
    width: 100%;
  }

  a:hover {
    color: #ff2e3a;
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
    color: #ff2e3a;
  }

  .info {
    display: flex;
    color: #999;
    font-size: 14px;
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
