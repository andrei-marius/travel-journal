import './App.css';
import Data from './data';
import Card from './card';
import logo from './logo.svg'

function App() {
    const cards = Data.map(card => {
        return <Card 
            //key={card.title}
            image_url={card.image_url}
            location={card.location}
            google_maps_link={card.google_maps_link}
            title={card.title}
            start_date={card.start_date}
            end_date={card.end_date}
            description={card.description}
        />
    });

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} alt="logo"></img>
        my travel journal
      </header>
      {cards}
    </div>
  );
}

export default App;
