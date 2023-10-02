import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuBook from "@mui/icons-material/MenuBook";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "Proyectos web",
      icon: <LaptopChromebookRoundedIcon />,
      link: "/portfolio/proyects",
    },
    {
      text: "Piezas de TV",
      icon: <LiveTvRoundedIcon />,
      link: "/portfolio/tv",
    },
    {
      text: "Artículos",
      icon: <MenuBook />,
      link: "/portfolio/articles",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container" style = {{marginLeft: "30px"}}>
        <a
          href="https://twitter.com/ereillo11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696260895/twitter_2111819_hkdds9.png"
            alt="Twitter"
            width="30px"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/evelio-reillo-22b652106/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696260888/linkedin_3536505_u8psjw.png"
            alt="LinkedIn"
            width="30px"
          />
        </a>
        <a
          href="https://github.com/ereillo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dj9npvnlg/image/upload/v1696260853/github_733553_s9muet.png"
            alt="GitHub"
            width="30px"
          />
        </a>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.link}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    
  );
};

//     //   <div style={{ display: 'flex', justifyContent: 'center' }}>
//     //     <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="justify-content-center">

//     //       <Container>
//     //         <Navbar.Collapse id="navbar-links-container">
//     //           <Nav className="mr-auto">
//     //             <Nav.Link as={NavLink} to="/portfolio/about" style={linkStyle}>
//     //               Sobre mí
//     //             </Nav.Link>
//     //             <Nav.Link as={NavLink} to="/portfolio/proyects" style={linkStyle}>
//     //               Proyectos web
//     //             </Nav.Link>
//     //             <Nav.Link as={NavLink} to="/portfolio/tv" style={linkStyle}>
//     //               Piezas y apariciones en TV
//     //             </Nav.Link>
//     //             <Nav.Link as={NavLink} to="/portfolio/articles" style={linkStyle}>
//     //               Artículos publicados
//     //             </Nav.Link>
//     //           </Nav>
//     //         </Navbar.Collapse>
//     //       </Container>
//     //     </Navbar>
//     //   </div>
//     );
//   }

export default CustomNavbar;
