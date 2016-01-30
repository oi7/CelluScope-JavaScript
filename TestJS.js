var malariaColor = [
    "http://i.imgur.com/Io00pUb.jpg",
    "http://i.imgur.com/P8FaH1t.jpg",
    "http://i.imgur.com/zBnCmDQ.jpg",
    "http://i.imgur.com/M9ypt4P.jpg",
    "http://i.imgur.com/frXY4dv.jpg",
    "http://i.imgur.com/LIwAFq7.jpg",
    "http://i.imgur.com/nnaLluT.jpg",
    "http://i.imgur.com/DU3ejwm.jpg",
    "http://i.imgur.com/vUhAGHc.jpg",
    "http://i.imgur.com/Wtzw3sF.jpg",
    "http://i.imgur.com/Sy5TPZy.jpg",
    //"http://i.imgur.com/wzwD1kZ.gif",
    "http://i.imgur.com/lz9zaOO.jpg",
    "http://i.imgur.com/7qZm4DP.jpg",
    "http://i.imgur.com/Ay6pjQl.jpg",
    "http://i.imgur.com/IW4FS4L.jpg"
];

var malariaNoColor = [
    "http://i.imgur.com/zvQePTr.jpg",
    "http://i.imgur.com/UrIq3ns.jpg",
    "http://i.imgur.com/ypAqo5P.jpg",
    "http://i.imgur.com/l0TnDh9.jpg",
    "http://i.imgur.com/BfONHdD.jpg",
    "http://i.imgur.com/RuEOvQ9.jpg",
    "http://i.imgur.com/46f3Hp0.jpg",
    "http://i.imgur.com/XMuD1Ip.jpg",
    "http://i.imgur.com/CrKmd8q.jpg",
    "http://i.imgur.com/CrKmd8q.jpg",
    "http://i.imgur.com/J7nc2yA.jpg",
    "http://i.imgur.com/J7nc2yA.jpg",
    "http://i.imgur.com/nIg743t.jpg",
    "http://i.imgur.com/9fcCwOj.jpg",
    "http://i.imgur.com/1sP0Lpk.jpg",
    "http://i.imgur.com/a3GEcMt.jpg"
];

var sickleCell = [
    "http://i.imgur.com/hxLCQ6U.jpg",
    "http://i.imgur.com/SypNxIi.jpg",
    "http://i.imgur.com/QL19cQK.jpg",
    "http://i.imgur.com/gtFyGvk.png",
    "http://i.imgur.com/WJA6dx7.jpg",
    "http://i.imgur.com/FrdvliU.png",
    "http://i.imgur.com/QyOuPiF.png",
    "http://i.imgur.com/Z6pEFWT.png",
    "http://i.imgur.com/7PD9XQj.png",
    "http://i.imgur.com/oKjfn5p.png",
    "http://i.imgur.com/At401my.jpg",
    "http://i.imgur.com/Mq6aAYI.jpg",
    "http://i.imgur.com/l7bkYld.jpg",
    "http://i.imgur.com/29PkciL.jpg",
    "http://i.imgur.com/cEcMlB5.jpg",
    "http://i.imgur.com/3zUjosP.jpg",
    "http://i.imgur.com/63kz4R1.jpg"
];

var healthyColor = [
    "http://i.imgur.com/T0b2KSd.jpg"
];

var healthyNoColor = [
    "http://i.imgur.com/Qg8xJA3.jpg",
    "http://i.imgur.com/HO3qv26.jpg",
    "http://i.imgur.com/c17mvFX.jpg",
    "http://i.imgur.com/5RaI7Sc.jpg",
    "http://i.imgur.com/ubIOnY5.jpg",
    "http://i.imgur.com/jscFgcr.jpg",
    "http://i.imgur.com/T0b2KSd.jpg",
    "http://i.imgur.com/HYX4XRi.jpg",
    "http://i.imgur.com/xr96LZa.png",
    "http://i.imgur.com/P70M77M.png",
    "http://i.imgur.com/sc7wmGf.png"
];



var posLinks = malariaColor.concat(malariaNoColor).concat(sickleCell);
//var posLinks = healthyColor;
//[
//    //pine trees
//    'http://digitalholeinone.com/trees-textures-materials/free-tree-textures/free%20pine%20tree%20digitalholeinone%202IMG_2412.png',
//    'http://thumbs.dreamstime.com/x/pine-tree-10688089.jpg',
//    'http://thumbs.dreamstime.com/x/pine-tree-isolated-abies-firma-see-my-other-works-portfolio-35675001.jpg',
//    'http://www.bikesandbuddies.com/wp-content/uploads/2012/02/pine-graphic.jpg',
//];
//
var negLinks = (healthyColor).concat(healthyNoColor);
//var negLinks = malariaColor;
//[
//    //non-pine trees
//
//    'http://us.123rf.com/450wm/xjbxjhxm/xjbxjhxm1212/xjbxjhxm121200004/16686373-mango-tree.jpg',
//    'http://bigtreestrategies.com/wp-content/uploads/2011/07/BigTree.jpg',
//    'http://www.lonestartreeservices.com/images/tree.png',
//    'http://gallery.yopriceville.com/downloadfullsize/send/5052',
//];
//http://gajitz.com/wp-content/uploads/2009/11/blood-cells-microscope.jpg
var predictor = 'http://i.imgur.com/zvQePTr.jpg';
//http://clearylakevets.com/wp-content/uploads/sites/249/2015/03/service-52.jpg

var conceptName = "SickleCellTest";

$(document).ready(function(){
    console.log("In JS");
    var $heading = $("#heading");
    var clarifai = new Clarifai(
        {
            'accessToken': 'ptT2sYcT76Nqc6JbgyNwuKOVQ1eGu0'
        }
    );

    $.getScript("clarifai-basic.js", function(){

        console.log("clarifai-basic.js loaded");

    });
    var train = function(){
        clarifai.train(conceptName).then(
            function(obj){
                console.log("Done train");
                predict(predictor, conceptName);
            },
            function(e){
                // an error occurred
            }
        );
    };
    var predict = function(url, conceptNam){
        clarifai.predict(url, conceptNam).then(
            function(obj){
                console.log("Done predict, result: "+(parseInt(obj.score*100))+"%");
            },
            function(e){
                // an error occurred
                console.log("Failed predict, result :"+(parseInt(obj.score*100))+"%");
            }
        );
    };

    $("button").click(function(){
            $heading.text("Clicked Button");
            //afterPosNeg(
            //    function(){
            //        console.log("Done all positives and negatives");
            //        train();
            //    },
            //    function(){
            //        console.log("Failed to process all. Try again");
            //    });
            predict(predictor,"HealthyCellTest");
            predict(predictor,"DiseasedTest");
            predict(predictor,"SickleCellTest");
            predict(predictor,"MalariaTest2");

        }
    );
    function afterPosNeg(passed,failed) {
        var promises = [];
        $.each(posLinks, function (index, value) {
            promises.push(clarifai.positive(value,conceptName));
        });
        console.log("Pushed all positives");
        $.each(negLinks, function (index, value) {
            promises.push(clarifai.negative(value,conceptName));
        });
        console.log("Pushed all negatives");
        //$.when.apply($, promises).then(callback);
        $.when.apply($, promises).done(passed).fail(failed);
        //
        //$.when.apply($, promises).then(function(){
        //    console.log("Done all positives and negatives");
        //});
    }
});