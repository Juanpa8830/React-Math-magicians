import { LoremIpsum } from 'react-lorem-ipsum';

const HomeSection = () => (
  <div className="home-section">
    <h2 className="home-title">Welcome to our page!</h2>
    <p className="textSection">
      <LoremIpsum p={2} />
    </p>
  </div>
);

export default HomeSection;
