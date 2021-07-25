import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background: #000000;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #000;
`;

export const Row = styled.div`
  display: grid;
  background-color: #000;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  background-color: #000;

  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  background-color: #000;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
