import React, { Component } from 'react'
import { TextField } from '@material-ui/core'




class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: ''
        }
    }



    handlerInputChange = (event) => {
        this.setState({
            country: event.target.value
        })

    }

    handlerInputSubmit = () => {
    
           var field = document.getElementById('filled-basic').value;
        if (field != null) {
            localStorage.setItem('field',field)
            

        }
        else {
            field = null;
        }
        
       
    }




    render() {
        return (
            <form
                onSubmit={this.handlerInputSubmit}
            >

                <div>
                    <TextField id="filled-basic" label="Country" variant="filled" type="text"
                        value={this.state.country} onChange={this.handlerInputChange}
                    ></TextField>
                </div>
            </form>




        )
    }
}


export default Form
