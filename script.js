let loginForm = document.getElementById("LevelForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let SumXP = document.getElementById("SumXP");
  

  if (SumXP.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This Summoner has a level of ${SumXP.value}`
    );

    let count = 1;
    let TotalXP = 0;
    console.log("Let's start smelling");
    while(count<SumXP.value){
        
        if (count<50){
            
            switch (count){
            case 1:
                TotalXP+=144;
                break;
            case 2:
                TotalXP+=144;
                break;
            case 3:
                TotalXP+=192;
                break;
            case 4:
                TotalXP+=240;
                break;
            case 5:
                TotalXP+=336;
                break;
            case 6:
                TotalXP+=432;
                break;
            case 7:
                TotalXP+=528;
                break;
            case 8:
                TotalXP+=624;
                break;
            case 9:
                TotalXP+=720;
                break;
            case 10:
                TotalXP+=816;
                break;
            case 11:
                TotalXP+=912;
                break;
            case 12:
                TotalXP+=984;
                break;
            case 13:
                TotalXP+=1056;
                break;
            case 14:
                TotalXP+=1128;
                break;
            case 15:
                TotalXP+=1344;
                break;
            case 16:
                TotalXP+=1440;
                break;
            case 17:
                TotalXP+=1536;
                break;
            case 18:
                TotalXP+=1680;
                break;
            case 19:
                TotalXP+=1824;
                break;
            case 20:
                TotalXP+=1968;
                break;
            case 21:
                TotalXP+=2112;
                break;
            case 22:
                TotalXP+=2208;
                break;
            case 23:
                TotalXP+=2304;
                break;
            case 24:
                TotalXP+=2304;
                break;
            case 25:
                TotalXP+=2496;
                break;
            case 26:
                TotalXP+=2496;
                break;
            case 27:
                TotalXP+=2592;
                break;
            case 28:
                TotalXP+=2688;
                break;
            case 29:
                TotalXP+=2688;
                break;
            case 30:
                TotalXP+=2688;
                break;
            case 31:
                TotalXP+=2688;
                break;
            case 32:
                TotalXP+=2688;
                break;
            case 33:
                TotalXP+=2784;
                break;
            case 34:
                TotalXP+=2784;
                break;
            case 35:
                TotalXP+=2784;
                break;
            case 36:
                TotalXP+=2880;
                break;
            case 37:
                TotalXP+=2880;
                break;
            case 37:
                TotalXP+=2880;
                break;
            case 38:
                TotalXP+=2880;
                break;
            case 39:
                TotalXP+=3072;
                break;
            case 40:
                TotalXP+=3072;
                break;
            case 41:
                TotalXP+=3168;
                break;
            case 42:
                TotalXP+=3168;
                break;
            case 43:
                TotalXP+=3264;
                break;
            case 44:
                TotalXP+=3264;
                break;
            case 45:
                TotalXP+=3360;
                break;
            case 46:
                TotalXP+=3360;
                break;
            case 47:
                TotalXP+=3456;
                break;
            case 48:
                TotalXP+=3456;
                break;
            case 49:
                TotalXP+=3456;
                break;


            }
            
            count+=1;
            console.log(`The counter is at level ${count} and the TotalXP is ${TotalXP}`);
            
        }
        if(count>=50){
            let temp = count%25;
            switch (temp){
                case 0:
                    TotalXP+=2592;
                    break;
                case 1:
                    TotalXP+=2688;
                    break;
                case 2:
                    TotalXP+=2688;
                    break;
                case 3:
                    TotalXP+=2688;
                    break;
                case 4:
                    TotalXP+=2880;
                    break;
                case 5:
                    TotalXP+=2880;
                    break;
                case 7:
                    TotalXP+=2880;
                    break;
                case 8:
                    TotalXP+=3072;
                    break;
                case 9:
                    TotalXP+=3072;
                    break;
                case 10:
                    TotalXP+=3072;
                    break;
                case 11:
                    TotalXP+=3264;
                    break;
                case 12:
                    TotalXP+=3264;
                    break;
                case 13:
                    TotalXP+=3264;
                    break;
                case 14:
                    TotalXP+=3360;
                    break;
                case 15:
                    TotalXP+=3360;
                    break;
                case 16:
                    TotalXP+=3360;
                    break;
                case 17:
                    TotalXP+=3456;
                    break;
                case 18:
                    TotalXP+=3456;
                    break;
                case 19:
                    TotalXP+=3456;
                    break;
                case 20:
                    TotalXP+=3456;
                    break;
                case 21:
                    TotalXP+=3552;
                    break;
                case 22:
                    TotalXP+=3552;
                    break;
                case 23:
                    TotalXP+=3648;
                    break;
                case 24:
                    TotalXP+=3648;
                    break;
            }

            count+=1;
            console.log(`The counter is at level ${count} and the TotalXP is ${TotalXP}`);
        }


        
    }
    let resultM ="This is worth " + TotalXP + " Summoner Experience";
    console.log(resultM);

    var result = document.getElementById('Results');
    result.innerHTML = resultM;

    console.log("text is changed, normally...")
    SumXP.value = "";
  }
});

