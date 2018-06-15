//making a keras type 2 layer architecture

const model = tf.sequential();

const hidden = tf.layers.dense({
    units: 4,
    inputShape: [2],
    activation: 'sigmoid',

});

const output = tf.layers.dense({
    units: 3,
    //inputShape: [4], Not required.
    activation: 'sigmoid',
});

model.add(hidden);
model.add(output);

const sgdOptimizer = tf.train.sgd(0.1); //sgd (learning rate)

model.compile({
    optimizer: sgdOptimizer,
    loss: tf.losses.meanSquaredError
});

// My training data
const X_train = tf.tensor2d([
    [0.153, 0.92],
    [0.2523, 0.042],
    [0.23, 0.421]
]);

// My training labels
const Y_train = tf.tensor2d([
    [0.1, 0.1, 0.02],
    [0.4, 0.42, 0.14],
    [0.22, 0.9, 0.02],
]);

// My Testing data
const X_tests = tf.tensor2d([
    [0.25,0.92],
    [0.2523,0.042],
    [0.425,0.362],
    [0.125,0.922]
]);

//Once the model finishes it's training and prints out the loss
// const history = model.fit(X_train,Y_train,{
//     epochs: 100 
// }).then((response) => console.log(response.history.loss[0]) );



// There is a second way of printing out loss using async functions
// And this is a better way of training as it ensures that the losses
// go down. Whis is what we want!

async function train () {
    for (let i=0 ; i<200; i++){
        const response = await model.fit(X_train,Y_train,{
            shuffle: true, // initiating data shuffling for better training and predictions
            epoch: 100
        });
        console.log(response.history.loss[0]);
    }
}

train().then(() => {
    console.log("training Complete!")
    let Y_tests = model.predict(X_tests);
    Y_tests.print();

});


// Making up an input of size 1 x 2 tensor
// const X_tests = tf.tensor2d([
//     [0.25,0.92],
//     [0.2523,0.042],
//     [0.425,0.362],
//     [0.125,0.922]
// ]);
// let Y_tests = model.predict(X_tests);
// Y_tests.print();
