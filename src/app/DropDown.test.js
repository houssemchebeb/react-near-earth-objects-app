import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDown from "./DropDown";
import { AppContext } from "./context";

const options = ["aaa", "bbb", "ccc"];

jest.mock("./utils", () => ({
  getOrbitalBodies: () => options,
}));

describe("DropDown", () => {
  test("shows the right options and dispatch the selected option", () => {
    const value = {
      APIData: {},
      selectedOrbitalBody: "",
      setSelectedOrbitalBody: jest.fn(),
    };
    render(
      <AppContext.Provider value={value}>
        <DropDown />
      </AppContext.Provider>
    );

    // click the dropdown to show options
    userEvent.click(screen.getByRole("button"));

    // test if all options are displayed
    for (let option of options) {
      expect(screen.getByText(option)).toBeInTheDocument();
    }

    // select an option
    userEvent.click(screen.getByText(options[1]));

    // test if setSelectedOrbitalBody calls with the selected option
    expect(value.setSelectedOrbitalBody).toHaveBeenCalledTimes(1);
    expect(value.setSelectedOrbitalBody).toHaveBeenCalledWith(options[1]);
  });
});
