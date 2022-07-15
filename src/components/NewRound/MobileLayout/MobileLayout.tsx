import React from 'react';
import { Container } from '@mui/material';

function MobileLayout() {
  return (
    <Container sx={{ display: { xs: 'flex', md: 'none' } }}>
      <div style={{ height: '500', width: '100%' }}>
        <div>Mobile layout</div>
      </div>
    </Container>
  );
}

export default MobileLayout;
