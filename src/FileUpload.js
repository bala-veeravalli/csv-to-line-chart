import React, { Component } from 'react'

class FileUpload extends Component{
    render(){
        return <div>
            <br/>
            <p>Upload csv here</p>
            <input type="file" name="csv" id="csv" accept=".csv" onChange={this.props.handleFileUpload}/>
        </div>
    }
}
export default FileUpload