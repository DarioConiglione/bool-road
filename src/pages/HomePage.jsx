import { useState } from 'react'
import database from '../database/db'


export default function HomePage() {

    const [data, setData] = useState(database)
    console.log(data);


    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            data.map(viaggio => (
                                <div className="col" key={viaggio.id}>
                                    <div className="card">
                                        <h3>{viaggio.meta}</h3>
                                        <p>{viaggio.data_partenza}</p>
                                        <p>{viaggio.data_ritorno}</p>
                                    </div>
                                </div>
                            ))
                        }





                    </div>
                </div>
            </section >

        </>
    )
}