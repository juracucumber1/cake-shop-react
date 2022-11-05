import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

export interface PageLayoutProps {
  title: React.ReactNode
  loading?: boolean
}

export const PageLayout: React.FC<React.PropsWithChildren<PageLayoutProps>> = ({
  title,
  children,
  loading,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Typography variant="h5">{title}</Typography>

      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={32} />
        </Box>
      ) : (
        <Box>{children}</Box>
      )}
    </Box>
  )
}
