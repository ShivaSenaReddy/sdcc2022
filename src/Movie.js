export default function Movie(props) {
    return (
        <div className='Movie'>
          
                    <img src={props.poster} id='poster' />
             
            <h3>{props.name}</h3>
            <p>{props.rldate}</p>
            <a href="https://youtu.be/RlOB3UALvrQ" target="_blank" id='trailerlink'>{'click to watch '+props.name+' teaser/trailer'}</a>
                </div>
       
   
        
        )

}