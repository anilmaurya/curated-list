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
  height: 40px;
  font-weight: bold;
  cursor: pointer;
`;

const List = styled.ul`
counter-reset: gradient-counter;
list-style: none;
margin: 1.75rem 0;
padding-left: 1rem;
> li {
  background: white;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  @extend %boxshadow;
  counter-increment: gradient-counter;
  margin-top: 1rem;
  min-height: 1rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  &::before,
  &::after {
    background: linear-gradient(135deg, $blue 0%,$green 100%);
    border-radius: 1rem 1rem 0 1rem;
    content: '';
    height: 3rem;
    left: -1rem;
    overflow: hidden;
    position: absolute;
    top: -1rem;
    width: 3rem;
  }
  &::before {
    align-items: flex-end;
    @extend %boxshadow;
    content: counter(gradient-counter);
    color: $black;
    display: flex;
    font: 900 1.5em/1 'Montserrat';
    justify-content: flex-end;
    padding: 0.125em 0.25em;
    z-index: 1;
  }
  @for $i from 1 through 5 {
    &:nth-child(10n+#{$i}):before {
      background: linear-gradient(135deg, rgba($green, $i * 0.2) 0%,rgba($yellow, $i * 0.2) 100%);
    }
  }
  @for $i from 6 through 10 {
    &:nth-child(10n+#{$i}):before {
      background: linear-gradient(135deg, rgba($green, 1 - (($i - 5) * 0.2)) 0%,rgba($yellow, 1 - (($i - 5) * 0.2)) 100%);
    }
  }
  + li {
    margin-top: 1rem;
  }
}
`;

const ListItem = styled.li`  
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
    fetch(process.env.REACT_APP_API_BASE_URL + '/lists', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
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
