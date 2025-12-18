import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import database from '../database/db'


export default function HomePage() {

    const [data, setData] = useState(database)



    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            data.map(viaggio => (
                                <div className="col" key={viaggio.id}>
                                    <Link to={`/${viaggio.id}`}>
                                        <div className="card">
                                            <h3>{viaggio.meta}</h3>
                                            <p>{viaggio.data_partenza} - {viaggio.data_ritorno}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }





                    </div>
                </div>
            </section >

        </>
    )
}