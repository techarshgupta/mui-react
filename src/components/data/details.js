import * as React from "react";
import Stack from "@mui/material/Stack";
import { Box, Container } from "@mui/system";
import { Chip, Tab, Tabs } from "@mui/material";
import Table from "../collapse/table";
import { newHeaders, newRows } from "../../App";

export default function Details() {
  const [selectedTab, setSelectedTab] = React.useState(1);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const tabs = [
    {
      title: 'Schema',
      value: 1,
    },
    {
      title: 'Lineage',
      value: 2,
    },
    {
      title: 'Governamce',
      value: 3,
    },
  ];
  const tableProps= {
    headers: newHeaders,
    rows: newRows,
    rowsPerPage: 5,
    showFirstButton: true,
    showLastButton: true,
    pagination: true,
    collapsible: true,
    selecting: true,
    actions: true,
    sorting: true,
  }
  function getTabPanel(tabId) {
    switch (tabId) {
      case 1:
        return <Table {...tableProps} />
      case 2:
        return `<div>Lineage</div>`
      default:
        return `<div>Governamce</div>`
    }
  }
  return (
    <>
      <Box sx={{ fontWeight: 600, fontSize: "24px", px: 3 }}>
        dev_+c360_ cons _test _equs_file1
      </Box>
      <Box sx={{ fontSize: "16px", py: 2, color: "#666666", px: 3 }}>
        description: sample employee data etc.
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2, md: 2 }}
      >
        <Container sx={{ width: "50%" }}>
          <Box sx={{ pt: 1, display: 'flex' }}>
            <Box sx={{ fontWeight:600, pr:1 }}>Type:</Box>
            <Box>File type</Box>
          </Box>
          <Box sx={{ pt: 1, display: 'flex' }}>
            <Box sx={{ fontWeight:600, pr:1 }}>Classification:</Box>
            <Box>classsification type</Box>
          </Box>
          <Box sx={{ pt: 1, display: 'flex' }}>
            <Box sx={{ fontWeight:600, pr:1 }}>CAR PBLO:</Box>
            <Box>PBLO name</Box>
          </Box>
          <Box sx={{ pt: 1, display: 'flex' }}>
            <Box sx={{ fontWeight:600, pr:1 }}>Tech PBLO:</Box>
            <Box>PBLO name</Box>
          </Box>
        </Container>
        <Container sx={{ width: "50%" }}>
          <Box sx={{ pt: 1, display: 'flex' }}>
            <Box sx={{ fontWeight:600, pr:1 }}>Retention:</Box>
            <Box>time span</Box>
          </Box>
          <Box sx={{ pt: 1, display: 'flex' }}>
            <Box sx={{ fontWeight:600, pr:1 }}>Workspace:</Box>
            <Box>workspace name</Box>
          </Box>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', pt: 3 }}>
            <Box>Tags:</Box>
            <Chip label="First Tag" color="primary" variant="outlined" />
            <Chip label="Second Tag" color="primary" variant="outlined" />
            <Chip label="Third Tag" color="primary" variant="outlined" />
            <Chip label="Fourth Tag" color="primary" variant="outlined" />
          </Stack>
        </Container>
      </Stack>
      <Box component="hr" />
      <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
        {tabs.map((tab, idx) => <Tab label={tab.title} value={tab.value} key={idx } />)}
      </Tabs>
      {getTabPanel(selectedTab)}
    </>
  );
}
