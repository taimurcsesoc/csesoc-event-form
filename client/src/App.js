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
            <Col offset={8} span={8}>
              <MainForm/>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomEmail
                title="HELLO THERE"
                recipient="bla bla bla"
                organiser="me"
                subject="event name"
                portfolio="portfolio"
              />
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
