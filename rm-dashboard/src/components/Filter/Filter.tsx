import '../Filter/Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { clearFilters, setGender, setStatusFilter } from '../../redux/slices/filterSlice';


function Filter() {
    const dispatch = useDispatch();
    const { status, gender } = useSelector((state: RootState) => state.filter);

    return (
        <div className='filter-select' >
            <select className='select' value={status} onChange={(e) => dispatch(setStatusFilter(e.target.value))}>
                <option value="">Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>

            <select className='select' value={gender} onChange={(e) => dispatch(setGender(e.target.value))}>
                <option value="">Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

            <button className='reset-button' onClick={() => dispatch(clearFilters())}>Reset</button>
        </div>
    );
}

export default Filter;