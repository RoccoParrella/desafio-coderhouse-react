import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import firestoreFetch from '../utils/firestoreFetch';
import ipad from '../media/ipad.png';
import macbook from '../media/macbook.png';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { category } = useParams();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        firestoreFetch(category)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [category]);

    return loader
        ? (
            <div className="loading">
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-secondary" role="status"></div>
                </div>
            </div >

        ) :  
        <div className="div-main-list">
            {
            category === "iphone"
            ? <div><img className="cien" alt="banner iphone"  src="https://www.bechtle.com/dam/jcr:a0a76a52-6182-4496-b7f8-0d0553430049/cw42_mainbanner_apple_iphone12-eu.jpg"/></div>
            : null
            }
            {
            category === "ipad"
            ? <div><img className="cien" alt="banner ipad" src={ipad}/></div>
            : null
            }
                        {
            category === "macbook"
            ? <div><img className="cien" alt="banner macbook" src={macbook}/></div>
            : null
            }
                        {
            category === undefined
            ? <div><img className="cien" alt="banner general" src="https://www.tronikx.com.mt/wp-content/uploads/2021/03/Apple-Banner.jpg"/></div>
            : null
            }
        
        {
            category !== undefined 
            ? <div className="category"><p id="category-p">{category}</p></div>
            : null
        }

        
        <div className="limit"><ItemList item={datos} /></div>
        </div>

}

export default ItemListContainer;