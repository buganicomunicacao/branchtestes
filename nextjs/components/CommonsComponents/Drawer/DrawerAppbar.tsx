import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import useStyles from './DrawerStyle'

interface Props {
  handleDrawerToggle: () => void
  title?: string
}
const DrawerAppbar = ({ handleDrawerToggle, title }: Props) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default DrawerAppbar
