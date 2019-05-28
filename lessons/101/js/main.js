/* eslint-disable indent */
// console.log("connected");

// console.log($);

const getCatImage = (index) => {
    const length = (index + 1) * 100;
    const width = length;
    const address = `http://placekitten.com/${length}/${width}`;
    const $img = $(`<img>`)
        .attr("src", address)
        .offset({
            top: length,
            left: width
        })
        .hide()
        .fadeIn(1000);
    return $img;
};

const getPromise = (index) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(index);
        }, 1500);
    });
};



const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(100);
    }, 3000);
});

const names = "james sally freda tom cindy bobby lou meggan ollie".split(" ");

const wripper = async () => {
    for (let index = 0; index < names.length; index++) {

        let catImage = getCatImage(index);
        $("#rotation")
            .append(catImage);

        await getPromise(index)
            .then((result) => {
                console.log(result)
            });

    }
};

wripper().then(() => {
    console.log("result");
})




// $("img").hide().fadeIn(1000)
let $arr = $("img");

let p = promise.then((result) => {
    console.log(result);
});