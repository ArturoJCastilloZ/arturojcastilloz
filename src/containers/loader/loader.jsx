import '../../styles/loader.scss'; // Estilo para el componente de Loading

const Loading = ({ isLoading }) => {
    console.log(isLoading);
    return (
        <div className={`${ isLoading ? 'loading-container' : 'loading-container hidden' }`}>
            <div className="loading-spinner"></div>
            {/* <p>Cargando...</p> */}
        </div>
    );
};

export default Loading;