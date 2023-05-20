import { database } from "../services/service";

export default async function fetchData(ruta){
    const response = await database.collection(ruta).get();
    const data = response.docs.map(doc => doc.data());
    return data;
}