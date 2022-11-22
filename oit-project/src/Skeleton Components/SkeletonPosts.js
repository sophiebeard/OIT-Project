import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonPosts = ({ theme }) => {
    const themeClass = theme || 'light';

    return (
        <div className={`skeleton-wrapper ${themeClass}`} >
            <div className="skeleton-posts">
                <SkeletonElement type="picture" />
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div >
    )
}

export default SkeletonPosts;