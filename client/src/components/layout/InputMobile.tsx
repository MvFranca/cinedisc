import '../../styles/layout/InputMobile.css'

interface types {
    setSearch: () => {}
    search: string
}

const InputMobile = ({setSearch, search}: types) => {
    return ( 
        <div className="input-mobile" >
            <input type="text" placeholder="Pesquise algum filme..." 
            value={search}   
            onChange={(e) => setSearch(e.currentTarget.value)}
            />
        </div>
     );
}
 
export default InputMobile;