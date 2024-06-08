function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

function makeToys() {
    return new Promise((resolve, reject) => {
        console.log("Making toy...");
        mySetTimeout(3000).then(() => {
            if (Math.random() > 0.1) {
                resolve('Undefected');
            } else {
                reject('Defected');
            }
        });
    });
}

function sellToys(status) {
    return new Promise((resolve, reject) => {
        console.log("Selling toy...");
        mySetTimeout(1000).then(() => {
            if (status === 'Undefected') {
                if (Math.random() > 0.7) {
                    resolve('Toy has been sold');
                } else {
                    reject('Toy was unsuccessful');
                }
            } else {
                reject('Cannot sell defected toys');
            }
        });
    });
}

function deliverToys(status) {
    return new Promise((resolve, reject) => {
        console.log("Delivering toy...");
        mySetTimeout(2000).then(() => {
            if (status === 'Toy has been sold') {
                resolve('Toy has been delivered');
            } else {
                reject('Delivery was unsuccessful');
            }
        });
    });
}

// then().catch()
makeToys()
    .then((status) => sellToys(status))
    .then((res) => deliverToys(res))
    .then((res) => console.log(res))
    .catch(err => console.log(err));

//async/await
// async function processToyShop() {
//         try {
//             const toyStatus = await makeToys();
//             const sellStatus = await sellToys(toyStatus);
//             const deliveryStatus = await deliverToys(sellStatus);
//             console.log(deliveryStatus);
//         } catch (error) {
//             console.log(error);
//         }
//     }
    
// processToyShop();

