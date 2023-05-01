import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import DoDisturbAltOutlinedIcon from "@mui/icons-material/DoDisturbAltOutlined";
import SubdirectoryArrowRightOutlinedIcon from "@mui/icons-material/SubdirectoryArrowRightOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Menu from "@mui/material/Menu";
import { red } from "@mui/material/colors";

function CardComponent({ item }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div key={item.id}>
        <Card>
          {/* <Card sx={{ minWidth: 585 }}> */}
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {item.icon}
              </Avatar>
            }
            action={
              <>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
                  <MenuList>
                    <MenuItem>
                      <ListItemIcon>
                        <BorderColorOutlinedIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Edit</ListItemText>
                    </MenuItem>
                    <Divider variant="middle" />
                    <MenuItem>
                      <ListItemIcon>
                        <SubdirectoryArrowRightOutlinedIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Go To Organization</ListItemText>
                    </MenuItem>
                    <Divider variant="middle" />

                    <MenuItem>
                      <ListItemIcon>
                        <DoDisturbAltOutlinedIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Delete Organization</ListItemText>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            }
            title={
              <div
                style={{
                  display: "flex",
                }}
              >
                {item.title}
              </div>
            }
          />

          <Divider variant="middle" />
          <CardContent>
            <div
              style={{
                display: "flex",
              }}
            >
              {item.subtitle}
            </div>
            <br />
            <ListItem>
              <ListItemText>
                {item.tracking.map((i: any) => {
                  return (
                    <div key={i.id}>
                      <div>Tracking</div>
                      in use:<span style={{ color: "red" }}> {i.inUse}</span>
                      <div>Assigned: {i.assigned}</div>
                    </div>
                  );
                })}
              </ListItemText>
              <ListItemText>
                {item.protection.map((i: any) => {
                  return (
                    <div key={i.id}>
                      <div>Protection</div>
                      in use:
                      <span style={{ color: "green" }}> {i.inUse}</span>
                      <div>Assigned: {i.assigned}</div>
                    </div>
                  );
                })}
              </ListItemText>
            </ListItem>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CardComponent;
