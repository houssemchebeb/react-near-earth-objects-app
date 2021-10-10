import { render } from "@testing-library/react";
import Chart from "./Chart";
import { AppContext } from "./context";

jest.mock("react-google-charts", () => ({ data }) => (
  <div>{JSON.stringify(data.slice(1))}</div>
));

describe("Chart", () => {
  test("passes the right values to Google Chart", () => {
    const data = [
      ["a", 1, 2],
      ["b", 3, 4],
      ["c", 5, 6],
    ];
    const expected = JSON.stringify(data);
    const { container } = render(
      <AppContext.Provider value={{ data }}>
        <Chart />
      </AppContext.Provider>
    );
    expect(container.firstChild).toHaveTextContent(expected);
  });
});
