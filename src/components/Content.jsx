import React, {useState, useEffect} from "react";
import axios from "axios";
import ContentItem from "./ContentItem";


function Content({term}) {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        axios.get('https://603e38c548171b0017b2ecf7.mockapi.io/homes').then(({data}) => {
            setHomes(data)
        }).catch(() => {
            console.log('server error')
        });
    }, [])

    const filteredHomes = homes.filter(home => {
        return home.title.toLowerCase().includes(term.toLowerCase())
    })


    return (
        <div className="container">
            {
                filteredHomes.map(obj => <ContentItem key={obj.id} {...obj} />)
            }
        </div>
    )
}

export default Content;