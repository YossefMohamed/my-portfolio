import React from "react";
import styled from "styled-components";
import BlogItem from "../components/blogItem";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./blog.css";
import { getPosts, NumberOfPages } from "../actions/postActions";
import { getTages } from "../actions/tagActions";
import LoaderComponent from "../components/loader";
function Blog({ history, match, location }) {
  const dispatch = useDispatch();
  let maxNumberOfPages = useSelector(
    (state) => state.numberOfPagesReducer.pages
  );

  const tagBlog = match.params.tag ? match.params.tag : "all";
  const [page, setPage] = React.useState(
  );
  
  React.useEffect(()=>{
    setPage(    location.hash ? location.hash.substring(1) : 1
)
  },[location])
  React.useEffect(() => {
    dispatch(NumberOfPages("all"));
    dispatch(getTages());
    setPosts([]);

    if (tagBlog !== "all") {
      dispatch(getPosts(page, tagBlog));
    }
  }, [match]);

  const { tages } = useSelector((state) => state.getTagesReducer);
  const postsArr = useSelector((state) => state.getPostsReducer.posts);
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
        setPage(    location.hash ? location.hash.substring(1) : 1
        );
    if (page > maxNumberOfPages) history.push("/404-not-found");
    dispatch(getPosts(location.hash ? location.hash.substring(1) : 1, tagBlog));
    setPosts(postsArr);
  }, []);
  React.useEffect(() => {
    setPosts([]);
    if (page > maxNumberOfPages) history.push("/404-not-found");

    history.push("/blog#" + page);

    dispatch(getPosts(page, tagBlog));
  }, [page]);
  React.useEffect(() => {
    setPosts(postsArr);
  }, [postsArr]);

  const loader = useSelector((state) => state.getPostsReducer.loading);
  return (
    <React.Fragment>
      {loader ? (
        <LoaderContainer>
          <LoaderComponent />
        </LoaderContainer>
      ) : (
        <BlogContainer>
          <BlogTitle>
            <span>Articles</span> ????
          </BlogTitle>
          <BlogDescribtion>
            <div className="blog-tages">
              <span
                onClick={(e) => history.push("/blog")}
                style={{
                  backgroundColor: `${
                    tagBlog === "all" && "rgba(0, 0, 0, 0.07)"
                  }`,
                  color: `${tagBlog === "all" && "white !important"}`,
                }}
              >
                All
              </span>
              {tages.map((tag, idx) => (
                <span
                  key={idx}
                  onClick={(e) => history.push("/blog/" + tag)}
                  style={{
                    backgroundColor: `${
                      match.params.tag === tag && "rgba(0, 0, 0, 0.07)"
                    }`,
                    color: `${match.params.tag === tag && "white !important"}`,
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </BlogDescribtion>

          <div className="postsContainer">
            {posts.map((post, idx) => (
              <BlogItem post={post} key={idx} />
            ))}
          </div>
          {tagBlog === "all" && <Paginate page={page} setPage={setPage} />}
        </BlogContainer>
      )}
    </React.Fragment>
  );
}
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`;
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
    span {
      cursor: pointer;
      opacity: 0.85;
      &:hover {
        opacity: 1;
      }
    }
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
    justify-content: flex-start;
    @media (max-width: 910px) {
      justify-content: space-between;
    }
    @media (max-width: 608px) {
      justify-content: space-between;
    }
  }
`;
const BlogTitle = styled.div`
  font-size: ${sizes.huge};

  color: ${colors.main};
`;

function Paginate(props) {
  const history = useHistory();

  const [currentPage, setCurrentPage] = React.useState(1 * props.page);

  let maxPages = useSelector((state) => state.numberOfPagesReducer.pages);
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
          props.setPage(number);
        }}
      >
        {number}
      </div>
    );
  }
  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
      props.setPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      props.setPage(currentPage - 1);
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
