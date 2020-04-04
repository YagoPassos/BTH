import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaPowerOff, FaTrash } from 'react-icons/fa'

import './style.css'
export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda,APAD</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                 </Link>
                <Link className="button" to="/">
                    SAIR <FaPowerOff style={{ fontSize: 14, paddingLeft: 0 }} />
                </Link>
            </header>

            <main>
                <h1>Casos Cadastrados</h1>

                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃo</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FaTrash size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃo</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FaTrash size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃo</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FaTrash size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃo</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FaTrash size={20} color="#a8a8b3" />
                        </button>
                    </li>
                </ul>
            </main>
        </div>
    )
}