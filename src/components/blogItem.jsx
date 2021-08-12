import React from "react";
import styled from "styled-components";
import colors from "../util/colors";
import sizes from "../util/sizes";
import { Link } from "react-router-dom";
function BlogItem() {
  return (
    // <BLogItem>
    //   <div className="image-container">
    //     <BlogPicture src="https://gatsby-persoanl.netlify.app/static/e3f68d71a295941dde8a20efd117eb38/fc91b/b77a3d5bbb3c4138f637152fc823caa2.webp" />
    //   </div>
    //   <BlogBreif>
    //     <div className="post-tag">
    //       <span>#Web_development</span>
    //       <span>#CSS</span>
    //       <span>#Tricks</span>
    //     </div>

    //     <div className="post-title">New Beginnings</div>
    //     <div className="post-details">
    //       <div className="date">
    //         <i className="fas fa-calendar-week"></i> date published : May 28,
    //         2015
    //       </div>

    //       <div className="date">
    //         {" "}
    //         <i className="fas fa-eye"></i> views{" "}
    //       </div>
    //     </div>
    //     <div className="post-content">
    //       Radio buttons and checkboxes have long been components that cause
    //       users confusion. These components are often used in the same context,
    //       but look completely different.
    //     </div>
    //     <div className="readmore">
    //       <Link to="/post/id">read more → </Link>
    //     </div>
    //   </BlogBreif>
    // </BLogItem>
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
          <a href="#">React And Performance</a>
        </h2>

        <p class="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          consectetur mauris sed mauris sagittis, nec pretium metus posuere.{" "}
        </p>
        <div class="info">
          <ion-icon name="time"></ion-icon>
          <p class="info">2 days ago</p>
          <ion-icon name="chatboxes"></ion-icon>
          <p class="info">
            <a href="/a">13 comments</a>
          </p>
        </div>
      </div>
    </Card>
  );
}
// const BLogItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   min-height: 20rem;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
//   .image-container {
//     width: 50%;
//     overflow: hidden;
//     @media (max-width: 768px) {
//       width: 100% !important;
//     }
//   }
//   margin: 3rem 0;

//   @media (max-width: 768px) {
//     padding: 1rem 5px;
//     border: 5px solid black;
//     box-shadow: 15px 15px ${colors.secondary};
//     width: calc(100% - 15px) !important;
//   }
// `;

// const BlogPicture = styled.img`
//   width: 100%;
//   height: 100%;
//       &:hover {
//         transform: scale(1.5) rotate(20deg);
//       }
//     }

// `;

// const BlogBreif = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: flex-start;
//   padding: 1rem 3rem;
//   .post-title {
//     font-size: ${sizes.huge};
//     color: ${colors.secondary};
//     margin: 0.5rem 0 0;
//     font-weight: bold;
//   }
//   flex-direction: column;
//   .post-tag {
//     span {
//       margin-right: 10px;
//       font-weight: bold;
//       color: ${colors.secondary};
//     }
//     display: flex;
//     justify-content: flex-start;
//   }
//   .post-content {
//     font-size: ${sizes.medium};
//     color: ${colors.main};
//     flex-grow: 1;
//     display: flex;
//     justify-content: center;
//   }
//   .readmore {
//     margin-top: auto;
//     font-size: ${sizes.medium};
//     font-weight: bold;
//     margin-bottom: 3rem;
//     color: ${colors.main};
//     cursor: pointer;
//   }
//   .post-details {
//     display: flex;
//     width: 100%;
//     justify-content: flex-start;
//     margin: 1rem 0;
//     .date {
//       display: flex;
//       align-items: center;
//       margin-right: 1rem;
//       color: ${colors.main};
//       font-weight: 300;
//     }
//     i {
//       margin-right: 10px;
//       color: ${colors.secondary};
//     }
//   }
//   @media (max-width: 768px) {
//     width: 100% !important;
//     padding: 2rem 0;
//     .post-details {
//       margin: 0.75rem.25rem;

//       .date {
//         margin: 0 0.25rem 0 0;
//         font-size: calc(${sizes.small} + -4px);
//       }
//     }
//     .post-content {
//       font-size: ${sizes.small};
//       color: ${colors.main};
//       font-weight: bold;
//     }
//     .post-title {
//       font-size: ${sizes.huge};
//       color: ${colors.secondary};
//       margin: 0.5rem 0 0;
//       font-weight: bold;
//     }
//   }
//   .post-tag {
//     span {
//       margin-right: 10px;
//       font-weight: bold;
//       color: ${colors.secondary};
//       font-size: ${sizes.small};
//     }
//     display: flex;
//     justify-content: flex-start;
//   }
//   .readmore {
//     display: flex;
//     align-items: flex-end;
//     margin: 1.5rem 0 0;
//   }
// `;

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
