import React from "react";
import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";

export function Head(props) {
  const { headers, onSelectAllClick, numSelected, rowCount, collapsible, selecting } = props;
  return (
    <TableHead
      sx={{
        "& .MuiTableCell-stickyHeader": {
          backgroundColor: "grey.300",
          fontWeight: "600",
        },
      }}
    >
      <TableRow>
        {collapsible && <TableCell /> }
        {selecting && <TableCell padding="checkbox">
           <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>}
        {headers.map((item, idx) => (
          <TableCell scope="header" key={idx}>
            {item.value}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
