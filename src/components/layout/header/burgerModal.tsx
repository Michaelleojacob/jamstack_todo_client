import { useState, Fragment } from "react";
import {
  Box,
  SwipeableDrawer,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InboxIcon from "@mui/icons-material/Inbox";
import AddIcon from "@mui/icons-material/Add";
import { useProjectContext } from "../../context/projectContext/projectContext";

const BurgerMenu = () => {
  const { projects, activeProject, changeActiveProject, noActiveProject } =
    useProjectContext();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      open ? handleOpen() : handleClose();
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary={"add project"} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={noActiveProject}>
            <ListItemIcon>
              {!activeProject ? <ArrowForwardIosIcon /> : <InboxIcon />}
            </ListItemIcon>
            <ListItemText primary={"all tasks"} />
          </ListItemButton>
        </ListItem>

        {projects.map((proj) => (
          <ListItem key={`${proj.id}_${proj.createdAt}`} disablePadding>
            <ListItemButton
              onClick={() => changeActiveProject(proj.id)}
              disabled={activeProject === proj.id}
            >
              <ListItemIcon>
                {activeProject === proj.id ? (
                  <ArrowForwardIosIcon />
                ) : (
                  <FolderIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={proj.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="burger-menu-button">
      <Fragment key={"top"}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={"top"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
};

export default BurgerMenu;
