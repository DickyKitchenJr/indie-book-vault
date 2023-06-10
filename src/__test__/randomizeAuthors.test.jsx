import randomizeAuthors from "../helpers/randomizeAuthors";
import { describe, expect, it } from "vitest";

describe(randomizeAuthors, () => {
    // side note, while technically possible for two matching arrays to remain matching after shuffling one, the chances decrease as the length of the array increases
    it("takes and array and returns it in random order", () => {
    // create two matching arrays including numbers 0-99 (using 100 numbers to decrease chances of match once shuffled)
      const numbers = [];
      let count = 0;
      while (numbers.length < 100) {
        numbers.push(count++);
      }
      let newNumbers = [];
      while (newNumbers.length < 100) {
        newNumbers.push(count++);
      }
    // randomize the numbers in newNumbers so that they should not equal numbers
      expect(randomizeAuthors(newNumbers)).not.toEqual(numbers);
    })

    it("returns the same length of an array as it starts out with", () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(randomizeAuthors(newNumbers).length).toEqual(numbers.length)
    })
})