import React from "react";
import {
  Button,
  Chip,
  IconButton,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { CustomPagination } from "./pagination";

export default function TutorialTable(props) {
  const {
    headers,
    rows,
    rowsPerPage,
    showFirstButton,
    showLastButton,
    pagination,
  } = props;
  const [page, setPage] = React.useState(0);
  const handlePageClick = (page) => {
    setPage(page);
  };
  const paginationProps = {
    showFirstButton,
    showLastButton,
    pagination,
    page,
    handlePageClick,
    rowsPerPage,
    count: rows.length,
  };
  let rowsData = rows;
  if (paginationProps.pagination) {
    rowsData = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }
  return (
    <>
      <TableContainer>
        <Table stickyHeader={true}>
          <TableHead
            sx={{
              "& .MuiTableCell-stickyHeader": {
                backgroundColor: "grey.300",
                fontWeight: "600",
              },
            }}
          >
            <TableRow>
              {headers.map((item, idx) => (
                <TableCell scope="header" key={idx}>
                  {item.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((item, idx) => (
              <TableRow key={idx}>
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
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {paginationProps.pagination && <CustomPagination {...paginationProps} />}
    </>
  );
}
