
import React from "react";
import { Link } from "react-router-dom";

export default function Heading({ heading, title, subtitle }) {
    return (
        <>
            <div className="p-0 mb-5 container-fluid page-header bg-image">
                <div className="py-5 container-fluid page-header-inner" style={{ height: "200px" }}>
                    <div className="container pb-5 text-center">
                        <h1 className="mb-3 text-white display-3 animated slideInDown">
                            {heading}
                        </h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item">
                                    <Link to="/">{title}</Link>
                                </li>
                                <li
                                    className="text-white breadcrumb-item active"
                                    aria-current="page"
                                >
                                    {subtitle}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
