import React from "react";

export function Container({ fluid, children}) {
    return <div className={`container${fluid ? "-fluid": ""}`}>{children}</div>;
}

export function Col({ size, children }) {
    return (
        <div
            classname={size.split(" ")
        .map(size => "col-" + size)
        .join(" ")}
        >
        {children}
        </div>
    );
}

