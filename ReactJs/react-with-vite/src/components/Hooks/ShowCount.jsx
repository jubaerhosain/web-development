import React from "react";

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
function ShowCount({ count, title }) {
    console.log(`rendering ${title}....`);

    return (
        <p>
            {title} is {count}
        </p>
    );
}

// React.memo() works like shouldComponentUpdate

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ShowCount);
