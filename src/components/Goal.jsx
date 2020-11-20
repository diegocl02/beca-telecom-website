import React from 'react'
import charity from '../assets/img/charity1.png'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default () => {
    const greenProgress = "#47cf73"
    const goal = 12000
    const current = JSON.stringify(process.env.CURRENT_AMOUNT) || 0
    const amountFirstGoal = 6000
    const amountNeeded = goal - current
    const percetange = (current / goal) * 100

    return (
        <section className="page-section" id="goal">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-3">
                        <img src={charity} alt={"question"} style={{ width: "50%" }}></img>
                    </div>

                    <div className="col-md text-center">
                        <h2 className="text-uppercase mb-4">Meta</h2>
                        <h3 className="text-muted m-auto">
                            Nos hemos trazado la meta de reunir S/ 12,000 para poder dar 2 becas o su equivalente en medias becas o cuarto de beca, la idea es ayudar a la mayor cantidad de alumnos posible.
                            El monto a donar es completamente voluntario, no existe monto mínimo o máximo, cualquier ayuda va a ser más que bienvenida.
                        </h3>
                    </div>
                </div>
                <div style={{ width: "100%", margin: "2rem" }}>
                    <div style={{ width: "70%", margin: "auto" }}>

                        <p className={"mb-4"}> <em>Porcentaje recolectado hasta el momento: </em> <mark>{Math.round(percetange)}%</mark></p>

                        <ProgressBar
                            percent={percetange}
                            height={15}
                            filledBackground={greenProgress}>
                            <Step transition="scale">
                                {({ accomplished }) => (
                                    <svg height="100" width="100">
                                        <circle cx="50" cy="50" r="7" fill="#525961" />
                                    </svg>
                                )}
                            </Step>
                            <Step transition="scale">
                                {({ accomplished }) => (
                                    <div style={{
                                        color: !accomplished ? "gray" : "white",
                                        border: `thin solid ${!accomplished ? "gray" : greenProgress}`,
                                        backgroundColor: !accomplished ? "white" : greenProgress,
                                        padding: "5px",
                                        borderRadius: "5px"
                                    }}>
                                        1 Beca!
                                    </div>
                                )}
                            </Step>

                            <Step transition="scale">
                                {({ accomplished }) => (
                                    <div style={{
                                        color: !accomplished ? "gray" : "white",
                                        border: `thin solid ${!accomplished ? "gray" : greenProgress}`,
                                        backgroundColor: !accomplished ? "white" : greenProgress,
                                        padding: "5px",
                                        borderRadius: "5px"
                                    }}>
                                        2 Becas!
                                    </div>
                                )}
                            </Step>
                        </ProgressBar>

                        {
                            current > amountFirstGoal
                            && <div class="alert alert-success mt-5" role="alert">
                                {`Primera meta lograda: 1 Beca! :)`}
                            </div>
                        }

                        <div class="alert alert-info mt-5" role="alert">
                            {`Aún nos faltan ${amountNeeded} Soles para alcanzar la meta final!`}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}