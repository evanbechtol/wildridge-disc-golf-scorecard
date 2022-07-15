import React from 'react';
import { Container } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface PropTypes {
  rows: [any] | any;
  columns: GridColDef[];
}

function DesktopLayout({ rows, columns }: PropTypes) {
  return (
    <Container sx={{ display: { xs: 'none', md: 'flex' } }}>
      <div style={{ height: '500', width: '100%' }}>
        <div>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            columnBuffer={3}
            disableColumnSelector={true}
            disableColumnMenu={true}
            disableColumnFilter={true}
            disableSelectionOnClick
          />
        </div>
      </div>
    </Container>
  );
}

export default DesktopLayout;
