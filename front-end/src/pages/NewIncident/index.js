import React from 'react';
import logoImg from '../../assets/logo.svg'
import './style.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

export default function NewIncident() {
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FaArrowLeft size={16} color="#E02141" marginLeft="50px" />
                                   Voltar para home!
                    </Link>
                </section>
                <form>
                    <input placeholder="Titulo do Caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em Reais" />
                    <div className="button-group">
                    <button className="button" type="submit">Cancelar</button>
                    <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}