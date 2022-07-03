import React from "react";
import { Table, TableBody, TableContainer } from "@mui/material";
import { CustomPagination } from "../pagination";
import { Row } from "./row";
import { Head } from "./head";
import { EnhancedTableToolbar } from "./enhancedTableToolbar";
import { EnhancedRow } from "./enhancedRow";

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
    actions,
    sorting,
  } = props;
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(2);
  const handlePageClick = (page) => {
    setPage(page);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const paginationProps = {
    showFirstButton,
    showLastButton,
    pagination,
    page,
    handlePageClick,
    rowsPerPage,
    count: rows.length,
    sorting,
  };
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  let rowsData = rows;
  if (sorting && pagination) {
    rowsData = stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    rowsData = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  } else if (sorting && !pagination) {
    rowsData = stableSort(rows, getComparator(order, orderBy));
  } else if (pagination && !sorting) {
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
        selected.slice(selectedIndex + 1)
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
            actions={actions}
            sorting={sorting}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {rowsData.map((item, idx) => (
              <EnhancedRow
                item={item}
                key={idx}
                collapsible={collapsible}
                selecting={selecting}
                isSelected={isSelected}
                handleClick={handleClick}
                actions={actions}
                headers={headers}
                index={idx}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {paginationProps.pagination && <CustomPagination {...paginationProps} />}
    </>
  );
}
