import React, { Component } from 'react'
import './App.css'
import FileUpload from './FileUpload'
import CSVLineChart from './CSVLineChart'
import Papa from 'papaparse'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name:""
    }
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">CSV to LineChart</header>
      {this.state.name ? <CSVLineChart fileName={this.state.name} fileData={this.state.fileData}></CSVLineChart> : ""}
      <FileUpload handleFileUpload={this.handleFileUpload.bind(this)}></FileUpload>
      </div>
    )
  }

  handleFileUpload(files){
    var self = this
    console.log(files.currentTarget.files)
    let file = files.currentTarget.files[0]
    Papa.parse(file,{
      complete:function (results) {
        console.log(results.data)
        var data = results.data.map(function (element) {
          return {
            name: element[0],
            data : element.slice(1).reduce(function (obj, ele) {
              obj[ele.split("|")[0]] = ele.split("|")[1]
              return obj
            },{})
          }
        })
        console.log(data)
        self.setState({fileData:data})
      },
      error : function (params) {
        console.log('Invalid Format')
      }
    })
    self.setState({name:files.currentTarget.files[0].name})
  }
}

export default App
