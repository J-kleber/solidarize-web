import React, { useState, useCallback, useEffect } from 'react';
import {
  FiPlay,
  FiPause,
  FiLogIn,
  FiClipboard,
  FiHome,
  FiList,
  FiMap,
  FiPlusSquare,
  FiUser,
  FiUserPlus,
  FiGift,
  FiPrinter,
  FiTrello,
  FiDollarSign,
} from 'react-icons/fi';

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
      const timerInterval = setInterval(() => {
        setCurrentFeature(oldState => (oldState < 12 ? oldState + 1 : 0));
      }, 1500);
      setTimer(timerInterval);
    } else if (timer) {
      clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          Solidarize é um aplicativo desenvolvido com a ideia de promover o
          encontro e união de pessoas, ONG’s (Organizações não Governamentais),
          instituições públicas e privadas, que se proponham a ajudar a
          sociedade promovendo ações sociais em prol das comunidades carentes e
          doações sem visar ganhos próprios. Reforçando sempre que puder nas
          campanhas a independência financeira dos mais desfavorecidos através
          de folders, fomentando palestras e cursos voluntários para área
          profissional aos idealizadores e apoiadores na tela principal do
          aplicativo. Além de doações e ações sociais, este aplicativo funciona
          como um ponto de encontro entre os idealizadores das campanhas
          servindo de vitrine para apoiadores e ajudados funcionando de forma
          semelhante a uma rede social voltada para o encontro de doadores e
          donatários.
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
                  <FiLogIn size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 2 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(2)}
              >
                Cadastro
                <span>
                  <FiClipboard size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 3 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(3)}
              >
                Dashboard
                <span>
                  <FiHome size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 4 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(4)}
              >
                Feed
                <span>
                  <FiList size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 5 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(5)}
              >
                Geolocalização
                <span>
                  <FiMap size={22} />
                </span>
              </button>
              <button
                type="button"
                className={currentFeature === 6 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(6)}
              >
                Cadastre uma campanha
                <span>
                  <FiPlusSquare size={22} />
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
                  <FiTrello size={22} />
                </span>
                Detalhes
              </button>
              <button
                type="button"
                className={currentFeature === 8 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(8)}
              >
                <span>
                  <FiUser size={22} />
                </span>
                Perfil
              </button>
              <button
                type="button"
                className={currentFeature === 9 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(9)}
              >
                <span>
                  <FiUserPlus size={22} />
                </span>
                Personalize seu perfil
              </button>
              <button
                type="button"
                className={currentFeature === 10 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(10)}
              >
                <span>
                  <FiDollarSign size={22} />
                </span>
                Conta para receber doação
              </button>
              <button
                type="button"
                className={currentFeature === 11 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(11)}
              >
                <span>
                  <FiGift size={22} />
                </span>
                Realizar doação
              </button>
              <button
                type="button"
                className={currentFeature === 12 ? 'active' : 'inactive'}
                onClick={() => handleCurrentFeature(12)}
              >
                <span>
                  <FiPrinter size={22} />
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
