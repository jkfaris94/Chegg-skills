import React from "react";

function ClickTimes({ onClick }) {
    return (
        <section>
            <button role="button" onClick={onClick}> Click Me</button>
        </section>
    );
}

export default ClickTimes;