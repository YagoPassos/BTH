import React, { useState } from 'react';
import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'
import api from '../../services/api';


export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

   async function handleRegister(e) {
        e.preventDefault();

        // const data ={
            console.log({
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        // const response = await api.post('ongs', data);

        // alert(`Seu ID de acesso: ${response}`);
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os cados da sua ong</p>
                    <Link className="back-link" to="/">
                        <FaArrowLeft size={16} color="#E02141" marginLeft="50px" />
                                   Voltar para tela de logon!
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Telefone"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}