import { React, useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


export const Home = () => {
    const [cars, setCar] = useState([]);

    useEffect(() => {
        loadCars();
    }, []);

    const loadCars = async () => {
        const result = await axios.get("http://localhost:3004/cars");
        setCar(result.data.reverse());
    };

    const deleteCar = async id => {
        await axios.delete(`http://localhost:3004/cars/${id}`);
        loadCars();
    }


    return (
        <div className="container">
            <div className="py-4">
                <h1>Lista de Carros</h1>
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Ano</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.map((car, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{car.brand}</td>
                                    <td>{car.model}</td>
                                    <td>{car.year}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary" to={`/cars/edit/${car.id}`}>Editar</Link>
                                        <Link className="btn btn-outline-danger" onClick={() => deleteCar(car.id)}>Excluir</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}