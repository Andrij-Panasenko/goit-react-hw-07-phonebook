import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { getFilterValue, setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

 
    return (
      <Label>
        Find contact by name:
        <Input
          type="text"
          placeholder="Name"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
        />
      </Label>
    );
  };
