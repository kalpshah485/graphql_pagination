import {
  gql,
  useQuery
} from '@apollo/client';
import './App.css';
import Pagination from './components/Pagination';

const GET_CHARACTERS = gql`
  query getCharacters($page_num: Int = 1) {
    characters (page: $page_num) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        gender
      }
    }
  }
`;

function App() {
  const { data, loading, error, refetch } = useQuery(GET_CHARACTERS);
  const refetchPageData = (page) => {
    refetch({
      page_num: page
    })
  }
  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }
  if (error) {
    return (
      <p>Failed to load...</p>
    )
  }
  if (data && !loading) {
    return (
      <div style={{marginLeft: "10px"}}>
        <h1>Page information:</h1>
        <div>
          <p>Count: {data.characters.info.count}</p>
          <p>Prev: {data.characters.info.prev}</p>
          <p>Next: {data.characters.info.next}</p>
          <p>Pages: {data.characters.info.pages}</p>
        </div>
        <h1>Characters:</h1>
        <div style={{ marginBottom: "15vh" }}>
          {
            data.characters.results.map((character) => {
              return <p key={character.id}>{character.name}</p>
            })
          }
        </div>
        <Pagination page_info={data.characters.info} refetchPageData={refetchPageData} />
      </div>
    );
  }
}

export default App;
