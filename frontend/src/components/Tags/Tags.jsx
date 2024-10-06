import React from 'react';

function Tags({ tags }) {
  return (
    <div className="tags">
      <h6>Tags</h6>
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          <a href={`#${tag}`} rel="tag">{tag}</a> {index !== tags.length - 1?<span>, </span>:""}
        </span>
      ))}
    </div>
  );
}

export default Tags;
