import { useState } from "react"
import musicLogo from "../images/music-logo.png"
import useSound from "use-sound"
import { PlayingBar } from "./PlayingBar"






export const SongBox = ({file, openFullScreen}) => {

    const [isPlaying, setisPlaying] = useState(false)

    const [play, { pause }] = useSound(file.src);


    const playingButtonMenu = () => {
      if (isPlaying) {
        
        pause()
        setisPlaying(false)
         
        
      } else {
          play();
          setisPlaying(true)
      }
    };

    
    


  return (
      <>
          
            

                <div className="col-lg-3 col-md-6 justify-content-sm-center mx-2">
                    <div className="card ancho bg-black text-white border border-white">
                        <img src={musicLogo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{file.name}</h5>
                          <p className="card-text">https://www.fiftysounds.com/es/</p>
                          {isPlaying ? (
                            <button className="specialbutton" onClick={playingButtonMenu}> <span className="text">Pause</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                          </button>
                          ) : (
                            <button className="specialbutton" onClick={playingButtonMenu}> <span className="text">Play</span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                            <span className="blob"></span>
                          </button>
                          )

                          }
                        </div>
                    </div>
                </div>          
              
                  {isPlaying ? (
                    <>
                      <PlayingBar playingButtonMenu={playingButtonMenu}
                                openFullScreen={openFullScreen}
                                file={file}
                                play={play}
                                pause={pause}/>
                    </>

                  ) : (
                    <>
                    </>
                  )}
                     
                
                  </>
  )
}
