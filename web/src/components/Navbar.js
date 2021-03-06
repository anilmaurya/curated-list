import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const ListItem = styled.li`
float: left;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  a:hover:not(.active) {background-color: #111;}
  a.active {background-color: #4CAF50;}
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const defaultPath = process.env.REACT_APP_BASE_PATH;

class Navbar extends Component {
    render() {
        return (
              <List>
                 <ListItem><StyledLink to={`/`}>Curated List</StyledLink></ListItem>
                 <ListItem><a href="https://github.com/anilmaurya/curated-list" target="_blank">Github</a></ListItem>
                 <ListItem><a href="https://github.com/anilmaurya/" target="_blank">About</a></ListItem>
              </List>    
          );
    }
}

export default Navbar;