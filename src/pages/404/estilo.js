import styled from 'styled-components';

export const Main = styled.div`
display: flex;
justify-content: center;
color: #fff;
  img {
    width: 300px;
  }
  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 46px;
  }
@media (max-width: 800px) {
    h2 {
      font-size: 30px;
    }
}
@media (max-width: 600px) {
  margin-top: 40px;
  img {
    width: 200px;
  }
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 20px;
    }
}
@media (max-width: 410px) {
  margin-left: -20px;
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 15px;
    }
}
`;