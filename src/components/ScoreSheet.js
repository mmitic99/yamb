
function ScoreSheet({categories, columns}) {
    return (
        <div>
            <table>
                <tr>
                    <th>Category</th>
                    {columns.map((column) =>(<th>{column}</th>))}
                </tr>
            </table>



        </div>
    );
}

export default ScoreSheet;