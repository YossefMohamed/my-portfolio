import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../actions/postActions";
import LoaderComponent from "../components/loader";
import { LoaderContainer } from "./blog";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

function PostPage(props) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!props.match.params.id) {
      props.history.push("/blog");
    }
    dispatch(getPost(props.match.params.id));
  }, []);
  const loader = useSelector((state) => state.getPostReducer.loading);
  const { post } = useSelector((state) => state.getPostReducer);
  React.useEffect(() => {
    if (!loader && !post._id) {
      props.history.push("/notfound");
      console.log(loader, post);
    }
  }, [post]);
  return (
    <React.Fragment>
      {loader ? (
        <LoaderContainer>
          <LoaderComponent />
        </LoaderContainer>
      ) : (
        <PostContainer>
          <PostImageContainer>
            <img
              src={`/images/${post.coverImage}`}
              alt={post.title}
              className="post-image"
            />
          </PostImageContainer>
          <div className="post-content">
            <PostTitle>
              <h2>{post.title}</h2>
            </PostTitle>
            <div className="post-details">
              <div className="date">
                <i className="fas fa-calendar-week"></i>{" "}
                <span className="time-cont">date published :</span>
                {` `}
                <Moment format="YYYY/MM/DD">{post.createdAt}</Moment>
              </div>

              <div className="date"> </div>
            </div>
            <PostContent>
              {<ReactMarkdown>{`${post.content}`}</ReactMarkdown>}
            </PostContent>
          </div>
          <NextPost>
            <div className="next-post real-next">
              {post.nextPost && post.nextPost.length
                ? "previous post"
                : "First Post"}
              <span
                onClick={(e) =>
                  props.history.push(`/post/${post.prevPost._id}`)
                }
              >
                {post.prevPost && post.prevPost.length
                  ? post.prevPost[0].title
                  : "Go To Blog Page"}
              </span>
            </div>
            <div className="next-post">
              {post.nextPost && post.nextPost.length
                ? "Next Post"
                : "Last Post"}
              <span
                onClick={(e) =>
                  props.history.push(`/post/${post.nextPost._id}`)
                }
              >
                {" "}
                {post.nextPost && post.nextPost.length
                  ? post.nextPost[0].title
                  : "Go To Blog Page"}
              </span>
            </div>

            <div></div>
          </NextPost>
        </PostContainer>
      )}
    </React.Fragment>
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
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
  }
`;
//calc
const PostContainer = styled.div`
  margin: 3rem 0;
  .time-cont {
    margin-right: 5px !important;
  }
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
