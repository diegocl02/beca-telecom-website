import React from 'react'
import charity from '../assets/img/charity.png'
import ibk from '../assets/img/ibk.jpg'
import plin from '../assets/img/plin.png'
import bcp from '../assets/img/bcp.jpg'

export default () => {
    return (
        <section className="page-section bg-light" id="help">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md text-center">
                        <h2 className="text-uppercase mb-4">Donaciones</h2>
                        <h3 className="text-muted m-auto">
                            Sabemos del gran reto que tenemos delante, cubrir los costos académicos en la PUCP de varios o un alumno no es tarea simple, pero como Telec@s sabemos que así seamos pocos, unidos podemos lograr cosas extraordinarias!
                        </h3>

                        <h3 className="text-muted m-auto">
                            Las donaciones las pueden realizar a las siguientes cuentas. Una vez realizadas, enviar el voucher a nuestro correo (beca.telecom@gmail.com) o enviar un mensaje a nuestro <a href={"https://www.facebook.com/beca.telecom.pucp"} target="_blank">fanpage de facebook </a> :)
                        </h3>
                    </div>

                    <div className="col-sm-3">
                        <img src={charity} alt={"charity"} style={{ width: "50%" }}></img>
                    </div>


                </div>

                {/**Table */}

                <table class="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Banco</th>
                            <th scope="col">Nº de cuenta</th>
                            <th scope="col">Código CCI</th>
                            <th scope="col">Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><img src={bcp} alt="BCP" style={{ height: "30px" }}></img></th>
                            <td>191-00700992-0-71</td>
                            <td>002-191-100700992071-55</td>
                            <td>Yosselin Ramirez</td>
                        </tr>
                        <tr>
                            <th scope="row"><img src={ibk} alt="Interbank" style={{ height: "30px" }} /></th>
                            <td>898 3204200566</td>
                            <td>003-898-013204200566-41</td>
                            <td>Silvia Candela</td>
                        </tr>
                    </tbody>
                </table>

                <div className={"row justify-content-center"}>
                    <img src={plin} alt={"plin"} style={{ height: "30px" }}></img>
                    <h4 className={"pl-2"}> 997428307</h4>
                </div>
            </div>
        </section>
    )
}