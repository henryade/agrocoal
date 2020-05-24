import React from 'react';

const Card = ({ data: { Image, backgroundColor, headerText, bodyText, link } }) => {
  return (
    <div className={`card ${backgroundColor}`}>
      <div className="flex card-image-container">
        <div className="card-image">
          <Image width="100%" height="100%"  />
        </div>
      </div>
      <div className="flex column card-body">
        <p className="card-header">{headerText}</p>
        <p className="card-text">{bodyText}</p>
        <div className="flex column card-read-more">
          <a href={link}>Read more</a>
        </div>
      </div>
    </div>
  );
}
 
export default Card;