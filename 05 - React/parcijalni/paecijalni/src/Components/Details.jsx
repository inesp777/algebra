export default function Details({ name, location, bio, repo }) {
    return (
        <div>
            <h1> {name}</h1>
            <p> Bio: {bio}</p>
            <p> LOCATION: {location}</p>
            {console.log(repo)}
             {repo.map(item=><div key={item.id}>
                <p>{item.name}</p>
                </div>)}

        </div>

    )

}

