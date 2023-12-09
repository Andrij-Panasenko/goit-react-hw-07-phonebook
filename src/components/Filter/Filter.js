import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/seceltors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

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
