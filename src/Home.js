import Filter from "./Filter"

const Home = ({ wordlist, typelist2, typelist1 }) => {
    return (
        <main>
            <Filter
                wordlist = {wordlist}
                typelist1 = {typelist1}
                typelist2 = {typelist2}
            />
            <p className="Home">
                Home....
            </p>
        </main>
    );
  }
  
  export default Home;