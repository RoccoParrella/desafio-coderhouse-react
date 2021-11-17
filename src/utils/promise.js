let is_true = true;

const productsPromise = (timeout, data) => {
    return new Promise((resolve, reject) => {
        if(is_true){
            setTimeout(() => {
                resolve(data);
            }, timeout);
        }else{
            reject();
        }
    });
}

export default productsPromise;