import React from "react";
import PlayerList from "../PlayerList";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let mockData = [];

let mockData2 = [];

it("renders loading if player list is empty to the dom", () => {
  const wrapper = rtl.render(<PlayerList searches={mockData} />);
  const loading = wrapper.queryByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

it("renders loading if player list is empty to the dom", () => {
  const wrapper = rtl.render(<PlayerList searches={mockData} />);
  const loading = wrapper.queryByText(/loading/i);
  expect(loading).toBeInTheDocument();
});
