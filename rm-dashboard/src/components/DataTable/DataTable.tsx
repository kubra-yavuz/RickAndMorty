import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCharacter } from '../../redux/slices/characterSlice';
import type { Character } from '../../types/Character';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import type { RootState } from '../../redux/store';
import './DataTable.css';

type Props = {
    data: Character[];
};

function DataTable({ data }: Props) {
    const dispatch = useDispatch();
    const selectedCharacter = useSelector(
        (state: RootState) => state.character.selectedCharacter
    );
    const { status, gender } = useSelector((state: RootState) => state.filter);
    const filteredData = data.filter((char) => {
        const statusMatch = !status || char.status === status;
        const genderMatch = !gender || char.gender === gender;
        return statusMatch && genderMatch;
    });

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'image',
            headerName: 'Image',
            width: 150,
            renderCell: (params) => (
                <img src={params.value} alt={params.row.name} width={50} />
            ),
        },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'species', headerName: 'Species', width: 150 },
    ];

    return (
        <div>
            <Paper className='paper-container'>
                <DataGrid
                    className='data-grid'
                    rows={filteredData}
                    columns={columns}
                    pageSizeOptions={[10]}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 10, page: 0 },
                        },
                    }}
                    onRowClick={(params) => dispatch(setSelectedCharacter(params.row))}

                />
            </Paper>

            {selectedCharacter && (
                <div>
                    <CharacterDetail />
                </div>
            )}
        </div>
    );
}

export default DataTable;