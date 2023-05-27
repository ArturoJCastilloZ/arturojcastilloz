import { database, storage } from "../services/service";
import { getDownloadURL, ref } from "firebase/storage";

export async function fetchData(ruta) {
    const response = await database.collection(ruta).get();
    const data = response.docs.map(doc => doc.data());
    return data;
}

export async function getResume() {
    try {
        const fileRef = ref(storage, process.env.REACT_APP_PATH);
        const downloadUrl = await getDownloadURL(fileRef);
        const resp = await fetch(downloadUrl);
        const blob = await resp.blob();
        const uri = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = uri;
        link.download = process.env.REACT_APP_FILE_NAME;
        link.click();
    } catch (error) {
        console.error("Ocurrió un error al descargar el archivo:", error);
    }
}
