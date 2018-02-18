import React from 'react'
import { Layout, Row, Col } from 'antd'
import logo from './static/csesocwhiteblue.png'
import MainForm from './components/MainForm'

import './styles/App.css'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <img alt="CSESoc logo" src={logo}/>
        </Layout.Header>
        <Layout.Content style={{padding: "20px"}}> 
          <Row>
            <Col offset={4} span={16}>
              <MainForm/>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>
          CSESoc 2018
        </Layout.Footer>
      </Layout>
    );
  }
}

export default App
