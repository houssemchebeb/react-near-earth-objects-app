import { render, screen } from "@testing-library/react";
import Table from "./Table";
import { AppContext } from "./context";

describe("Table", () => {
  test("displays the right data values", () => {
    const data = [
      ["123", 1.23, 2.34],
      ["456", 3.56, 4.67],
    ];
    render(
      <AppContext.Provider value={{ data }}>
        <Table />
      </AppContext.Provider>
    );
    for (let row of data) {
      for (let element of row) {
        expect(screen.getByText(new RegExp(element))).toBeInTheDocument();
      }
    }
  });
});
