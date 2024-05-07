"use client";

import React from "react";

const VR = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <iframe
        src="https://www.youtube.com/embed/_DdeQybDzAo?si=FtaNeVZ6qd1GZjpr"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen="true"
        className="w-2/3 aspect-video mt-20"
      />
      {/* <video className="w-2/3 aspect-video mt-20" controls preload="none">
        <source src="/videos/tswift-vr.mp4" type="video/mp4" />
      </video> */}
    </section>
  );
};

export default VR;
