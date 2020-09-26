import router from 'next/router'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIcon from '@material-ui/icons/Assignment'
import useStyles from './DrawerStyle'

const DrawerItens = () => {
  const classes = useStyles()

  const goToPage = (url: string | null) => router.push({ pathname: url })

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={() => goToPage('/clientes')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItem>

        <ListItem button onClick={() => goToPage('/pedidos')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Pedidos" />
        </ListItem>
      </List>
    </div>
  )
}

export default DrawerItens
