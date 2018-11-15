console.log('Hello, Sheet!');





// update on dom load
window.onload = requestJSON;


// update every 10 seconds
//setInterval(requestJSON, 10000);

var distances = [];
var maxDistance;
var spacer;
//distance;





function runTensor(val){
    

    //tensorflow.js example from https://js.tensorflow.org/#getting-started
          
    
          // Define a model for linear regression.
          const model = tf.sequential();
          model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    
          // Prepare the model for training: Specify the loss and the optimizer.
          model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    
          // Generate some synthetic data for training.
          const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
          const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
    
          // Train the model using the data.
          model.fit(xs, ys, {epochs: 10}).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
    
            model.predict(tf.tensor2d([val], [1, 1])).print();
          });
    
          const tensorInput = document.getElementById('tensor');
          tensorInput.innerHTML = '';
          tensorInput.innerHTML = `<p><b>Shot will be ${model.predict(tf.tensor2d([val], [1, 1]))} ft.</b></p>`;
         //studentList.appendChild(newLi);
    
         tf.tensor([1, 2, 3, 4]).print();
    
         var canvas02 = document.getElementById("myCanvas02");
         var ctx02 = canvas02.getContext("2d");
         //cxt.translate(canvas.width / 2, canvas.height / 2);
         //ctx02.translate(-1,1);
         //ctx.scale(10,10);
         //ctx.scale(0.5,0.5);
     
         ctx02.fillStyle = "#f4b042";
         ctx02.fillRect(model.predict(tf.tensor2d([val], [1, 1])),model.predict(tf.tensor2d([val], [1, 1])),10,10);
    
    
        }


// request data from google sheets
function requestJSON() {
  //fetch('https://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=2018-19&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=201939&PlayerPosition=&PlusMinus=N&Position=&Rank=N&RookieYear=&Season=2018-19&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0.json')


  //201939,
//"Stephen Curry",

  fetch('https://stats.nba.com/stats/shotchartdetail?CFID=33&CFPARAMS=2018-19&ContextFilter=&ContextMeasure=FGA&DateFrom=&DateTo=&GameID=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerID=201939&PlayerPosition=&PlusMinus=N&Position=&Rank=N&RookieYear=&Season=2018-19&SeasonSegment=&SeasonType=Regular+Season&TeamID=0&VsConference=&VsDivision=&mode=Advanced&showDetails=0&showShots=1&showZones=0.json.json')
    .then(response => response.json())
    .then(gotJSON);
    
}


// recieve response from google sheets
function gotJSON(json) {
  console.log('Update Data');
  console.log(json);
  const studentList = document.getElementById('students');
  studentList.innerHTML = '';

for  (i = 0; i < 400; i++){
    let xAx =5;

   distance = json['resultSets'][0]['rowSet'][i][16];
   const makeMiss = json['resultSets'][0]['rowSet'][i][10];










   runTensor(distance);


   








if( json['resultSets'][0]['rowSet'][i][10] == "Made Shot"){
    //setup();
    //draw(distance,distance);

    draw01(distance*10,distance*3, "#4286f4",json['resultSets'][0]['rowSet'][i][16]);
    draw02(xAx,distance*10, "#4286f4",json['resultSets'][0]['rowSet'][i][16]);
    xAx= xAx +15;
    //drawPrediction(distance*10);
    //xs.push
} else{
   
    draw01(distance*10,distance*6, "#FF0000", json['resultSets'][0]['rowSet'][i][16]);
    draw02(xAx,distance*10, "#FF0000", json['resultSets'][0]['rowSet'][i][16]);
    xAx= xAx +15;
    //drawPrediction(json['resultSets'][0]['rowSet'][i][16]);
}



       const newLi = document.createElement('li');
    newLi.innerHTML = `<p><b>${makeMiss}</b> From Distance of <b>${distance} ft</b>.//WIPWIPWIP//</p>`;
     studentList.appendChild(newLi);


  //console.log = entry;
        }
    }


