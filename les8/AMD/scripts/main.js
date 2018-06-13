requirejs(['fib', '../../node_modules/alfixedfibamd/fib.js'], function(fib, fibnpm) {
    // fib module 
    window.fibSum1 = () => {
      const res1 = fib(6);
      document.getElementById("fib1").innerHTML = res1;
      console.log(res1);
    }

    // fib npm module
    window.fibSum2 = () => {
        const res2 = fibnpm(8);
        document.getElementById("fib2").innerHTML = res2;
        console.log(res2);
    }
  });
