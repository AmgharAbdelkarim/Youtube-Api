import React, { Component } from 'react';
import { Paper, TextField } from "@material-ui/core";

class Searchbar extends Component {
    state = { 
        searchitem : ""
     }
     handlechange = (e) =>{
        this.setState({
            searchitem : e.target.value
        })
        
     }
     handldlesubmit = (e)=>{
         e.preventDefault()
         
         this.props.search(this.state.searchitem)
         console.log(this.state)

     }
    render() { 
        return ( 
            <div className="conrainer">
                <form onSubmit={this.handldlesubmit}>
                <Paper elevation={6} style={{ padding: "25px" }}>
                        <TextField
                            fullWidth
                            label="Search..."
                            onChange={this.handlechange}
                        />
                </Paper>

                </form>
            </div>
         );
    }
}
 
export default Searchbar;