import React, {Component} from 'react'

class StorePicker extends Component{
    render(){
        return(
            <form className='store-selector'>
                {/*heelo*/}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder={"store Name"}/>
                <button type={'submit'}>Visit Store -></button>
            </form>
        )
    }
}

export default StorePicker