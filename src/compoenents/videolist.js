import React from 'react';
import Videoitem from './videoitem';
import { Grid } from "@material-ui/core";


function Videolist ({videos , onVideoSelect}){
   
    const videoit = videos.map((video)=>{return(<Videoitem  onVideoSelect={onVideoSelect}   video={video} key={video.id.videoId}/>)})

    return (
    <Grid container spacing={10}>
        {videoit}
    </Grid>
     

    )




}
export default Videolist
