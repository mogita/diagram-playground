import React from 'react'
import ReactDOM from 'react-dom'
import GraphicDashboard from './graphic_dashboard'
import 'storm-react-diagrams/dist/style.min.css'

function App() {
  return (
    <div className="App">
      <h1>A Demo For Graphic Dashboard</h1>
      <div style={{ height: 600, width: '100%' }}>
        <GraphicDashboard />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
