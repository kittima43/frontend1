import Head from 'next/head'
import Link from 'next/link'
import { Button, Box, ButtonGroup, Checkbox, CardContent, Fab, NoSsr} from '@material-ui/core';

//แทบเมนู
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//วันที่
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
  }));

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

export default function Home() {
    const classes = useStyles();

    

  return (
    <div>
      <Head>
       <title>รับออกแบบและพัฒนาเว็บไซต์</title>
      </Head>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/"><a> Home </a></Link> |  
            <Link href="/about"><a> About </a></Link> |    
            <Link href="/service"><a> Service </a></Link> |    
            <Link href="/products/P001"><a> Products </a></Link> |
            <Link href="/components"><a> Components </a></Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>

      <div>
        <h1><center>Components</center></h1>
        <br/>
        <center>
        
        <br /><br />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <br /><br /><br />
        <Box component="span" m={1}>
          <button>Enter</button>
        </Box>
        <br /><br /><br />
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
           <Button>One</Button>
           <Button>Two</Button>
           <Button>Three</Button>
        </ButtonGroup>
        <br /><br /><br />
        <form className={classes.container} noValidate>
            <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2021-07-14T10:30"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                    }}
                />
            </form>
            <br /><br />
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
        <Fab size= "small" color="secondary" aria-label= "add" > + </Fab>
        <br />
        <br />
        <CardContent> welcome </CardContent>
        <br />
        <br />
        <NoSsr>
            <Box p={2} bgcolor="secondary.main" color="primary.contrastText">
            Components
            </Box>
          </NoSsr>
       </center>
      </div>
    </div>
    )
}