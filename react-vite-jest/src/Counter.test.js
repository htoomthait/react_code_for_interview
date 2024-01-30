import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";

describe(Counter, () => {
    it("counter displays corret initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = getByTestId("count").innerHTML;

        expect(countValue).toEqual("0");
    });

    it("is increment button is working properly", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const btnIncrease = getByTestId("increase_count");
        const countValue = getByTestId("count");

        // simulate the button click first time
        fireEvent.click(btnIncrease);

        // check the result first time click
        expect(countValue.innerHTML).toEqual("1");

        // simulate the button click second time
        fireEvent.click(btnIncrease);

        // check the result second time click
        expect(countValue.innerHTML).toEqual("2");
    });

    it("is decrement button is working properly", () => {
        const { getByTestId } = render(<Counter initialCount={5} />);
        const btnDecrease = getByTestId("decrease_count");
        const countValue = getByTestId("count");

        // simulate the button click first time
        fireEvent.click(btnDecrease);

        // check the result first time click
        expect(countValue.innerHTML).toEqual("4");

        // simulate the button click second time
        fireEvent.click(btnDecrease);

        // check the result second time click
        expect(countValue.innerHTML).toEqual("3");
    });

    it("is reset button is working properly", () => {
        const { getByTestId } = render(<Counter initialCount={32} />);
        const btnReset = getByTestId("reset_count");
        const countValue = getByTestId("count");

        // simulate the button click first time
        fireEvent.click(btnReset);

        // check the result first time click
        expect(countValue.innerHTML).toEqual("0");
    });

    it("is reset button is working properly", () => {
        const { getByTestId } = render(<Counter initialCount={32} />);
        const btnSwitchSign = getByTestId("switch_sign");
        const countValue = getByTestId("count");

        // simulate the button click first time
        fireEvent.click(btnSwitchSign);

        // check the result first time click
        expect(countValue.innerHTML).toEqual("-32");

        // simulate the button click second time
        fireEvent.click(btnSwitchSign);

        // check the result second time click
        expect(countValue.innerHTML).toEqual("32");
    });
});
