import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";

function PostPage(props) {
  console.log(props.match.params.id);
  return (
    <PostContainer>
      <PostImageContainer>
        <img
          src="https://wallpapercave.com/wp/wp4923991.png"
          alt="PostImage"
          className="post-image"
        />
      </PostImageContainer>
      <div className="post-content">
        <PostTitle>
          <h2>Is React Really Destroyed Web Performance🤔</h2>
        </PostTitle>
        <div className="post-details">
          <div className="date">
            <i className="fas fa-calendar-week"></i> date published : May 28,
            2015
          </div>

          <div className="date">
            {" "}
            <i className="fas fa-eye"></i> 600 views{" "}
          </div>
        </div>
        <PostContent>
          This is my first post on my new fake blog! How exciting! I’m sure I’ll
          write a lot more interesting things in the future. Oh, and here’s a
          great quote from this Wikipedia on salted duck eggs. A salted duck egg
          is a Chinese preserved food product made by soaking duck eggs in
          brine, or packing each egg in damp, salted charcoal. In Asian
          supermarkets, these eggs are sometimes sold covered in a thick layer
          of salted charcoal paste. The eggs may also be sold with the salted
          paste removed, wrapped in plastic, and vacuum packed. From the salt
          curing process, the salted duck eggs have a briny aroma, a
          gelatin-like egg white and a firm-textured, round yolk that is bright
          orange-red in color.
        </PostContent>
      </div>
      <NextPost>
        <div className="next-post real-next">
          precious post
          <span>How To Encrypt on Linux</span>
        </div>
        <div className="next-post">
          Next Post
          <span>How To Add Route on Linux</span>
        </div>

        <div></div>
      </NextPost>
    </PostContainer>
  );
}
const PostContent = styled.div`
  font-size: calc(${sizes.big} + -5px);
  color: ${colors.main};
  &::first-letter {
    font-size: ${sizes.huge};
  }
  line-height: 200%;

  /* margin: 5rem 0; */
`;
const PostTitle = styled.div`
  h2 {
    color: ${colors.main};
    font-size: calc(${sizes.medium} + 6px);
    font-weight: bolder;
    text-transform: none;
  }
`;
const PostContainer = styled.div`
  margin: 3rem 0;
  .post-details {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin: 2rem 0;
    font-size: ${sizes.small};
    font-weight: 500;
    .date {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      color: ${colors.main};
    }
    i {
      margin-right: 10px;
      color: ${colors.secondary};
    }
  }
  .post-content {
    margin: 4rem 0;
  }
`;

const NextPost = styled.div`
  border: 7px solid ${colors.secondary};
  border-left: 0;
  border-right: 0;
  display: flex;
  justify-content: space-between;
  min-height: 5rem;
  .next-post {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 5rem;
    padding: 0 1rem;
    justify-content: center;
    align-items: flex-end;
    font-size: calc(${sizes.small} + -3px);
  }
  span {
    color: ${colors.main};
    font-weight: bold;
    margin-top: 5px;
    font-size: ${sizes.small};
    cursor: pointer;
    text-align: right;
  }
  .real-next {
    align-items: flex-start;
    text-align: left !important;

    span {
      text-align: left !important;
    }
  }
`;

const PostImageContainer = styled.div`
  width: calc(100% - 8px);
  height: 55vh;
  border: 5px solid ${colors.main};
  box-shadow: 8px 8px ${colors.secondary};
  .post-image {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 45vh;
  }
`;
export default PostPage;
