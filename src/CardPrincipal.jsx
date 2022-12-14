import './cardPrincipal.css'

function CardPrincipal() {
    return (
        <> 
        <article className="cripto-first">
            <div className="cripto-title">
                <img src="" alt="" />
                <h2>Nombre</h2>
                <h2>porcentaje%</h2>
            </div>
            <div className="graphic">

            </div>
            <table className="capitalization-table">
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>1m</th>
                        <th>1y</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>%</td>
                        <td>%</td>
                        <td>%</td>
                        <td>%</td>
                        <td>%</td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    );
}

export default CardPrincipal;