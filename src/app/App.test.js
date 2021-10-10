import { render, waitFor } from "@testing-library/react";
import App from "./App.js";

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

    render(<App />);

    await waitFor(() => expect(fetchSpy).toHaveBeenCalledTimes(1));
    expect(alertSpy).not.toHaveBeenCalled();
  });
});
