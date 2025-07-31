'use client';

import { useEffect } from 'react';

export default function Loader() {
  return (
    <>
      <section id="loader"></section>
      <div className="loading">
        <div className="loading-main">
          <div className="loader-box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="loading-text">
            <h1><span>Building &nbsp;</span></h1>
            <h1><span>your &nbsp;</span></h1>
            <h1><span>experience </span></h1>
            <h1><span>...</span></h1>
          </div>
        </div>
      </div>
    </>
  );
}