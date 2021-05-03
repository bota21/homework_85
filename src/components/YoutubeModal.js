import YouTube from "react-youtube";
 
const YoutubeModal = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {        
          autoplay: 1,
        },
      };
return (    
    <YouTube videoId={props.video} opts={opts}/>
)
}
export default YoutubeModal;
