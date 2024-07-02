

function Home() {
    let things = ["pokemon things", "mabye pokemon things"]

    if (things) {
        return (
            <>
                <h1>Pokedex</h1>
                <ul className="list-group">
                    {things.map((things) => (
                        <li>{things}</li>
                    ))}
                </ul>
                <a href="/Pokemon/ditto">Ditto</a>
            </>
        );
    } else {
        return <><h1>things</h1></>
    }
}

export default Home;