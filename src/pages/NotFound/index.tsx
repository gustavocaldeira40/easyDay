import { useNavigate } from 'react-router-dom';
import { Container, Emoji, GoHomeButton, Text, Title } from './style';

const NotFoundPage = () => {
  const navigate = useNavigate(); // Usando o novo hook 'useNavigate'

  const goToHome = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <Container>
      <Title>404</Title>
      <Emoji>😞</Emoji>
      <Text>Oops! A página que você procurou não foi encontrada.</Text>
      <Text>
        Você pode voltar para a página inicial ou tentar outra página.
      </Text>
      <GoHomeButton variant="contained" onClick={goToHome}>
        Ir para a Página Inicial
      </GoHomeButton>
    </Container>
  );
};

export default NotFoundPage;