function draw01(x,y, z,what){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //cxt.translate(canvas.width / 2, canvas.height / 2);
    ctx.translate(-1,1);
    //ctx.scale(10,10);
    //ctx.scale(0.5,0.5);
    ctx.rotate(10*Math.PI/180)
    ctx.fillStyle = z;
    ctx.fillRect(x,y,10,10);

  
    //ctx.rotate(-15*Math.PI/180)
    ctx.font = "10px Arial";
    ctx.fillText(what + "ft",x+13,y+9);

    ctx.fillStyle = "6bf442";
    ctx.fillRect(x,y,10,10);
    //ctx.rotate(10*Math.PI/180)



}

function draw02(x,y, z,what){
    var canvas02 = document.getElementById("myCanvas02");
    var ctx02 = canvas02.getContext("2d");
    //cxt.translate(canvas.width / 2, canvas.height / 2);
    //ctx02.translate(-1,1);
    //ctx.scale(10,10);
    //ctx.scale(0.5,0.5);
    ctx02.translate(1,2);
    ctx02.fillStyle = z;
    ctx02.fillRect(x,y,10,10);

  
    ctx.rotate(20*Math.PI/180);
    ctx02.font = "10px Arial";
    ctx02.fillText(what + "ft",x+13,y+9);

    ctx02.fillStyle = "6bf442";
    ctx02.fillRect(x,y,10,10);
    //ctx.rotate(10*Math.PI/180)



}

function drawPrediction (data){
    var canvas02 = document.getElementById("myCanvas02");
    var ctx02 = canvas02.getContext("2d");

  

    for ( i =0; i < json['resultSets'][0]['rowSet'][i][16].length; i++){
        ctx02.fillStyle = "f4429e";
        ctx02.fillRect(data,data,10,10);
    
    }
   
}












//     var elem = document.getElementById('myCanvas');
// function draw02() {
    
//     context.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);

//         //Shape();
// }

// function Shape(x, y, w, h, fill) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.fill = fill;
// }

// // get canvas element.
// var elem = document.getElementById('myCanvas');

// // check if context exist
// if (elem.getContext) {

//     var myRect = [];

//     myRect.push(new Shape(0, 0, 25, 25, "#333"));
//     myRect.push(new Shape(0, 40, 25, 25, "#333"));
//     myRect.push(new Shape(0, 80, 25, 25, "#333"));

//     context = elem.getContext('2d');
//     for (var i in myRect) {
//         oRec = myRect[i];
//         context.fillStyle = oRec.fill;
//         context.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);

//     }

// }


// // //   // get the list
// // //   const studentList = document.getElementById('students');

// // //   // clear existing items
// // //   studentList.innerHTML = '';

// // //   // add new items from JSON
// // //   for (const rowSet of entry) {
// // //     // alias data
// // //     const first = rowset[0];
   

// // //     // build li w/ template
// // //     const newLi = document.createElement('li');
// // //     newLi.innerHTML = `<p> ${first}</p>`;
// // //     studentList.appendChild(newLi);
// // //   }
// // // }











//   console.log('Hello, Sheet!');

//   // update on dom load
//   window.onload = requestJSON;
  
//   // update every 10 seconds
//   setInterval(requestJSON, 10000);
  
//   // request data from google sheets
//   function requestJSON() {
//     //fetch('https://cors-anywhere.herokuapp.com/http://data.nba.net/10s/prod/v1/2018/players/201939_profile.json')
// //201939,
// //"Stephen Curry",

//     fetch('http://data.nba.net/10s/prod/v1/20181105/0021800147_boxscore.json')
//       .then(response => response.json())
//       .then(gotJSON);
//   }
//   // recieve response from google sheets
// function gotJSON(json) {
//     console.log('Update Data');
//     const entries = json.stats.activePlayers;
  
//     // get the list
//     const studentList = document.getElementById('students');
  
//     // clear existing items
//     studentList.innerHTML = '';
  
//     // add new items from JSON
//     for (const activePlayers of entries) {
//       // alias data
//       const first = activePlayers.personId;
     
  
//       // build li w/ template
//       const newLi = document.createElement('li');
//       newLi.innerHTML = `<p> ${first}</p>`;
//       studentList.appendChild(newLi);
//     }
//   }