import { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const handleIncrease = () => {
        setCount((count) => count + 1);
    };

    const handleDecrease = () => {
        setCount((count) => count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleSwitchSign = () => {
        setCount((count) => count * -1);
    };
    return (
        <>
            <button onClick={handleIncrease} data-testid="increase_count">
                Increase Count +
            </button>
            <button
                onClick={handleDecrease}
                style={{ border: "1px solid #000" }}
                data-testid="decrease_count"
            >
                Decrease Count -
            </button>
            <button onClick={handleReset} data-testid="reset_count">
                Reset
            </button>
            <button onClick={handleSwitchSign} data-testid="switch_sign">
                Switch Sign +/-
            </button>
            <p>
                Count is <span data-testid="count">{count}</span>
            </p>
        </>
    );
};

Counter.propTypes = {
    initialCount: PropTypes.number.isRequired,
};

export default Counter;
