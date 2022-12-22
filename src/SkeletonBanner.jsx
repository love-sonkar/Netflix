import React from "react";
import Animation from "./Animation";
import SkeletonElement from "./SkeletonElement";

const SkeletonBanner = () => {
  return (
    <div className="bannerSkeleton max-12">
      <SkeletonElement type="banner" />
      <div style={{ display: "flex" }}>
        <SkeletonElement type="button" />
        <SkeletonElement type="button" />
      </div>
      <SkeletonElement type="title" />
      <SkeletonElement type="des" />
      <Animation />
    </div>
  );
};

export default SkeletonBanner;
