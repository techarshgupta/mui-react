import React from 'react';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import LastPageIcon from "@mui/icons-material/LastPageOutlined";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export function CustomPagination(props) {
  const theme = useTheme();
  const { page, count, rowsPerPage, showFirstButton, showLastButton, handlePageClick } = props;

  const handleFirstPageButtonClick = () => {
    handlePageClick(0);
  };

  const handleBackButtonClick = () => {
    handlePageClick(page - 1);
  };

  const handleNextButtonClick = () => {
    handlePageClick(page + 1)
  };

  const handleLastPageButtonClick = () => {
    handlePageClick((Math.ceil(count / rowsPerPage)-1));
  };
  const pages = [];
  
  for (let index = 0; index < Math.ceil(count / rowsPerPage); index++) {
    pages.push({title: index+1, value: index});
  }

  
  const from = (page * rowsPerPage) + 1;
  const to = (page * rowsPerPage + rowsPerPage) > count ? count : page * rowsPerPage + rowsPerPage;
    
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3} sx={{ alignItems: "center" }}>
        <Grid item xs>
          {`Showing ${from}-${to} of ${count} Items`}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                displayEmpty
                value={page}
                onChange={(e) => handlePageClick(e.target.value)}
                renderValue={(selected) => {
                  return `Page: ${selected+1}`;
                }}
              >
                {pages.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div>of 2</div>
          </Box>
          <Box sx={{ flexShrink: 0, ml: 4 }}>
            { showFirstButton && 
            <Button
              sx={{
                border: "1px solid black",
                color: 'black',
                minWidth: 'fit-content',
                padding: '5px 8px',
              }}
              variant="outlined"
              disabled={page === 0}
              aria-label="first page"
              onClick={handleFirstPageButtonClick}
            >
              {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
              </Button>
            }
            <Button
              sx={{
                border: "1px solid black",
                color: 'black',
                minWidth: 'fit-content',
                padding: '5px 8px',
                margin: '0 4px 0 16px'
              }}
              variant="outlined"
              onClick={handleBackButtonClick}
              disabled={page === 0}
              aria-label="previous page"
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
            <Button
              sx={{
                border: "1px solid black",
                color: 'black',
                minWidth: 'fit-content',
                padding: '5px 8px',
                margin: '0 16px 0 4px'
              }}
              variant="outlined"
              onClick={handleNextButtonClick}
              disabled={page >= (Math.ceil(count / rowsPerPage)-1)}
              aria-label="next page"
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
            { showLastButton && 
            <Button
              sx={{
                border: "1px solid black",
                color: 'black',
                minWidth: 'fit-content',
                padding: '5px 8px',
              }}
              variant="outlined"
              onClick={handleLastPageButtonClick}
              disabled={page >= (Math.ceil(count / rowsPerPage)-1)}
              aria-label="last page"
            >
              {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
            </Button>}
          </Box>
        </Grid>
        <Grid item xs sx={{ textAlign: "end" }}>
          <div>
            Items per page 
            <span style={{marginLeft: '12px'}}>{ rowsPerPage }</span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}