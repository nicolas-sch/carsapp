import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Search = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3004/cars')
            .then((response) => {
                setCars(response.data);
            });
    }, []);

    return (
        <div className="container">
            <div className="py-4">
                <h1>Busca de Carros</h1>
                <input
                    type="text"
                    placeholder="Digite sua busca"
                    onChange={event => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars.filter((car) => {
                                if (searchTerm == "") {
                                    return ""
                                } else if (car.model.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return car
                                } else if (car.brand.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return car
                                } else if (car.year.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return car
                                }
                            }).map((car, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{car.brand}</td>
                                    <td>{car.model}</td>
                                    <td>{car.year}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}




