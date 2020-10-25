import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 10px 0px 32px 0px;
  background-image: linear-gradient(to right, #1b3d5e 100%, #1f476d 53%);
  height: 670px;
  position: relative;

  img.phone-hand {
    width: 350px;
    margin-left: auto;
    position: absolute;
    bottom: 0;
    right: 5%;
  }

  @media (max-width: 720px) {
    display: block;
    height: 650px;

    img.phone-hand {
      width: 250px;
    }
  }
`;

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 1200px;
  div {
    > img {
      width: 120px;
    }
    h3 {
      text-align: center;
      font-weight: 400;
    }
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    color: #999591;
    width: 20px;
    height: 20px;
  }

  @media (max-width: 720px) {
    display: block;
    max-width: auto;

    div {
      > img {
        display: flex;
        margin: auto;
        margin-bottom: 30px;
        width: 150px;
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: row;

    line-height: 24px;
    text-align: center;
    flex-direction: row;
    margin: auto;
    line-height: 24px;
    text-align: center;
    span {
      color: #f4ede8;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      font-size: 30px;
      padding-right: 25px;

      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }

    a + a {
      border-left: 2px solid;
      padding-left: 25px;
    }
  }

  @media (max-width: 720px) {
    div {
      flex-direction: row;
    }

    div {
      a {
        font-size: 16px;
        padding-right: 0px;
        margin-bottom: 20px;
      }

      a + a {
        border-left: 0;
        padding-left: 15px;
      }
    }
  }
`;

export const AppPresentation = styled.div`
  display: flex;
  position: relative;
`;

export const AppPresentationTextContainer = styled.div`
  margin-top: 50px;
  align-self: baseline;
  flex: 1;
  display: flex;

  flex-direction: column;
  align-self: center;
  line-height: 110px;
  p {
    font-family: 'Fredoka One', cursive;
    font-size: 50px;
    text-align: center;
    text-shadow: 2px 2px 20px black;
  }
  img {
    width: 200px;
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ProjectContent = styled.div`
  text-align: center;
  color: #1b3d5e;
  background: whitesmoke;
  padding: 48px 150px 40px 150px;
  height: auto;
  border-radius: 15px;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
  }

  @media (max-width: 720px) {
    padding: 48px 20px 40px 20px;
  }
`;

export const FeaturesContainer = styled.div`
  background-color: whitesmoke;
  padding: 48px 0px 48px 0px;
  justify-content: center;
  flex: 1;
  border-radius: 15px;
  div {
    display: flex;
    img {
      width: 300px;
      display: block;
      margin: auto;
    }
  }

  h2 {
    text-align: center;
    display: block;
    font-size: 30px;
    margin-bottom: 30px;
    color: #1b3d5e;
  }

  > button {
    margin: auto;
    margin-top: 20px;
    border: none;
    display: block;
    background-color: transparent;
  }

  @media (max-width: 720px) {
    div {
      flex-direction: column;
    }
  }
`;

export const FeaturesLeftColumn = styled.div`
  flex: 1;
  text-align: right;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 100px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
      border: none;
      background: none;
      align-items: center;
      display: inline-flex;
      font-size: 20px;
      font-weight: bold;
      color: #999591;

      span {
        margin-left: 20px;
        border: 3px solid #1b5e5e;
        padding: 10px;
        border-radius: 30px;
        align-items: center;
        display: inline-flex;

        svg {
          color: #1b5e5e;
        }
      }
    }

    button.active {
      opacity: 1;
    }

    button.inactive {
      opacity: 0.4;
    }

    > button {
      margin-top: 50px;
    }
  }

  @media (max-width: 720px) {
    padding: 10px;
    div {
      display: flex;
      flex-direction: revert;
      overflow: auto;
      max-width: 100%;
      button {
        flex-direction: row-reverse;
        font-size: 12px;
        margin-top: 0;
        span {
          margin-left: 0;
          margin-right: 10px;
          svg {
            width: 14px;
            height: 14px;
          }
        }
      }

      button + button {
        margin-left: 20px;
      }
    }
  }
`;

export const FeaturesRightColumn = styled.div`
  flex: 1;
  text-align: right;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 100px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      border: none;
      background: none;
      align-items: center;
      display: inline-flex;
      font-size: 20px;
      font-weight: bold;
      color: #999591;

      span {
        margin-right: 20px;
        border: 3px solid #1b5e5e;
        padding: 10px;
        border-radius: 30px;
        align-items: center;
        display: inline-flex;

        svg {
          color: #1b5e5e;
        }
      }
    }

    button.active {
      opacity: 1;
    }

    button.inactive {
      opacity: 0.4;
    }

    > button {
      margin-top: 50px;
    }
  }

  @media (max-width: 720px) {
    padding: 10px;
    div {
      display: flex;
      flex-direction: revert;
      overflow: auto;
      max-width: 100%;
      button {
        font-size: 12px;
        margin-top: 0;
        span {
          margin-left: 0;
          margin-right: 10px;
          svg {
            width: 14px;
            height: 14px;
          }
        }
      }

      button + button {
        margin-left: 20px;
      }
    }
  }
`;

export const MembersContainer = styled.div`
  flex: 1;
  text-align: right;
  flex-direction: column;
  padding: 20px;
  background: #1b3d5e;
  padding: 48px 0px 40px 0px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    text-align: center;
    display: block;
    font-size: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 720px) {
    div {
      flex-direction: column;
    }
  }
`;

export const MemberCard = styled.div`
  width: 250px;
  justify-content: center;
  margin: 20px 10px 20px 10px;
  border-radius: 10px;
  padding: 10px;

  h3 {
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
  }

  img {
    width: 150px;
    border-radius: 50%;
    margin: auto;
    display: block;
    border: 5px solid;
  }

  @media (max-width: 720px) {
    h3 {
      font-size: 30px;
    }

    p {
      font-size: 26px;
    }
  }
`;

export const Footer = styled.footer`
  background: #1b3d5e;
  padding: 40px 0px 10px 0px;
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;

  img {
    width: 250px;
    display: block;
    margin: auto;
  }

  p {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: 'Montez', cursive;
  }
`;
