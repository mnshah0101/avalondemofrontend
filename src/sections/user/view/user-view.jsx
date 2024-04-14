// react imports


// components imports
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/iconify';


// chatbot imports


// chatbot configs
import ChatbotView from './chatbot/ChatbotView';







// ----------------------------------------------------------------------

export default function UserPage() {




 


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Ask Rachel</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button>

         
      </Stack>

        <ChatbotView/>

        

    </Container>
  );
}
