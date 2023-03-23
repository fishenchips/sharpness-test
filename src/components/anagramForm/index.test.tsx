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
    await user.type(inputTwo, "Ehj");
    await user.click(screen.getByRole("button", { name: /check/i }));

    expect(
      screen.queryByText(/hej and ehj are anagrams!/i)
    ).toBeInTheDocument();
  });

  it("If user enters the same word twice, they will recieve that feedback", async () => {
    render(<AnagramForm />);

    const inputOne = screen.getByTestId("wordOne");
    const inputTwo = screen.getByTestId("wordTwo");

    await user.type(inputOne, "same");
    await user.type(inputTwo, "SAME");
    await user.click(screen.getByRole("button", { name: /check/i }));

    expect(
      screen.queryByText(
        /Please enter two different words of the same length./i
      )
    ).toBeInTheDocument();
  });

  it("If user enters words that aren't an anagram, they will recieve that feedback", async () => {
    render(<AnagramForm />);

    const inputOne = screen.getByTestId("wordOne");
    const inputTwo = screen.getByTestId("wordTwo");

    await user.type(inputOne, "football");
    await user.type(inputTwo, "handball");
    await user.click(screen.getByRole("button", { name: /check/i }));

    expect(
      screen.queryByText(/football and handball are NOT anagrams!/i)
    ).toBeInTheDocument();
  });
});
