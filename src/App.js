import React , {Component} from 'react';
import {Grid} from "@material-ui/core"

import Searchbar from './compoenents/searchbar';
import youtube from './api/youtube';
import Videodetails from './compoenents/vediodetails';
import Videolist from './compoenents/videolist';


class App extends Component { 
  state = { 
    videos : [] ,
    selectedVideo : null
   }
  onVideoSelect =(video)=>{
    this.setState({
      selectedVideo : video
    })
  }
  handlesubmit= async (searchterm) => {
  const res = await youtube.get("search" ,{
    params : {
      part :'snippet' ,
      maxResults : 5 ,
      key :'AIzaSyAm1jk_n_9wzNOO69ToyX8Ncl_HVRqq30I' ,
      q : searchterm
  }})
  this.setState({
    videos : res.data.items , selectedVideo :  res.data.items[0]
  })
  
  }

  render() { 
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={8}>
          <Grid item xs={8}>
           <Searchbar search={this.handlesubmit}/>
          </Grid>
          <Grid item xs={8}>
            <Videodetails video={this.state.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
          

          <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect}  />

          </Grid>
          </Grid>
          </Grid>
          </Grid>
    )
  }
}
 
export default App
  