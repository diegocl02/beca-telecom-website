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
                        </h3> <br />

                        <h3 className="text-muted m-auto">
                            Todos los detalles de como postular en el siguiente enlace: <a href="https://docs.google.com/document/d/1hR3R3_nSsZPMacS2yqjTL9chEb7rJQ3BqO1jDpIoKSA/edit?usp=sharing"> Requisitos </a>
                        </h3><br />

                        <h3 className="text-muted m-auto">
                            Fecha límite de postulación: <important>20 de Marzo de 2021</important>
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
