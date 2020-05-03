import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './components/Layout';
import Modal from "./components/Modal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: lightskyblue;
  height: 25px;
  font-weight: bold;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 15px;
  border: 1px solid #d8d8d8;
  list-style: none;
  text-align: left;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #7f7f7f;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  padding: 15px 15px 15px 0;
  color: #000000;
  text-decoration: none;
  text-align: center;
`;

const defaultPath = process.env.REACT_APP_BASE_PATH;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    show: false,
    lists: []
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_API_BASE_URL + '/lists')
      .then(response => response.json())
      .then(data => this.setState({ lists: data.data }));
  }

  render() {
    return (
      <div>
      <Layout/>
      <Wrapper>
        <Modal onClose={this.showModal} show={this.state.show}>
          <h4>Title</h4>
          <input id="title" name="title" type="text" required />
          <h4>Link</h4>
          <input id="link" name="link" type="text" required />
          <h4>Category</h4>
          <input id="category" name="category" type="text" required />
        </Modal>
        
        <h1>Curated Lists</h1>
        <Button onClick={this.showModal}>Add new item</Button>
          <List>
            {this.state.lists.map(list => (
            <ListItem>
              <a href={list.link} target="_blank">{list.title}</a>
            </ListItem>
            ))}
          </List>
      </Wrapper>
      </div>
    );
    }
  }

export default Home;
