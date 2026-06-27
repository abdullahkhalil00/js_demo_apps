let take = document.querySelector('#take_order');
let button = document.querySelector('#order_btn');
console.log(take);
console.log(button);
let body = document.querySelector('body');


button
.addEventListener('click' , () => {
    // console.log(take.value)
    // let take_order = new Promise(function(resolve,reject){

    //     setTimeout(function(){
    //         if(take.value != ''){
    //             console.log("Inside If")
    //             resolve();
    //         } else
    //             reject()
            
    //     } , 2000)
    // });
    
    // take_order.then(function(){
    //     body.innerHTML = '<h1>Processing</h1>';
    //     setTimeout(function(){
    //         body.innerHTML = `your ${take.value} is ready`
    //     } , 2000)
    // })
    
    // take_order.catch(function(){
    //     body.innerHTML = '<h1>Name is required</h1>';
    // })

    // take_order.finally(function(){
    //     setTimeout(function(){
    //         take.textContent = `Thankyou for visiting`;
    //     } , 1000)
    // })



    new Promise(function(resolve,reject){

        setTimeout(function(){
            if(take.value != ''){
                console.log("Inside If")
                resolve();
            } else
                reject()
            
        } , 0)
    })
    .then(function(){
        body.innerHTML = '<h1>Processing</h1>';
        
    })
    .then(function(){
        setTimeout(function(){
            body.innerHTML = `your ${take.value} is ready`
        } , 2000)
    })
    .catch(function(){
        body.innerHTML = '<h1>Name is required</h1>';
    })
    .finally(function(){
        setTimeout(function(){
            body.innerHTML = `Thankyou for visiting`;
        } , 5000)
    })


})
