import React from 'react'

const List = (props) => {

    return (
        <table className="table table-striped table-dark mb-0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                </tr>
            </thead>
            <tbody>
                {props.elements.map((element, i) => {
                    return (
                        <tr key={i + 1} >
                            <th scope="row">{i + 1}</th>
                            <td>{element}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default List;