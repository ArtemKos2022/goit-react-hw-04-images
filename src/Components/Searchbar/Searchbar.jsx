import { useState } from "react";
import PropTypes from 'prop-types';
import { ReactComponent as MyIcon } from '../icons/search.svg';
import {
  Wrapper,
  SearchForm,
  SearchFormBtn,
  SearchInput,
} from './Searchbar.styled';

function Searchbar ({onSubmit}) {

  const [searchImages, setSearchImages] = useState("");
  

  const handleSearch = (evt) => {
    setSearchImages(evt.currentTarget.value.toLowerCase() );   
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (searchImages.trim() === "") {
      alert("Enter request");
      return;
    }
    onSubmit(searchImages);
    setSearchImages("");
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn
          type="submit"
          aria-label="search-button"
          onClick={handleSubmit}>
          <MyIcon width='30' height='30' fill='blue' />
        </SearchFormBtn>
        <SearchInput
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
          value={searchImages}
          onChange={handleSearch}
        />
      </SearchForm>
    </Wrapper>
  );
}
export default Searchbar;

Searchbar.propTypes = {
      onSubmit: PropTypes.func.isRequired,
  };
