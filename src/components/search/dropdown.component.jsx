import React, { useState } from 'react';
import {
  SearchButton,
  DropdownList,
  DropdownContent,
  ArrowIcon
} from '../UI';

const Dropdown = ({ infoSearchBy, dispatch }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchBy = query => {
    dispatch({
      type: 'LOAD_NEWREQUEST_BY_SEARCHBY',
      searchBy: query
    });
    setShowDropdown(false);
  }

  const handleSearchButtonClick = () => setShowDropdown(true);

  return (
    <DropdownList>
      <SearchButton
        onClick={handleSearchButtonClick}>
        Search by repository {infoSearchBy}
        <ArrowIcon>&#8964;</ArrowIcon>
      </SearchButton>
      <DropdownContent show={showDropdown}>
        <div onClick={() => handleSearchBy('topic')}>topic</div>
        <div onClick={() => handleSearchBy('name')}>name</div>
        <div onClick={() => handleSearchBy('description')}>description</div>
      </DropdownContent>
    </DropdownList>
  )
}

export default React.memo(Dropdown);