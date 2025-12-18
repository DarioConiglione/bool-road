import { useParams } from "react-router-dom"
import database from "../database/db"
import { useState } from "react"

export default function Journey() {

    const [trip, setTrip] = useState(database)
    const { id } = useParams()
    const [search, setSearch] = useState('')
    const thisTrip = trip.find(thisTrip => parseInt(id) === thisTrip.id)

    const filteredParticipant = thisTrip.partecipanti.filter(partecipante => {
        const risultato = `${partecipante.nome} ${partecipante.nome}`.toLocaleLowerCase()
        return risultato.includes(search.toLocaleLowerCase())
    })




    return (
        <>
            <div className="container">

                <div>
                    <input
                        className="form-control my-3"
                        type="text"
                        placeholder="Cerca per nome e cognome..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </div>


                <div className="row">
                    {
                        filteredParticipant.map(player => (

                            <div key={player.id} className="col">
                                <div className="card">
                                    <h5>{player.nome} {player.cognome}</h5>
                                    <p>{player.email} {player.numero}</p>

                                </div>
                            </div>

                        ))

                    }

                </div>
            </div>
        </>
    )
}
