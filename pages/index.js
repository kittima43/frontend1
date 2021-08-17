import Head from 'next/head'
import Link from 'next/link'
import { Button, Box, ButtonGroup, Container, Checkbox, TextField, MenuItem, CardContent, Fab, NoSsr, List } from '@material-ui/core';

export default function Home() {
  return (
    <div>
      <Head>
       <title>รับออกแบบและพัฒนาเว็บไซต์</title>
      </Head>
      <div>
        <h1><center>Index Page</center></h1>
        <br/>
        <center>
        <Link href="/"><a> Home </a></Link> |  
        <Link href="/about"><a> About </a></Link> |  
        <Link href="/service"><a> Service </a></Link> |  
        <Link href="/products/P001"><a> Products </a></Link> |
        <Link href="/components"><a> Components </a></Link>
        <br />
        <br />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <br />
        <br />
        <Box component="span" m={1}>
          <button>Enter</button>
        </Box>
        <br />
        <br />
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
           <Button>One</Button>
           <Button>Two</Button>
           <Button>Three</Button>
        </ButtonGroup>
        <Container fixed></Container>
        <br />
        <br />
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
            Primary
        </Button>
        <Button variant="outlined" color="secondary">
           Secondary
        </Button>
        <Button variant="outlined" disabled>
           Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
           Link
        </Button>
        <br />
        <br />
              <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        <br />
        <br />
        <TextField id="select" label="Age" value="20" select>
        <MenuItem value="10">twenty</MenuItem>
        <MenuItem value="20">Twenty one</MenuItem>
        </TextField>
        <br />
        <br />
        <CardContent> Word of the Day </CardContent>
        <br />
        <br />
        <Fab size= "small" color="secondary" aria-label= "add" > + </Fab>
        <br />
        <br />
        <List component="nav" aria-label="main mailbox folders"> Test List</List>
          <br />
          <br />
          <NoSsr>
            <Box p={2} bgcolor="secondary.main" color="primary.contrastText">
              Client only
            </Box>
          </NoSsr>
        </center>
      </div>
    </div>
  )
}