import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AnagramForm } from ".";

describe("<AnagramForm />", () => {
  const user = userEvent.setup();

  it("If user enters two string anagram, they will recieve that feedback", async () => {
    render(<AnagramForm />);

    const inputOne = screen.getByTestId("wordOne");
    const inputTwo = screen.getByTestId("wordTwo");

    await user.type(inputOne, "hej");
    await user.type(inputTwo, "ehj");
    await user.click(screen.getByRole("button", { name: /check/i }));

    expect(
      screen.queryByText(/hej and ehj are anagrams!/i)
    ).toBeInTheDocument();
  });
});
