import '../../styles/loader.scss';
import PuffLoader from "react-spinners/PuffLoader";

const Loading = ({ isloading }) => {
    return (
        <div className={isloading ? 'loading-container' : 'loading-container loading-container-hidden'}>
            <PuffLoader
                color='#36d7b7'
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;