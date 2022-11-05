import {
  AppBar as AppBarMui,
  Fab,
  IconButton,
  styled,
  Toolbar,
} from '@mui/material'
import {
  Category as CategoryIcon,
  Add as AddIcon,
  Reorder as ReorderIcon,
} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { Routes } from '../../enum'

import styles from './AppLayout.module.scss'

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
})

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <AppBarMui
        position="fixed"
        color="primary"
        sx={{ top: 'auto', bottom: 0 }}
      >
        <Toolbar className="flex justify-around items-center">
          <NavLink to={`/${Routes.PRODUCT}`}>
            <IconButton color="inherit">
              <CategoryIcon />
            </IconButton>
          </NavLink>

          <IconButton disabled />

          <StyledFab color="secondary">
            <NavLink to={`/${Routes.RECIPE}/${Routes.CREATE}`}>
              <AddIcon />
            </NavLink>
          </StyledFab>

          <NavLink to={`/${Routes.RECIPE}`}>
            <IconButton color="inherit">
              <ReorderIcon />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBarMui>

      <div className={styles.body}>{children}</div>
    </div>
  )
}
