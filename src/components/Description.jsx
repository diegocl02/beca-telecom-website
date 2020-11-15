import React from 'react'
import question from '../assets/img/question.png'

export default () => {
    return (
        <section className="page-section" id="description">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-3">
                        <img src={question} alt={"question"} style={{ width: "50%" }}></img>
                    </div>

                    <div className="col-md text-center">
                        <h2 className="text-uppercase mb-4">Beca Telecom PUCP</h2>
                        <h3 className="text-muted m-auto">
                            Es una iniciativa de los egresados de la especialidad de Ing. de Telecomunicaciones de la PUCP y la AITEL, para reunir un fondo de dinero que se destine a cubrir los costos académicos de los alumnos de la especialidad que más lo necesiten.
                        </h3>
                    </div>
                </div>


            </div>
        </section>
    )
}