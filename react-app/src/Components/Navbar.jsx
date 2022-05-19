import React from "react";
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import '/Users/gavinsimpson/final_exam_client_level_2/react-app/src/app.css'

// import { useNavigate } from 'react-router-dom'

const Navbar = () => {


  return (
    <Segment align="center"color="blue" classname="bold">
      <Menu inverted secondary classname="bold">
      <Menu.Item
          data-cy="home-tab"
          name="all"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          data-cy="menu-workshop"
          name="Workshops"
          as={NavLink}
          to={{ pathname: '/Workshops' }}
        />
        <Menu.Item
          data-cy="menu-testing"
          name="Testing"
          as={NavLink}
          to={{ pathname: '/Testing' }}
        />
        <Menu.Item name="Vue" as={NavLink} to={{ pathname: '/Vue' }} />
        <Menu.Item
          name="Productivity"
          as={NavLink}
          to={{ pathname: '/Productivity' }}
        />
        <Menu.Item name="React" as={NavLink} to={{ pathname: '/React' }} />
      </Menu>
    </Segment>
  )
}

export default Navbar
