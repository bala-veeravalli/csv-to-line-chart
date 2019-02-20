import React, { Component } from "react"
import {LineChart} from 'react-chartkick'
import Chart from 'chart.js'

class CSVLineChart extends Component{
    render(){
        return <div>
            <p>{this.props.fileName}</p>
            <LineChart data={this.props.fileData} xtitle="Year" ytitle="Count" curve={false} discrete={false}></LineChart>
        </div>
    }
}

export default CSVLineChart