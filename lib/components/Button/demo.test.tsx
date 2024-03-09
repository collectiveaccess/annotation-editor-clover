import { describe, it, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./index";

test("test truthy", () => {
  expect(true).toBe(true);
});

describe("render", () => {
  it("renders the button", () => {
    render(<Button />);
    expect(true).toBeTruthy();
  });
});
