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
import "./TemporaryDrawer.css"; // Import your CSS file for styling

const TemporaryDrawer = () => {
  const [state, setState] = useState({
    left: true,
  });

  useEffect(() => {
    // Close the left drawer after a certain timeout (e.g., 3000 milliseconds)
    const timeoutId = setTimeout(() => {
      setState({ ...state, left: false });
    }, 3000);

    // Cleanup the timeout to avoid side effects
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
