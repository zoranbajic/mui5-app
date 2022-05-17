import { Button, Typography } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button
        startIcon={<Settings />}
        variant='contained'
        color='secondary'
        size='small'
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant='contained'
        color='success'
        size='small'
      >
        Add New Post
      </Button>
      <Button variant='disabled'>Outlined</Button>
      <Typography variant='h1' component='p'>
        It uses h1 style but it's a p tag
      </Typography>{' '}
    </div>
  );
}

export default App;
