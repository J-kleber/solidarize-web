import React, { useState, useCallback, useEffect, useMemo } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { isToday, format, parseISO, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import { FiPower, FiPlay, FiPause } from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Menu,
  AppPresentation,
  AppPresentationTextContainer,
  FeaturesContainer,
  FeaturesLeftColumn,
  FeaturesRightColumn,
  MembersContainer,
  MemberCard,
  Footer,
  ProjectContent,
} from './styles';

import logoImg from '../../assets/logo_com_nome.svg';
import appPresentation from '../../assets/app_presentation.png';
import initial from '../../assets/telas/initial.png';
import cadastro from '../../assets/telas/cadastro.png';
import campanhaDetalhes from '../../assets/telas/campanha_detalhes.png';
import dadosConta from '../../assets/telas/dados_conta.png';
import dashboard from '../../assets/telas/dashboard.png';
import editarPerfil from '../../assets/telas/editar_perfil.png';
import feedVertical from '../../assets/telas/feed_vertical.png';
import login from '../../assets/telas/login.png';
import perfil from '../../assets/telas/perfil.png';
import realizarDoacao from '../../assets/telas/realizar_doacao.png';
import relatorio from '../../assets/telas/relatorio.png';
import geolocalizacao from '../../assets/telas/geolocalizacao.png';
import cadastroCampanha from '../../assets/telas/cadastro_campanha.png';

import thaji from '../../assets/thaji.jpg';
import john from '../../assets/john.jpg';
import will from '../../assets/will.jpg';
import well from '../../assets/well.jpg';

const Dashboard: React.FC = () => {
  const imagesFeatures = [
    initial,
    login, // Login
    cadastro, // Cadastro
    dashboard, // Dashborad
    feedVertical, // Feed
    geolocalizacao, // Geolocalização
    cadastroCampanha, // Cadastre uma campanha
    campanhaDetalhes, // Detalhes
    perfil, // Perfil
    editarPerfil, // Personalize seu perfil
    dadosConta, // Conta para receber doação
    realizarDoacao, // Realize doacoes
    relatorio, // Relatórios
  ];
  const [currentFeature, setCurrentFeature] = useState(0);
  const [play, setPlay] = useState(true);
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    if (play) {
      const teste = setInterval(() => {
        setCurrentFeature(oldState => (oldState < 12 ? oldState + 1 : 0));
      }, 1500);
      setTimer(teste);
    } else if (timer) {
      clearInterval(timer);
    }
  }, [play]);

  const handleCurrentFeature = useCallback((index: number) => {
    setPlay(false);
    setCurrentFeature(index);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div>
            <img src={logoImg} alt="Solidarize" />
            {/* <h3>Solidarize</h3> */}
          </div>
          <Menu>
            <div>
              <a href="#project">Projeto</a>
              <a href="#team">Equipe</a>
              <a href="#functionalities">Funcionalidades</a>
            </div>
          </Menu>
        </HeaderContent>
        <AppPresentation>
          <AppPresentationTextContainer>
            <p>APOIE</p>
            <p>IDEALIZE</p>
            <p>PARTICIPE</p>
          </AppPresentationTextContainer>
        </AppPresentation>
        <img className="phone-hand " src={appPresentation} alt="Solidarize" />
      </Header>
      <ProjectContent id="project">
        <h2>O Projeto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          voluptatibus nostrum labore asperiores nesciunt corrupti veniam, dolor
          quas dignissimos dolorem placeat possimus rem. Alias est doloremque
          amet nesciunt ab vero. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore, voluptatibus nostrum labore asperiores
          nesciunt corrupti veniam, dolor quas dignissimos dolorem placeat
          possimus rem. Alias est doloremque amet nesciunt ab vero.
        </p>
      </ProjectContent>
      <MembersContainer id="team">
        <h2>Equipe</h2>
        <div>
          <MemberCard>
            <h3>John Kleber</h3>
            <img src={john} alt="John Kleber" />
            <p>Desenvolvedor Back-end</p>
          </MemberCard>
          <MemberCard>
            <h3>Wellington Gomes</h3>
            <img src={well} alt="Wellington Gomes" />
            <p>Desenvolvedor Front-end</p>
          </MemberCard>
          <MemberCard>
            <h3>Willian Gomes</h3>
            <img src={will} alt="Willian Gomes" />
            <p>Documentação e processos</p>
          </MemberCard>
          <MemberCard>
            <h3>Thajinara Kemy</h3>
            <img src={thaji} alt="Thajinara Kemy" />
            <p>Orientadora</p>
          </MemberCard>
        </div>
      </MembersContainer>
      <FeaturesContainer id="functionalities">
        <h2>Funcionalidades</h2>
        <div>
          <FeaturesLeftColumn>
            <div>
              <button
                type="button"
                className={currentFeature === 1 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(1)}
              >
                Login
                <span>
                  <FiPower size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 2 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(2)}
              >
                Cadastro
                <span>
                  <FiPower size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 3 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(3)}
              >
                Dashboard
                <span>
                  <FiPower size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 4 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(4)}
              >
                Feed
                <span>
                  <FiPower size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 5 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(5)}
              >
                Geolocalização
                <span>
                  <FiPower size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 6 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(6)}
              >
                Cadastre uma campanha
                <span>
                  <FiPower size={22} />
                </span>
              </button>
            </div>
          </FeaturesLeftColumn>
          <img src={imagesFeatures[currentFeature]} alt="Solidarize" />

          <FeaturesRightColumn>
            <div>
              <button
                type="button"
                className={currentFeature === 7 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(7)}
              >
                <span>
                  <FiPower size={22} />
                </span>
                Detalhes
              </button>
              <button
                type="button"
                className={currentFeature === 8 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(8)}
              >
                <span>
                  <FiPower size={22} />
                </span>
                Perfil
              </button>
              <button
                type="button"
                className={currentFeature === 9 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(9)}
              >
                <span>
                  <FiPower size={22} />
                </span>
                Personalize seu perfil
              </button>
              <button
                type="button"
                className={currentFeature === 10 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(10)}
              >
                <span>
                  <FiPower size={22} />
                </span>
                Conta para receber doação
              </button>
              <button
                type="button"
                className={currentFeature === 11 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(11)}
              >
                <span>
                  <FiPower size={22} />
                </span>
                Realizar doação
              </button>
              <button
                type="button"
                className={currentFeature === 12 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(12)}
              >
                <span>
                  <FiPower size={22} />
                </span>
                Relatórios
              </button>
            </div>
          </FeaturesRightColumn>
        </div>
        <button type="button" onClick={() => setPlay(!play)}>
          {play ? (
            <FiPause size={30} color="#1b5e5e" />
          ) : (
            <FiPlay size={30} color="#1b5e5e" />
          )}
        </button>
      </FeaturesContainer>
      <Footer>
        <img src={logoImg} alt="Solidarize" />
        <p>
          Mateus 5:42 – “Dê a quem pede, e não volte as costas àquele que deseja
          pedir algo emprestado”.
        </p>
      </Footer>
    </Container>
  );
};

export default Dashboard;
