import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

type UserProfileParams = {
  username: string
};

export default function UserProfile() {
  const username = useParams<UserProfileParams>().username;
  return (
    <Box display='flex' justifyContent='center' alignItems='center' p={3}>
      <Typography variant='h1'>
        User {username}'s profile
      </Typography>
    </Box>
  );
}