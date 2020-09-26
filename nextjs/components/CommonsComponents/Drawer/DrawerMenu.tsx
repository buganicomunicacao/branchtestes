import React, { useState, ReactChild, ReactChildren } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { useTheme } from '@material-ui/core/styles'
import useStyles from './DrawerStyle'
import DrawerAppbar from './DrawerAppbar'
import DrawerItens from './DrawerItens'

interface Props {
  title?: string
  children?: ReactChildren | ReactChild
}
const MenuDrawer = ({ children, title }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DrawerAppbar handleDrawerToggle={handleDrawerToggle} title={title} />

      <nav className={classes.drawer} aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <DrawerItens />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            <DrawerItens />
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default MenuDrawer
