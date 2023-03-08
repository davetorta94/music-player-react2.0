import spirit from "../songs/spirit.mp3"
import neon from "../songs/neon.mp3"
import sweet from "../songs/sweet.mp3"
import { SongBox } from "./SongBox"

const canciones = [{name: 'Spirit', src: spirit }, {name: 'Neon', src: neon}, {name: 'Sweet', src: sweet}]


export const Menu = () => {
  
    
  return (
    <>
        <div className="container fondo-menu h-100 mb-5">
          <div className="row d-flex justify-content-center justify-content-sm-center  mt-4">
            <SongBox file={canciones[0]}/>
            <SongBox file={canciones[1]} />
            <SongBox file={canciones[2]} />
           </div>
        </div>
 
    </>
  )
}

