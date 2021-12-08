import db from "./fireBase";
import { query, collection, getDocs, where } from "firebase/firestore";

const firestoreFetchId = async (id) => {
    let q
    q = query(collection(db, "products"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => doc.data());
    return dataFromFirestore;
}

export default firestoreFetchId;