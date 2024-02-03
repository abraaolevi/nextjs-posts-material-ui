import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

  async function getSinglePost(postId: string) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.json();
  }
  
  async function SinglePostPage({ params }: {params: { postId: string }}) {
    const post = await getSinglePost(params.postId);
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link href="/">
                <ArrowBackIcon />
            </Link>
          </IconButton>
          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {post.title}
            </Typography>
          </Toolbar>
        </AppBar>
  
        <Typography variant="body1" component="div" sx={{ padding: 2 }}>
            {post.body}
        </Typography>
      </Box>
    );
  }
  
  export default SinglePostPage;
  