import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { AnagramForm } from ".";

describe("<AnagramForm />", () => {
  /* const user = userEvent.setup(); */

  test("If user enters two strings anagram, they will recieve that feedback", () => {
    render(<AnagramForm />);

    screen.findByRole("");
  });
});
