import React from "react";
import { UseGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading, removePost } = UseGlobalContext();
  if (isLoading) {
    return (
      <>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  }
  return (
    <>
    <div >
      {hits.map((currPost) => {
        const {title, author, objectID, url, num_comments} = currPost;
        return (
            <div className="heading" key={objectID}>
              <div className="card card-3">
                <div className="card__icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <p className="card__exit" onClick={()=>removePost(objectID)}>
                  <i className="fas fa-times"></i>
                </p>
                <div className="title_div">
                <h2 className="card__title">{title}</h2>
                </div>
                <div className="auther_div">
                <p> By <strong>{author}</strong> | {num_comments} comments </p>
                </div>
                <div className="twoButton">
                <p className="card__apply">
                  <a className="card__link blue" href={url} target="_blank">
                    Visit Now <i className="fas fa-arrow-right"></i>
                  </a>
                </p>
                  <a className="card__link red" href="#" onClick={()=>removePost(objectID)}>
                    Remove <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
        );
      })}
    </div>
    </>
  );
};

export default Stories;
