import { useState, Fragment } from "react";
import EditProjectModal from "./editProj";
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
import ClearIcon from "@mui/icons-material/Clear";
import CreateProjectDialog from "./create_project";
import { useProjectContext } from "../../context/projectContext/projectContext";

const BurgerMenu = () => {
  const {
    projects,
    activeProject,
    changeActiveProject,
    noActiveProject,
    deleteProject,
  } = useProjectContext();
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
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <CreateProjectDialog closeBurger={handleClose} />

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              noActiveProject();
              handleClose();
            }}
          >
            <ListItemIcon>
              {!activeProject ? <ArrowForwardIosIcon /> : <InboxIcon />}
            </ListItemIcon>
            <ListItemText primary={"all tasks"} />
          </ListItemButton>
        </ListItem>

        {projects.map((proj) => (
          <ListItem key={`${proj.id}_${proj.createdAt}`} disablePadding>
            <ListItemButton
              onClick={() => {
                changeActiveProject(proj.id);
                handleClose();
              }}
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
            <EditProjectModal id={proj.id} closeBurger={handleClose} />
            <Button onClick={() => deleteProject(proj.id)}>
              <ClearIcon color="error" />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="burger-menu-button">
      <Fragment key={"top"}>
        <Button onClick={toggleDrawer(true)} variant="contained">
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
