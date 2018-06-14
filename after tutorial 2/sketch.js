function setup(){
    noCanvas();
    const values=[]
    for (let i=0; i<30; i++ )
    {
        values[i]=random(0,100);
    }

    const shape =[2, 5,3];

    const data= tf.tensor3d(values, shape, 'int32');
    //const data = tf.tensor([0, 0, 128, 275, 23, 43 ,234 ,231, 34, 54, 45, 33], [3, 2, 2], 'int32');
    //data.print();
    console.log(data.toString());
    console.log(data);
}
