import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SwitchButton from "./SwitchButton";
import { AppContext } from "./context";

describe("SwitchButton", () => {
  test("calls setShowTable with the right value when clicked", () => {
    const value = {
      showTable: false,
      setShowTable: jest.fn(),
    };
    render(
      <AppContext.Provider value={value}>
        <SwitchButton />
      </AppContext.Provider>
    );
    userEvent.click(screen.getByRole("checkbox"));
    expect(value.setShowTable).toHaveBeenCalledTimes(1);
    expect(value.setShowTable).toHaveBeenCalledWith(true);
  });
});
