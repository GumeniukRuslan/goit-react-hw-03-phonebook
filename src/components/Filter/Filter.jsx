export const Filter = ({filterValue}) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={filterValue} id="filter" type="text" />
    </>
 
  )
}