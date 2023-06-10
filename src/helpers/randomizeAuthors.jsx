const randomizeAuthors = (genreAuthors) => {
  let count = genreAuthors.length;
  let firstItemHolder;
  let swappedItem;

  // PURPOSE: while count is above 0
  while (count) {
    // PURPOSE: pick a random item and subtract 1 from count
    swappedItem = Math.floor(Math.random() * count--);
    // PURPOSE: temporarily hold the information about to be replaced by the swap
    firstItemHolder = genreAuthors[count];
    // PURPOSE: swap the current item with secondItem
    genreAuthors[count] = genreAuthors[swappedItem];
    // PURPOSE: put the replaced item where secondItem originally was
    genreAuthors[swappedItem] = firstItemHolder;
  }
  return genreAuthors;
};

export default randomizeAuthors;