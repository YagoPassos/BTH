import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import './style.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" />
                    <Link to="/profile">
                    <button className="button" type="submit">Entre</button>
                    </Link>
                    <Link className="back-link" to="/register">
                        <FaSignInAlt size={16} color="#E02141" marginLeft="50px" />
                                   Não tenho Cadastro!
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}