import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import logo from './static/csesocwhiteblue.png'
import MainForm from './components/MainForm'
import CustomEmail  from './components/CustomEmail'

import './styles/App.css'

class App extends Component {
  render() {
    return (
      <Layout>
        <Layout.Header>
          <img src={logo}/>
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
