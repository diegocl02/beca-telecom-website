import React from 'react'
import charity from '../assets/img/charity1.png'

export default () => {
    return (
        <section className="page-section" id="goal">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-3">
                        <img src={charity} alt={"question"} style={{ width: "50%" }}></img>
                    </div>

                    <div className="col-md text-center">
                        <h2 className="text-uppercase mb-4">Metas</h2>
                        <h3 className="text-muted m-auto">
                            Nos hemos trazado la meta de reunir S/ 12,000 para poder dar 2 becas o su equivalente en medias becas o cuarto de beca, la idea es ayudar a la mayor cantidad de alumnos posible.
                            El monto a donar es completamente voluntario, no existe monto mínimo o máximo, cualquier ayuda va a ser más que bienvenida.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}