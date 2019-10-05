import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Player from "../Player";

it("renders a players name", () => {
  const wrapper = rtl.render(
    <Player name="Apetsi" country="Ghana" searches={33} />
  );
  const name = wrapper.queryByText(/apetsi/i);
  const country = wrapper.queryByText(/ghana/i);
  const searches = wrapper.queryByText(/33/i);
  expect(name).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(searches).toBeInTheDocument();
});
