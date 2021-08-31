import React,{ useState, useEffect } from 'react';

const Joke = props => {

    var category = props.match.params.category;
    console.log(category);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setJokes(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (jokes) {
        return (
            <div>
                <h1>Joke Category: {jokes.categories[0]}</h1>
                <div>      
                    <img src={jokes.icon_url}  width='200' height='150' alt="Joke Image"/>
                </div>
                <div>
                    Joke: {jokes.value}
                </div>
            </div>
        );
    }

}
export default Joke;