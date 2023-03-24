console.log(this); // this object points to global window object in browser and empty object in the node running environment

let myfunc = function(){
    console.log(this.name)  // becomes undefined in the function 
};

const Welcome = () => {
    console.log(this.name);
  }

  Welcome()

