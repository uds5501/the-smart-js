function setup(){
    noCanvas();
    //Setting Frame Rate at 1
    //frameRate(1);

    const values=[]
    for (let i=0; i<30; i++ )
    {
        values[i]=random(0,100);
    }

    const shape =[2, 5, 3];

    const tense= tf.tensor3d(values, shape, 'int32');
    //const data = tf.tensor([0, 0, 128, 275, 23, 43 ,234 ,231, 34, 54, 45, 33], [3, 2, 2], 'int32');
    //data.print();
    //console.log(data.toString());
    //console.log(data);

    // For optimisation of memory management
    //tense.data().then(function(stuff){
    //    console.log(stuff.toString());
    //})

    //OR BETTER METHOD
    //console.log(tense.dataSync());

    //Now, how to get info out of a tensor

    //tense.print();
    //console.log(tense.get(1));

}

// an animation which runs at 50 fps?
function draw(){
    

    const values2 = []
    for (let j =0; j<15; j++){
        values2[j] = random(1,100);
    }
    const shape1 = [3,5];
    const shape2 = [5,3];

    function myStuff() {
    const a = tf.tensor2d(values2, shape1, 'int32');
    const b = tf.tensor2d(values2, shape2, 'int32');

    const d = a.matMul(b); 
    console.log('hello');
    }
    
    //d.print();

    //Use your tensors here

    //Now disposing off the useless tensors
    //a.dispose();
    //b.dispose();
    //d.dispose();

    //Another method of using this tf.tidy is given below
    tf.tidy(() => {
        const a = tf.tensor2d(values2, shape1, 'int32');
        const b = tf.tensor2d(values2, shape2, 'int32');

        const d = a.matMul(b); 
        console.log('hello');
    });


    //to see the tensors allocated
    console.log(tf.memory().numTensors);

}
