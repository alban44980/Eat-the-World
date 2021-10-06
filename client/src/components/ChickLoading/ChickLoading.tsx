import React from 'react';
import './ChickLoading.css';

function ChickLoading() {
  return (
    <div className="scene">
      <div className="sky">
        <div className="sky__cloud-group">
          <div className="sky__cloud">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud sky__cloud--small">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud sky__cloud--small">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud sky__cloud--small">
            <div className="sky__cloud--bubbles"></div>
          </div>
        </div>
        <div className="sky__cloud-group">
          <div className="sky__cloud">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud sky__cloud--small">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud sky__cloud--small">
            <div className="sky__cloud--bubbles"></div>
          </div>
          <div className="sky__cloud sky__cloud--small">
            <div className="sky__cloud--bubbles"></div>
          </div>
        </div>
      </div>
      <div className="bird">
        <div className="bird__head">
          <div className="bird__head--hairs"></div>
          <div className="bird__head--eye"></div>
          <div className="bird__head--spot"></div>
          <div className="bird__head--beak"></div>
          <div className="bird__head--reflection">
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
            <div className="bird__head--reflection--dot"></div>
          </div>
        </div>
        <div className="bird__body"></div>
        <div className="bird__wing"></div>
        <div className="bird__legs">
          <div className="bird__leg bird__leg--left"></div>
          <div className="bird__leg bird__leg--right"></div>
        </div>
      </div>
    </div>
  );
}

export default ChickLoading;
