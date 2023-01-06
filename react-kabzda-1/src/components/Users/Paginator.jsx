import s from "./User.module.css";
import React from "react";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let currentPage = props.currentPage;

    let pages = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 1 && i < pagesCount) {
            pages.push(i);
        }
    }
    pages.unshift(1);
    pages.push(pagesCount);

    return (
        <div className={s.pagination}>
            {
                pages.map(p => {
                    return <span onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p && s.selectPage}>{p}</span>
                })
            }
        </div>
    )
}

export default Paginator;