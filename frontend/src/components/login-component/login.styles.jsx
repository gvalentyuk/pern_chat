import styled from "styled-components";

export const LoginCard = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 15vh;
  }

  & > div {
    display: flex;
    min-width: 500px;
    margin-top: 2.5rem;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
}

p {
  font-family: Roboto, sans-serif;
  text-align: center;
  margin: 10px 0;

  a {
    text-decoration: none;
    color: #5046b9;

    &:hover {
      color: black;
    }
  }
`;

export const ImageSectionContainer = styled.div`
  background-color: #f0ebeb;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 300px;
    min-width: 100%;
  }
`;

export const FormSectionContainer = styled.div`
  min-width: 300px;

  h2 {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    font-family: Roboto, sans-serif;
    text-align: center;
    color: #5046b9;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.button`
  background-color: #5046b9;
  width: 93%;
  height: 40px;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: Roboto, sans-serif;
  margin: 20px auto;
  letter-spacing: 2px;
  cursor: pointer;
  
  &:hover {
    filter: brightness(110%);
  }
`;

export const ErrorContainer = styled.p`
  margin: 0;
  text-align: left;
  color: red;
`
