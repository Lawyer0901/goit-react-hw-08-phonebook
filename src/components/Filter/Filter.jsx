import { LabelFilter, InputFilter } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';

import { filterContact } from '../../redux/filter/filter.slice';

export function Filter() {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleFilterInput = ({ target: { value } }) => {
    dispatch(filterContact(value));
  };

  return (
    <LabelFilter htmlFor="">
      Finde Contact by Name
      <InputFilter
        type="text"
        name="filter"
        onChange={handleFilterInput}
        value={filter}
      />
    </LabelFilter>
  );
}
