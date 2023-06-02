import { Container, Title, Text, Button, Link, Icon } from './Home.styled';

import { Comment } from 'react-loader-spinner';

// import { IoLogoTumblr } from 'react-icons/io';
// import { CgTwitter } from 'react-icons/cg';
// BsFillArrowRightCircleFill;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to our Tweets site!</Title>
      <Text>Stay connected and up-to-date with the latest tweets from around the world.</Text>
      <Text>
        Discover trending topics, follow your favorite accounts, and join the conversation.
      </Text>
      <Text>Start exploring now and let the tweets unfold before your eyes.</Text>
      <Text>Happy tweeting!</Text>
      <Button>
        <Link to="/tweets">
          Go to tweets! <Icon />
        </Link>
      </Button>
      <Comment
        visible={true}
        height="100"
        width="100"
        ariaLabel="comment-loading"
        wrapperStyle={{ display: 'block', margin: '0 auto' }}
        wrapperClass="comment-wrapper"
        color="#ebd8ff"
        backgroundColor="#4d19c5"
      />
    </Container>
  );
};

export default Home;
