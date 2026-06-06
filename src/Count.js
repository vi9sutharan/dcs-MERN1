import React, { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0, 1);
    useEffect(() => {
        const countTimer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        return () => clearInterval(countTimer);
    }, []);
    return (
        <div>
            <h1>
                Count: {count}
            </h1>
            
        </div>
    );
}

export default Count;