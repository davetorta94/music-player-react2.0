import { useContext, useState } from "react"
import { IconContext } from "react-icons"
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"




export const PlayingBar = ({file, play, pause}) => {

    const [isPlaying, setisPlaying] = useState(true)

    const [fullScreen, setFullScreen] = useState(false);

    const playingButton = () => {
        if (isPlaying) {
          pause();
          setisPlaying(false);
          
          
        } else {
          play();
          setisPlaying(true);
          
        }
      };


    

    

  return (
    <div className={`row barra-reproduccion d-flex justify-content-evenly mt-5 ${(isPlaying) === true ? 'fixed-bottom m-0' : 'd-none'}`}>
       <div className="col-2">
       <span className="spinner">
         <div className="spinnerin"></div>
       </span>
                     
       </div>
       <div className="col-3 text-white">Reproduciendo: {file.name}
                     
                     
       </div>
                     
       <div className="col-3">
       <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
       </div>
                     
     </div>
  )
}
