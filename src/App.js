
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from "./Nav";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>

     {/* <h1>Welcome to the react netflix clone Rajdip</h1> */}
     <Row title="Trending Now" fetchUrl= { requests.fetchTrending } isLargeRow/>
     <Row title="Top Rated" fetchUrl= { requests.fetchTopRated }/>
     <Row title="Netflex originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Action Movies" fetchUrl= { requests.fetchActionMovies }/>
     <Row title="Comedy Movies" fetchUrl= { requests.fetchComedyMovies }/>
     <Row title="Horror Movies" fetchUrl= { requests.fetchHorrorMovies }/>
     <Row title="Romance Movies" fetchUrl= { requests.fetchRomanceMovies }/>
     <Row title="Documentries" fetchUrl= { requests.fetchDocumentaries }/>
    </div>
  );
}

export default App;
