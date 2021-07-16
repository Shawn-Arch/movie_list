import ItemRow from "../ItemRow";

const Recommedation = ({movies}) => {
    if(movies === null) return(<></>);
    return (
        <>
            <ItemRow type="movie" title="Recommedations" list={movies} maxPage={2}/>
        </>
    );
}

export default Recommedation;