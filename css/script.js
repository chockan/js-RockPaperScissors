 /*
        const score={
            Win:0,
            Losses:0,
            Tie:0
        } */
        let score=JSON.parse(localStorage.getItem('score')) || {
            Win:0,
            Losses:0,
            Tie:0
        };
        

        update();

        //document.querySelector('.scoreclass').innerHTML=`Win:${score.Win},losses:${score.Losses},Tie:${score.Tie} `;

        /*

        if(score===null){
            score={
                Win:0,
                Losses:0,
                Tie:0
            };
        };       */







        function player(playermove){
            const computer=pickcomputer();


            let result='';
            
            
            if (playermove==='Scissors'){

                if (computer ==='Rock'){
                    result='You Loss';
                }else if(computer ==='Paper'){
                    result='You Win';
    
                }else if(computer==='Scissors'){
                    result='Tie';
                }

            }else if(playermove==='Rock') {

                if (computer ==='Rock'){
                    result='Tie';
                }else if(computer ==='Paper'){
                    result='You Loss';
    
                }else if(computer==='Scissors'){
                    result='You Win';
                }
            }else if(playermove==='Paper') {

                if (computer ==='Rock'){
                    result='You Win';
                }else if(computer ==='Paper'){
                    result='Tie';
    
                }else if(computer==='Scissors'){
                    result='You Loss';
                  
                }

            }

            if(result==='You Win'){
                score.Win+=1;  
            }else if(result==='You Loss'){
                score.Losses+=1;

            }else if(result==='Tie'){
                score.Tie+=1;

            }
            localStorage.setItem('score',JSON.stringify(score));
            update()



            document.querySelector('.result1').innerHTML=`Result:${result}`;
            document.querySelector('.movement').innerHTML=` You <img src="images/${playermove}-emoji.png" alt="rock" class="img-tag">
            <img src="images/${computer}-emoji.png" alt="rock" class="img-tag">computer`;



        

            

            //document.querySelector('.scoreclass').innerHTML=`Win:${score.Win},losses:${score.Losses},Tie:${score.Tie} `;
            /*
            alert(`you picked ${playermove}. computer picked ${computer}.${result}
Win:${score.Win},losses:${score.Losses},Tie:${score.Tie}`); */




        }


       

        function update(){
            document.querySelector('.scoreclass').innerHTML=`Win:${score.Win},losses:${score.Losses},Tie:${score.Tie} `;
        }
        

        function pickcomputer(){
            
            let computer= '';

            const math2=Math.random();
           
            if (math2>0 && math2 <=1/3 ){
                computer='Rock';
            } else if(math2>1/3 && math2<=2/3){
                computer='Paper';
            } else if(math2>2/3 && math2<1){
                computer='Scissors';
            }
            return computer ;
        }


        let isautoplaying=false;
        let intervalId;

        function autoplay(){
            if(!isautoplaying){

                intervalId = setInterval(function(){
                    const playermove=pickcomputer();
                    player(playermove);
    
                },1000);
                isautoplaying=true;

            }else{
                clearInterval(intervalId);
                isautoplaying=false;
            }


        }



        document.querySelector('.js-rock-button')
            .addEventListener('click',()=>{

                 player('Rock');

            });

        document.querySelector('.js-paper-button')
        .addEventListener('click',()=>{

                player('Paper');

        });

        
        document.querySelector('.js-scissor-button')
        .addEventListener('click',()=>{

                player('Scissors');

        });



        document.body.addEventListener('keydown',(event) =>{
            if (event.key ==='r'){
                player('Rock');
            } else if(event.key ==='p'){
                player('Paper');
            } else if(event.key ==='s'){
                player('Scissors');
            }
        });


        