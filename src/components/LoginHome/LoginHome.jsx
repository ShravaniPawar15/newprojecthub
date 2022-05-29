import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
// import AddIcon from '@material-ui/icons/Add';
// import Info from "./components/Information/infromation";
import Fab from '@mui/material/Fab';
import logo from '../../final-logo-01.jpg';
import { Row,Col } from "react-bootstrap";
import Filter from "../filters/filter"

const pages = ["Home", "About us", "Contact"];
const settings = ["Profile", "Editproject", "Dashboard", "Logout"];

function LoginHome() {
    const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
      
    <>
    <div className="gradient__bg">
    <AppBar position="static" className="gradient__bg">
    <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img style={{width:"170px",height:"60px",marginTop:"5px",marginBottom:"5px",paddingBottom:"5px"}} src={logo}  />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img style={{width:"170px",height:"60px",marginTop:"5px",marginBottom:"5px",paddingBottom:"5px"}} src={logo}  />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting,index) => (
                  <MenuItem key={setting} >
                    <Typography textAlign="center" onClick={(e) => navigate("/"+setting)()} value={index}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      
     </AppBar>
       <Row>
         <Col md={3} >
         <Box width={20} component="span" m={1} >
          <div width="20">
            
            <Col>
            
            <Button style={{marginLeft:"200px"}} onClick={() => navigate("/info")} variant="contained" color="primary" >Add Project</Button>
            </Col>
            </div>          

        </Box>
         </Col>
         <Col md={6}>
         </Col>
         <Col md={3 }>
               <Filter/>
         </Col>
       </Row>
      {/* <Box width={20} component="span" m={1} >
          <div width="20">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Button onClick={() => navigate("/info")} variant="contained" color="primary" >Add Project</Button>
            
            </div>          

        </Box> */}
       
        {/* <Container maxWidth="sm"  >
            
        </Container> */}

</div> 
    </>
  );
}

export default LoginHome;