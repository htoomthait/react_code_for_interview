import { websiteTheme } from '../config/theme';
import post1 from '../dummy_data/blog-post.1.md?raw';
import post2 from '../dummy_data/blog-post.2.md?raw';
import post3 from '../dummy_data/blog-post.3.md?raw';
import { ThemeProvider } from 'styled-components';
import { Container, CssBaseline, Grid } from '@mui/material';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturePost';
import Main from '../components/Main';
import Sidebar from '../components/Siderbar';
import Footer from '../components/Footer';
import { mainFeaturedPost, featuredPosts } from '../dummy_data/featuredPost';
import { sideBar } from '../dummy_data/sideBar';
import {sections} from '../dummy_data/sections';




const posts = [post1, post2, post3];




const Blog = () => {
  return (
    <ThemeProvider theme={websiteTheme}> 
        <CssBaseline />
        <Container maxWidth="lg"> 
            <Header title="Blog" sections={sections} />
            <main>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                        <FeaturedPost key={post.title} post={post} />
                    ))}
                    
                </Grid>
                <Grid container spacing={5} sx={{ mt: 3 }}> 
                    <Main title="From the firehose " posts={posts} />
                    <Sidebar 
                        title={sideBar.title}
                        description={sideBar.description}
                        archives={sideBar.archives}
                        social={sideBar.social}
                    />
                </Grid>
                
                
            </main>
        </Container>
        <Footer 
            title="Footer"
            description="Something here to give the footer a purpose!"
        />
    </ThemeProvider>
  )
}

export default Blog