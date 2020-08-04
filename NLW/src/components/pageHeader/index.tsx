import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import returnIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
    title: string;
    /*Para torná-lo não obrigatório: title?: string*/
}

/*FC-> Functional Component*/
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    /*Fira Code faz font ligatures*/
    return (
        <header className="page-header">

            <div className="top-bar-container">
                <Link to="/">
                    <img src={returnIcon} alt="Retornar" />
                </Link>
                <img src={logoImg} alt="Logo Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>



        </header>
    );
};

export default PageHeader; 