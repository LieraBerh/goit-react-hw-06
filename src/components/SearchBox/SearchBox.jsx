import s from "./SearchBox.module.css";

const SearchBox = ({ handleFilter }) => {
  return (
    <div className={s.search_box}>
      Find contacts by name
      <input
        type="text"
        onChange={handleFilter}
        className={s.search_box__input}
      />
    </div>
  );
};
export default SearchBox;
