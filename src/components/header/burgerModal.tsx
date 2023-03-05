import { useState, Fragment } from "react";
import EditProjectModal from "../projects/editProj";
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
import CreateProjectDialog from "../projects/create_project";
import { useProjectContext } from "../context/projectContext";

const BurgerMenu = ({ active }: { active: boolean }) => {
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
    <Box role="presentation">
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
            <EditProjectModal proj={proj} />
            <Button
              onClick={() => deleteProject(proj.id)}
              variant="outlined"
              color="error"
            >
              <ClearIcon color="error" />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div
      className="burger-menu-button"
      style={active ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <Fragment key={"top"}>
        <Button
          sx={{
            bgcolor: "primary.dark",
            color: "text.primary",
            ":hover": { bgcolor: "primary.main", color: "text.primary" },
          }}
          onClick={toggleDrawer(true)}
          variant="text"
          disabled={!active}
        >
          <MenuIcon fontSize="large" />
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
