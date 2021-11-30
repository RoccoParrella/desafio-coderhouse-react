import db from "./fireBase";
import { query, collection, getDocs, where, orderBy } from "firebase/firestore";

const firestoreFetchId = async (id) => { 
    let q
    if (id) { 
        q = query(collection(db, "products"), where("id", "==", id));
    } else {
        q = query(collection(db, "products"), orderBy("name"));
    }
    
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => doc.data());
    return dataFromFirestore;
}  

export default firestoreFetchId;