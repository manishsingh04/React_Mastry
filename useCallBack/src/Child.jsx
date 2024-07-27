import { memo } from "react";

const Child = ({ two, settwo }) => {
    console.log("Child is rendered....");
    Child.propTypes = two, settwo;
    return (
        <>
            <h1>Child:{two}</h1>
        </>
    );
};

export default memo(Child)