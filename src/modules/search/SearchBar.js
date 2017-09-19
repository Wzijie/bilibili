import React from 'react';

const SearchBar = ({ keyword, onChangeKeyword, onClearKeyword, onSearchBarFocus, onSearchSubmit }) => {
  return (
    <div className='search-operation'>
      <form className='search-form' onSubmit={onSearchSubmit} >
        <input 
          className='search-input' 
          type='text' 
          autoComplete='off' 
          placeholder='搜索视频、番剧、up主或AV号' 
          value={keyword}
          onChange={onChangeKeyword}
          onFocus={onSearchBarFocus}
        />
      </form>
      { keyword !== '' && <i className='search-input-delete' onClick={onClearKeyword} ></i> }
      <div className='search-cancel'>取消</div>
    </div>
  );
}

export default SearchBar;
