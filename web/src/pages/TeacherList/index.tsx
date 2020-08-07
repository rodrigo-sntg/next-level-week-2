import React, { PureComponent } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import backImg from '../../assets/images/icons/back.svg';
import whatsappImg from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <Input name="subject" label="Matéria" />

                    <Input name="week_day" label="Dia da semana" />

                    <Input type="time" name="time" label="Hora" />

                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/11444676?s=460&u=d7689538b6e230bd308b9aeb66db998304be201d&v=4" alt=""/>
                        <div>
                            <strong>Rodrigo Santiago</strong>
                            <span>Ciencia</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta de porra nenhuma.
                        <br/>
                        Bora fazer a bagaça.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappImg} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}


export default TeacherList;
