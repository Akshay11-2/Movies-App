import { useEffect, useState } from "react";
import MovieCard from "../component/MoviesCard"
import "../css/Home.css"
import { searchMovies ,getPopularMovies } from "../Services/api";

function Home(){
    const [searchquerry,setsearchquerry] = useState("")
    const[Movies,setmovies] = useState([])
    const [error,seterror] = useState(null)
    const [loading,setloading] = useState(true)

    useEffect (()=>{
        const LoadPopularMovies = async () =>{
            try{
                const popularmovies = await getPopularMovies()
                setmovies(popularmovies)
            } catch (err) {
                console.log(err)
                seterror("Failed to Load Movies")

            }finally{
                setloading(false)
            }
        }

        LoadPopularMovies();
    },[])
 
  
const handelserach = async (e) =>{
   e.preventDefault()
   if(!searchquerry.trim()) return
   if(loading) return
   setloading(true)
   try{
    const searchResults = await searchMovies(searchquerry)
    setmovies(searchResults)
    seterror(null)
   } catch(err){
    console.log(err)
    seterror("Failed to search movies...")

   }finally{
    setloading(false)

   }

}    

    return (

    <div className="home">
        <form onSubmit={handelserach} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchquerry}
            onChange={(e)=>{setsearchquerry(e.target.value)}}
            />
            <button type="submit" className="search-button" >Search</button>
        </form>

{error && <div className="error-message">{error}</div>}

    {loading ? (<div className="loading">loading....</div>) : ( <div className="movies-grid">
        {Movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />
        ))}
     </div>)}
    
    </div>
    );
}

export default Home;