import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  styled,
  useTheme,
} from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const theme = useTheme();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("log");

  const handleNavChange = (event, newValue) => {
    setCurrentPage(newValue);
    history.push(`/${newValue}`);
  };

  const StyledBottomNavigation = styled(BottomNavigation)({
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.secondary.main,
    height: "50px",
    position: "fixed",
    bottom: 0,
    maxWidth: "100%",
    "@media(max-width: 300px)": {},
  });

  return (
    <StyledBottomNavigation
      value={currentPage}
      onChange={handleNavChange}
      showLabels
    >
      <BottomNavigationAction
        label="Log"
        value="log"
        icon={<DateRangeIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        label="Groups"
        value="groups"
        icon={<GroupIcon />}
      />
      <BottomNavigationAction
        label="Chats"
        value="chats"
        icon={<ChatBubbleIcon />}
      />
    </StyledBottomNavigation>
  );
};
