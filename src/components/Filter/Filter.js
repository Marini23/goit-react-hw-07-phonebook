import { useDispatch } from 'react-redux';
import { Input, Title, Label } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Label>
  );
};
