import { SyntheticEvent, useRef, useState } from "react";
import { AnagramDiv } from "./styled";

export const AnagramForm = () => {
  const wordOneRef = useRef<HTMLInputElement>(null);
  const wordTwoRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string | null>(null);

  const checkAnagram = (e: SyntheticEvent) => {
    e.preventDefault();
    setResult(null);

    const enteredWordOne = wordOneRef.current?.value.toLowerCase();
    const enteredWordTwo = wordTwoRef.current?.value.toLowerCase();

    if (
      !enteredWordOne ||
      !enteredWordTwo ||
      enteredWordOne.length !== enteredWordTwo.length
    ) {
      return setResult("Please enter two words of the same length.");
    }

    if (enteredWordOne === enteredWordTwo) {
      return setResult("Please enter two different words of the same length.");
    }

    const anagramCheckOne = enteredWordOne?.split("").sort().join("");
    const anagramCheckTwo = enteredWordTwo?.split("").sort().join("");

    if (anagramCheckOne !== anagramCheckTwo) {
      return setResult(
        `${enteredWordOne} and ${enteredWordTwo} are NOT anagrams!`
      );
    }

    return setResult(`${enteredWordOne} and ${enteredWordTwo} are anagrams!`);
  };

  return (
    <AnagramDiv>
      <h1>Anagram evaluator</h1>
      <p>Please enter two words</p>
      <form onSubmit={checkAnagram}>
        <input type="text" name="wordOne" ref={wordOneRef} />
        <input type="text" name="wordOne" ref={wordTwoRef} />
        <input type="submit" value="Check" />
      </form>
      {result && <p>{result}</p>}
    </AnagramDiv>
  );
};
