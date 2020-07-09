import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38633178?s=460&v=4"
            alt="avatar"
          />
          <div>
            <strong>neagsg/tsathenticate</strong>
            <p>Autenticação com JTW</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38633178?s=460&v=4"
            alt="avatar"
          />
          <div>
            <strong>neagsg/tsathenticate</strong>
            <p>Autenticação com JTW</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38633178?s=460&v=4"
            alt="avatar"
          />
          <div>
            <strong>neagsg/tsathenticate</strong>
            <p>Autenticação com JTW</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
