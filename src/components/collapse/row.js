import React from "react";
import {
  Button,
  Checkbox,
  Chip,
  IconButton,
  Link,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { RowExpand } from "./rowExpand";

export function Row(props) {
  const { item, collapsible, selecting, isSelected, handleClick } = props;
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
        <TableCell scope="row">
          <Stack direction="column">
            <Link
              href={`https://www.google.com/search?q=${item.dataset}`}
              target="_blank"
            >
              {item.dataset}
            </Link>
            <div>{item.description}</div>
          </Stack>
        </TableCell>
        <TableCell scope="row">{item.type}</TableCell>
        <TableCell scope="row">
          <Link
            href={`https://www.google.com/search?q=${item.owner}`}
            target="_blank"
          >
            {item.owner}
          </Link>
        </TableCell>
        <TableCell scope="row">
          <Chip size="small" label={item.access} />
        </TableCell>
        <TableCell scope="row">{item.date}</TableCell>
        <TableCell scope="row">
          <Button
            sx={{
              width: 200,
              border: "2px solid black",
              color: "black",
            }}
            variant="outlined"
            href={`https://www.google.com/search?q=${item.button}`}
            target="_blank"
          >
            {item.button}
          </Button>
        </TableCell>
        <TableCell scope="row">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MoreHorizIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      { collapsible && <RowExpand item={item} open={open} />}
    </>
  );
}
