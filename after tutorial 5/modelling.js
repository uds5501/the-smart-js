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

const sgdOptimizer = tf.train.sgd(0,1);

model.compile({
    optimizer: sgdOptimizer,
    loss: tf.losses.cosineDistance
});
