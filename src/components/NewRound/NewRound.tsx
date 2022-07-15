import './styles.css';
import * as React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import DesktopLayout from './DesktopLayout/DesktopLayout';
import MobileLayout from './MobileLayout/MobileLayout';

const NewRound = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Hole', width: 90 },
    {
      field: 'playerName',
      headerName: 'player',
      width: 150,
      editable: true
    },
    {
      field: 'score',
      headerName: 'Score',
      width: 150,
      editable: true
    }
  ];

  const rows = [
    { id: 1, playerName: 'Snow', score: 2 },
    { id: 2, playerName: 'Lannister', score: 3 },
    { id: 3, playerName: 'Ted', score: 1 },
    { id: 4, playerName: 'Stark', score: 4 },
    { id: 5, playerName: 'Targaryen', score: 4 },
    { id: 6, playerName: 'Melisandre', score: 2 },
    { id: 7, playerName: 'Clifford', score: 5 },
    { id: 8, playerName: 'Frances', score: 4 },
    { id: 9, playerName: 'Roxie', score: 2 }
  ];

  return (
    <>
      <DesktopLayout rows={rows} columns={columns} />
      <MobileLayout />
    </>
  );
};

export default NewRound;