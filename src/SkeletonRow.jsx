import React from "react";
import Animation from "./Animation";
import SkeletonElement from "./SkeletonElement";

const SkeletonRow = () => {
  return (
    <div className="skeletonrow">
      <div className="title">
        <SkeletonElement type="title" />
      </div>
      <div className="row-wrapper">
        {[1, 2].map((n) => (
          <SkeletonElement key={n} type="rowposter" />
        ))}
      </div>
      <Animation />
    </div>
  );
};

export default SkeletonRow;
