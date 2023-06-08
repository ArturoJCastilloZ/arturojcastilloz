import { FaFileDownload } from 'react-icons/fa';
import { getResume } from '../../controllers/firebaseData';
import { Tooltip } from 'react-tooltip';

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
        <li className="footer-item" style={{ '--color': "#00FFFF", "cursor": "pointer" }}>
            {/* eslint-disable-next-line */}
            <a
            href="#!"
            onClick={handleDownloadResume}
            download="Arturo_Castillo_Resume.pdf"
            data-tooltip-id="resume"
            data-tooltip-content="Descarga mi C.V."
            data-tooltip-place="top"
            >
                <FaFileDownload />
            </a>
            <Tooltip id="resume" />
        </li>
    )
}

export { Resume }