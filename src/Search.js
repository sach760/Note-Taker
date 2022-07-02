const Search=({searchValue, searchHandler})=>{
    return <article >
        <form >
            <input className="search" type="text" placeholder="type to search..." value={searchValue} 
                   onChange={(e)=>{
                       searchHandler(e);
                   }}
            />
        </form>
    </article>
}
export default Search;