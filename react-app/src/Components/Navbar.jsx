import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()

  return (
    <Segment align="center" inverted color="blue">
      <Menu inverted secondary>
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
      </Menu>
    </Segment>
  )
}

export default Navbar
