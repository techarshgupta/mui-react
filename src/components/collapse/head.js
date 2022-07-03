import React from "react";
import {
  Box,
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

export function Head(props) {
  const {
    headers,
    onSelectAllClick,
    numSelected,
    rowCount,
    collapsible,
    selecting,
    actions,
    sorting,
    order,
    orderBy,
    onRequestSort,
  } = props;
  console.log(props);
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
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
        {collapsible && <TableCell />}
        {selecting && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
        )}
        {headers.map((item, idx) => (
          <TableCell
            scope="header"
            key={idx}
            sortDirection={orderBy === item.id ? order : false}
          >
            {sorting ? (
              <TableSortLabel
                active={orderBy === item.id}
                direction={orderBy === item.id ? order : "asc"}
                onClick={createSortHandler(item.id)}
              >
                {item.value}
                {orderBy === item.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              item.value
            )}
          </TableCell>
        ))}
        {actions && <TableCell />}
      </TableRow>
    </TableHead>
  );
}
