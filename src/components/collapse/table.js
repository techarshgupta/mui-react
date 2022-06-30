import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import { CustomPagination } from "../pagination";
import { Row } from "./row";
import { Head } from "./head";
import { EnhancedTableToolbar } from './enhancedTableToolbar'


export default function TutorialTable(props) {
  const {
    headers,
    rows,
    rowsPerPage,
    showFirstButton,
    showLastButton,
    pagination,
    collapsible,
    selecting,
  } = props;
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
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
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((item) => item.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const isSelected = (id) => selected.indexOf(id) !== -1;
  return (
    <>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table stickyHeader={true}>
          <Head
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={rows.length}
            headers={headers}
            collapsible={collapsible}
            selecting={selecting}
          />
          <TableBody>
            {rowsData.map((item, idx) => (
              <Row item={item} key={idx} collapsible={collapsible} selecting={selecting} isSelected={isSelected } handleClick={handleClick} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {paginationProps.pagination && <CustomPagination {...paginationProps} />}
    </>
  );
}
