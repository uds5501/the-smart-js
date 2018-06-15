function setup(){
    noCanvas();
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

    tense.print();
    //console.log(tense.get(1));

    const vtense = tf.variable(tense);
    console.log(vtense);

    const values2 = []
    for (let j =0; j<15; j++){
        values2[j] = random(1,100);
    }
    const shape1 = [3,5];
    const shape2 = [5,3];


    const a = tf.tensor2d(values2, shape1, 'int32');
    const b = tf.tensor2d(values2, shape2, 'int32');

    //const c = a.add(b);
    const d = a.matMul(b); //Gives error
    //a.print();
    //b.print();
    //c.print();
    d.print();
