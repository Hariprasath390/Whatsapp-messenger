import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./TemporaryDrawer.css"; 

const TemporaryDrawer = () => {
  const [state, setState] = useState({
    left: true,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState({ ...state, left: false });
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      className={state.left ? "drawer-open" : "drawer-closed"}
      onClick={() => setState({ ...state, left: false })}
      onKeyDown={() => setState({ ...state, left: false })}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={() => setState({ ...state, left: false })}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
