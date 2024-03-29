import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const NotFoudPage: FC = () => (
  <>
    <Typography variant="h1" align="center" sx={{ lineHeight: 1.5 }}>
      This page doesn&apos;t exist.
    </Typography>

    <Typography align="center" sx={{ lineHeight: 1.5 }}>
      Please go to: <Link to="/">Homepage</Link>
    </Typography>
  </>
)

export default NotFoudPage
