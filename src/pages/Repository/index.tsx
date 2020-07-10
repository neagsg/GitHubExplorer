import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/38633178?s=460&v=4"
            alt="Avatar"
          />
          <div>
            <strong>neag/tsauthenticate</strong>
            <p>descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1980</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>56</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>45</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="adsss">
          <div>
            <strong>ssss</strong>
            <p>dfdsfsd</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
