import { FaFileDownload } from 'react-icons/fa'
import { getResume } from '../../controllers/firebaseData'

const Resume = () => {
    const handleDownloadResume = async (event) => {
        event.preventDefault();
        try {
            await getResume();
        } catch (err) {
            console.error("Ocurrió un error al descargar el archivo:", err);
        }
    }
    return (
        <li className='footer-item' style={{ 'color': "#00FFFF", "cursor": "pointer" }}>
            {/* eslint-disable-next-line */}
            <a href="javascript:void(0);" onClick={handleDownloadResume} download="Arturo_Castillo_Resume.pdf">
                <FaFileDownload />
            </a>
        </li>
    )
}

export { Resume }