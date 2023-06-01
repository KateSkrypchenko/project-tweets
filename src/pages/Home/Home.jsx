import { Container, Link } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <h1>Welcome to our Tweet site!</h1>
      <p>
        Stay connected and up-to-date with the latest tweets from around the world. Discover
        trending topics, follow your favorite accounts, and join the conversation. Start exploring
        now and let the tweets unfold before your eyes.
      </p>
      <Link to="/tweets">Happy tweeting!</Link>
      {/* <p>Happy tweeting!</p> */}
    </Container>
  );
};

export default Home;
