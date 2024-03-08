const runCallbackHell = () => {
    let timer = 10;
  
    setTimeout(() => {
      document.getElementById('countdown').innerText = timer--;
  
      setTimeout(() => {
        document.getElementById('countdown').innerText = timer--;
  
        setTimeout(() => {
          document.getElementById('countdown').innerText = timer--;
  
          setTimeout(() => {
            document.getElementById('countdown').innerText = timer--;
  
            setTimeout(() => {
              document.getElementById('countdown').innerText = timer--;
  
              setTimeout(() => {
                document.getElementById('countdown').innerText = timer--;
  
                setTimeout(() => {
                  document.getElementById('countdown').innerText = timer--;
  
                  setTimeout(() => {
                    document.getElementById('countdown').innerText = timer--;

                    setTimeout(() => {
                        document.getElementById('countdown').innerText = timer--;

                        setTimeout(() => {
                            document.getElementById('countdown').innerText = timer--;
  
                            setTimeout(() => {
                            document.getElementById('message').classList.remove('d-none');
                            }, 1000);
                        }, 1000);
                    }, 1000);
                 }, 1000);
               }, 1000);
             }, 1000);
           }, 1000);
         }, 1000);
       }, 1000);
     }, 1000);
   }, 1000);
};

runCallbackHell();
  