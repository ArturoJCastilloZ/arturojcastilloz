import { database } from "../models/services";

export default async function fetchData(ruta){
    const response = await database.ref(ruta).once('value');
    const data = response.val();
    return data;
}