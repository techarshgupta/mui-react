import React from "react";
import {
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { RowExpand } from "./rowExpand";

export function EnhancedRow(props) {
  const { item, collapsible, selecting, isSelected, handleClick, actions, headers } = props;
  const [open, setOpen] = React.useState(false);
  const isItemSelected = isSelected(item.id);
  const labelId = `enhanced-table-checkbox-${item.id}`;
  return (
    <>
      <TableRow>
        {collapsible && <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>}
        { selecting && 
          <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={isItemSelected}
            inputProps={{
              'aria-labelledby': labelId,
            }}
            onClick={(event) => handleClick(event, item.id)}
          />
        </TableCell>
        }
        {/* <TableCell scope="row">
          {item.dataset}
        </TableCell>
        <TableCell scope="row">{item.type}</TableCell>
        <TableCell scope="row">
          {item.owner}
        </TableCell>
        <TableCell scope="row">
          {item.access}
        </TableCell>
        <TableCell scope="row">{item.date}</TableCell>
        <TableCell scope="row">
          {item.button}
        </TableCell> */}
        {headers.map((header, idx) => 
          <TableCell scope="row" key={idx}>{item[header.key]}</TableCell>
        )}
        {actions && <TableCell scope="row">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MoreHorizIcon />
          </IconButton>
        </TableCell>}
      </TableRow>
      { collapsible && <RowExpand item={item} open={open} />}
    </>
  );
}
