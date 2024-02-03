import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

async function IndexPage() {
  const posts = await getPosts();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Posts
          </Typography>
        </Toolbar>
      </AppBar>

      <List>
        {posts && posts.map((post: {id: number, title: string}) => (
        <ListItem key={post.id} disablePadding>
          <ListItemButton LinkComponent={Link} href={`/posts/${post.id}`}>
            <ListItemText primary={post.title} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default IndexPage;
