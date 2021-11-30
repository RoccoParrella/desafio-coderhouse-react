import db from "./fireBase";
import { query, collection, getDocs, orderBy, where } from "firebase/firestore";

const firestoreFetch = async (category) => { 
    let q
    if (category) { 
        q = query(collection(db, "products"), where("categoryId", "==", category));
    } else {
        q = query(collection(db, "products"), orderBy("name"));
    }
    
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return dataFromFirestore;
}  

export default firestoreFetch;