import React from "react";
import PlayerList from "../PlayerList";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let mockData = [];

let mockData2 = [{ name: "Apetsi", country: "Ghana", searches: 33, id: 1 }];

it("renders loading if player list is empty to the dom", () => {
  const wrapper = rtl.render(<PlayerList searches={mockData} />);
  const loading = wrapper.queryByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

it("renders player list to the dom", () => {
  const wrapper = rtl.render(<PlayerList searches={mockData2} />);
  const name = wrapper.queryByText(/apetsi/i);
  expect(name).toBeInTheDocument();
});
