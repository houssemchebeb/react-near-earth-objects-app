import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.js";
import utils from "./utils";

const data = [
  ["123", 1.23, 2.34],
  ["456", 3.56, 4.67],
];

const orbitalBodies = ["abc", "def", "ghi"];

jest.mock("./utils", () => ({
  formatData: () => data,
  getOrbitalBodies: () => orbitalBodies,
  formatDataCSV: () => data,
}));

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("App", () => {
  test("handles server error", async () => {
    const fetchSpy = jest.spyOn(global, "fetch").mockRejectedValue(new Error());
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<App />);

    await waitFor(() => expect(fetchSpy).toHaveBeenCalledTimes(1));
    expect(alertSpy).toHaveBeenCalledWith("Fetching data failed!");
  });

  test("works properly", async () => {
    const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
    });
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    const formatDataSpy = jest.spyOn(utils, "formatData");

    render(<App />);

    // test if fetch is called
    await waitFor(() => expect(fetchSpy).toHaveBeenCalledTimes(1));
    expect(alertSpy).not.toHaveBeenCalled();

    // click the dropdown
    userEvent.click(screen.getByRole("button"));

    // test if all options are present
    for (let option of orbitalBodies) {
      expect(screen.getByText(new RegExp(option))).toBeInTheDocument();
    }

    // select an option
    userEvent.click(screen.getByText(orbitalBodies[1]));

    // test if the option is selected
    expect(formatDataSpy).toHaveBeenCalledWith({}, orbitalBodies[1]);

    // switch view chart → Table
    userEvent.click(screen.getByRole("checkbox"));

    // test if the data is present
    for (let row of data) {
      for (let element of row) {
        expect(screen.getByText(new RegExp(element))).toBeInTheDocument();
      }
    }
  });
});
