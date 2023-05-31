import React from 'react'

// PURPOSE: take all authors in the genre and randomize them then display
function RandomAuthors({ authors }) {
    const shuffledList = authors;

    const randomizeAuthors = (genreAuthors) =>{
        let count = genreAuthors.length;
        let firstItemHolder;
        let swappedItem;

        // PURPOSE: while count is above 0
        while(count){
            // PURPOSE: pick a random item and subtract 1 from count
            swappedItem = Math.floor(Math.random() * count--);
            // PURPOSE: temporarily hold the information about to be replaced by the swap
            firstItemHolder = genreAuthors[count];
            // PURPOSE: swap the current item with secondItem
            genreAuthors[count] = genreAuthors[swappedItem];
            // PURPOSE: put the replaced item where secondItem originally was
            genreAuthors[swappedItem] = firstItemHolder;
        }
        return genreAuthors
    }

    randomizeAuthors(shuffledList);

  return (
    <>
    {shuffledList.length === 0 ? <p>Awaiting Authors</p> : 
    shuffledList.map(author =>{
        return(
            <>
            <div key={shuffledList[shuffledList.indexOf(author)] + author.lastName}>
                <p>Name: {author.firstName} {author.lastName}</p>
                <p>Genres:</p><ul>{author.subGenre.length === 1 ? <li key={"0G" + author.lastName}>{author.subGenre[0]}</li> : author.subGenre.map(genre =>{return(<li key={author.subGenre[author.subGenre.indexOf(genre)] + "G" + author.lastName}>{genre}</li>)})}</ul>
                <p>Bio: {author.bio.length === 1 ? author.bio[0] : author.bio.map(sentence =>{return <><span key={author.bio[author.bio.indexOf(sentence)] + "B" + author.lastName}>{sentence}</span><br/><br/></>})}</p>
                <p>Website: {author.website}</p>
                <p>Social Media:</p><ul>{author.socialMedia.length === 1 ? <li key={"0SM" + author.lastName}>{author.socialMedia[0]}</li> : author.socialMedia.map(platform =>{return(<li key={author.socialMedia[author.socialMedia.indexOf(platform)] + "SM" + author.lastName}>{platform}</li>)})}</ul>
                <br />
            </div>
            </>
        )
    })
    }
    </>
  )
}

export default RandomAuthors

