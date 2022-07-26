import Data from "./Data";
import Movie from "./Movie";

export default function MoviesList() {
    let moviesArray = Data.map(item => {
        return (

            <Movie name={item.name}
                poster={item.img}
                rldate={item.date}
            />
         
            )
    })
    return (
        <div className='MoviesList'>
            {moviesArray}
            </div>
        )

}