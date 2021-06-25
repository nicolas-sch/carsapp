import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

export const AddCar = () => {
    let history = useHistory();
    const [car, setCar] = useState({
        brand: "",
        model: "",
        year: ""
    });


    const { brand, model, year } = car;
    const onInputChange = e => {
        setCar({ ...car, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3004/cars", car);
        history.push("/");
    };


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Adicionar Carro</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Preencha a marca"
                            name="brand"
                            value={brand}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Preencha o modelo"
                            name="model"
                            value={model}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Preencha o ano"
                            name="year"
                            value={year}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Adicionar</button>
                </form>
            </div>
        </div>
    );
};
