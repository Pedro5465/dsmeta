import NotificationButton from "../NotificationButton"
import "./style.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />                
                    </div>
                </div>
                <div>
                    <table className="dsmeta-sales-table">

                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show756">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show756">10/04/2022</td>
                                <td>Anakin</td>
                                <td className="show992">100</td>
                                <td className="show992">10</td>
                                <td>R$ 64565.54</td>
                                <td>
                                    <div className="btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default SalesCard