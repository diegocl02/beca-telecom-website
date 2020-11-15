import React from 'react'
import scolarship from '../assets/img/scolarship.png'

export default () => {
    return (
        <section className="page-section bg-light" id="howto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md text-center">
                        <h2 className="text-uppercase mb-4">Soy estudiante ¿Cómo puedo postular?</h2>
                        <h3 className="text-muted m-auto">
                            Se realizará una convocatoria donde los alumnos interesados podrán presentarse exponiendo su caso para que sea estudiado por un comité evaluador que tendrá la responsabilidad de definir a los beneficiarios de la beca.
                            Este comité evaluador estará integrado por 2 egresados, el presidente de AITEL y, en la medida de lo posible, un profesor o autoridad de la universidad.
                        </h3>

                        <h3 className="text-muted m-auto">
                            Estaremos enviando los detalles y requisitos para comienzos del mes de Diciembre 2020 :)
                        </h3>
                    </div>

                    <div className="col-sm-3">
                        <img src={scolarship} alt={"scolarship"} style={{ width: "50%" }}></img>
                    </div>
                </div>

            </div>
        </section>
    )
}