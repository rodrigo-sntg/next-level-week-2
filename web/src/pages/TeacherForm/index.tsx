import React, { PureComponent } from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import backImg from '../../assets/images/icons/back.svg';

import './styles.css';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

// bl
function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição."/>

                <main>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome Completo"/>

                        <Input name="avatar" label="Avatar"/>

                        <Input name="whatsapp" label="Whatsapp"/>

                        <TextArea name="bio" label="Biografia"/>



                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select 
                            name="subject" 
                            label="Matéria"
                            options={[
                                {vaue: 'Artes', label: 'Artes'},
                                {vaue: 'Matemática', label: 'Matemática'},
                                {vaue: 'Ciências', label: 'Ciências'}
                            ]}
                            />

                        <Input name="cost" label="Custo da sua hora por aula"/>
                        
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante"/>
                            Importante! <br/>
                            Preencha todos os dados.
                        </p>
                        <button type="button">
                            Salvar Cadastro
                        </button>
                    </footer>
                </main>
        </div>
    )
}


export default TeacherForm;
