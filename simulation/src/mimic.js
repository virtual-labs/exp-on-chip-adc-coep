 

$('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;

	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}


function mimic(channelSelect,refvoltSelect,analogVoltSelect,digitalVal){
    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	var w =660;
	var h = 550;	
	var width = $(window).width();
	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
var x=150;
var y=160;	

var channel=parseInt(channelSelect);
var refVoltage=parseInt(refvoltSelect);
var analogVoltage=parseFloat(analogVoltSelect);
var digitalVal=parseInt(digitalVal);					


//console.log(" channel = "+channel);
//console.log(" refVoltage = "+refVoltage);
//console.log(" analogVoltage = "+analogVoltage);
//console.log(" digitalVal = "+digitalVal);

//var graphtimerVal=timerVal-1;
//var interval_plot1=(ON_dlyVal+OFF_dlyVal)/1000;
//var offTime1=ON_dlyVal/1000;
//var onTime1=OFF_dlyVal/1000;
//var onTime11=onTime1+offTime1;
//console.log("onTime1 - "+onTime1+", off - "+offTime1);

var checkStatus=paper.image("images/checkBtn1.png",x-90,y-150,200, 50);
var resetimg=paper.image("images/resetconnectioPreview.png",x+240,y-150,180, 50);
var runimg=paper.image("images/runPreview.png",x+120,y-150,100, 50);
var microcontroller=paper.image("images/chipImg.png",x-40,y+40,400, 300).rotate(1);

var inputpinName=0;
var diodSelection=1;

var diode;
var anode;
var cathode;

var n1=paper.text((x+190),(y-71),'DIGITAL OUTPUT').attr({"font-size":20,"font-weight":"bold"});
var pulse=paper.rect(x+90, y-51,200,60).attr({"stroke-width": 2,"font-size":25,"font-weight":"bold"});
var r1=paper.rect(x+100, y-41,180,40).attr({"fill": "#000", "stroke-border":2,"stroke-width": 3});
var digitalTxt= paper.text(x+190, y-21,"0").attr({"fill":"#FF0000","stroke-width":10,"font-weight":"bold",'font-family':'digital-clock-font','font-size': 30});




//var r=paper.image("images/resistorSymbol.png",x+350,y-45,120, 55); 
//var connection_RtoG=paper.path("M"+(x+436)+" "+(y-17.5)+"l 40 0 l 0 52   ").attr({'stroke-width':2});
//var ground= paper.image("images/ground.png",x+450,y+30,50, 21);

//var Rcircle=paper.circle(x+363, y-17.5, 5).attr({'fill':'#2626eb'});
//var Ledcircle2=paper.circle(x+228, y-21, 35);

var inputpVoltText=paper.text((x+320),(y+50),'Input Voltage').attr({"font-weight":"bold",'font-size': 14});
var ipVoltValText=paper.text((x+320),(y+65),'+'+analogVoltage+'V').attr({"fill":"#FF0000","font-weight":"bold",'font-size': 16});
var inputVoltageVDD= paper.path("M"+(x+320)+" "+(y+100)+"l 0 -25 l -14 0 l 30 0  ").attr({'stroke-width':3});
var ipVolt_VDDcircle=paper.circle(x+320, y+100, 5).attr({'fill':'#2626eb'});


//Analog Input RA0 ti RA7 pins
var terminalRA0= paper.circle(x+174, y+280, 5).attr({'fill':'#2626eb'});
var terminalRA1= paper.circle(x+190, y+281, 5).attr({'fill':'#2626eb'});
var terminalRA2= paper.circle(x+206, y+281, 5).attr({'fill':'#2626eb'});
var terminalRA3= paper.circle(x+222, y+281, 5).attr({'fill':'#2626eb'});
var terminalRA4= paper.circle(x+258, y+242, 5).attr({'fill':'#2626eb'});
var terminalRA5= paper.circle(x+258, y+227, 5).attr({'fill':'#2626eb'});
var terminalRA6= paper.circle(x+258, y+131, 5).attr({'fill':'#2626eb'});
var terminalRA7= paper.circle(x+258, y+145, 5).attr({'fill':'#2626eb'});


//var vddConnectionRA0=paper.path("M"+(x-56)+" "+(y+304.5)+"l 230 0 l 0 -20").attr({'stroke-width':3});

var vddCircle=paper.circle(x+28, y+184, 5).attr({'fill':'#000'});
var vdd= paper.image("images/VDD5V.png",x-76,y+115,55, 51);
var vddConnection=paper.path("M"+(x+24.5)+" "+(y+184)+"l -81 0 l 0 -22   ").attr({'stroke-width':3});

var vssCircle=paper.circle(x+258, y+158, 5).attr({'fill':'#000'});
var ground= paper.image("images/ground.png",x+387,y+266,50, 21);
var groundConnection=paper.path("M"+(x+262)+" "+(y+158)+"l 150 0 l 0 112   ").attr({'stroke-width':3});

resetimg.click(function(){
	$("#canvas-div").html('');
//	$("#plot").html("");
//		$("#plot").prop("hidden",false);
//		reset();
	paper.clear();
	mimic(channelSelect,refvoltSelect,analogVoltSelect,digitalVal);
	
})

var vfyRD0Connect=false;
var vfyRD1Connect=false;
var vfyRD2Connect=false;
var vfyRD3Connect=false;
var vfyRD4Connect=false;
var vfyRD5Connect=false;
var vfyRD6Connect=false; 
var vfyRD7Connect=false;

var pinName=0;	//channel

var d0Flag=0;
var d1Flag=0;
var d2Flag=0;
var d3Flag=0;
var d4Flag=0;
var d5Flag=0;
var d6Flag=0;
var d7Flag=0;

var checkflag1=0;
var checkflag2=0;
var checkflag3=0;
var checkflag4=0;
var checkflag5=0;
var checkflag6=0;
var checkflag7=0;
var checkflag8=0;

var checkitSelfRA0=false;
var checkitSelfRA1=false;
var checkitSelfRA2=false;
var checkitSelfRA3=false;
var checkitSelfRA4=false;
var checkitSelfRA5=false;
var checkitSelfRA6=false;
var checkitSelfRA7=false;


var anode_connection_arr2=[];

terminalRA0.click(function(){
d0Flag=1;
checkflag1=1;
//	d0Flag=1;
	if(verifyAconnect==true || checkitSelfRA0==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag2==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){
//			console.log("RA0");
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 210 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+312.5)+" l -147.3 0"},1000, function(){
				
			anode_connection_arr2[0]=paper.path("M "+(x+174)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+174)+" "+(y+312.5)+" l 0 -28"},1000, function(){	
			checkitSelfRA0=true;	
			vfyRD0Connect=true;	
			pinName=1;
			});	
			});
			});
		}	
	}
});

terminalRA1.click(function(){
d1Flag=1;
checkflag2=1;

	if(verifyAconnect==true || checkitSelfRA1==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag1==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 210 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+312.5)+" l -131.3 0"},1000, function(){
				
			anode_connection_arr2[0]=paper.path("M "+(x+190)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+190)+" "+(y+312.5)+" l 0 -28"},1000, function(){
			checkitSelfRA1=true;
			vfyRD1Connect=true;	
			pinName=2;
			});	
			});
			});
		}	
	}
});

terminalRA2.click(function(){
d2Flag=1;
checkflag3=1;

	if(verifyAconnect==true || checkitSelfRA2==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag1==1 || checkflag2==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){

			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 210 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+312.5)+" l -115.3 0"},1000, function(){
				
			anode_connection_arr2[0]=paper.path("M "+(x+206)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+206)+" "+(y+312.5)+" l 0 -28"},1000, function(){
			checkitSelfRA2=true;
			vfyRD2Connect=true;	
			pinName=3;
			});	
			});
			});
		}	
	}
});

terminalRA3.click(function(){
d3Flag=1;
checkflag4=1;

	if(verifyAconnect==true || checkitSelfRA3==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag1==1 || checkflag2==1 || checkflag3==1 || checkflag5==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){

			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 210 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+312.5)+" l -99.3 0"},1000, function(){
				
			anode_connection_arr2[0]=paper.path("M "+(x+222)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+222)+" "+(y+312.5)+" l 0 -28"},1000, function(){
			checkitSelfRA3=true;
			vfyRD3Connect=true;	
			pinName=4;
			});	
			});
			});
		}	
	}
});

terminalRA4.click(function(){
d4Flag=1;
checkflag5=1;

	if(verifyAconnect==true || checkitSelfRA4==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag1==1 || checkflag2==1 || checkflag3==1 || checkflag4==1 || checkflag6==1 || checkflag7==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){

			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 139.5 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+242)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+242)+" l -58.3 0"},1000, function(){
			checkitSelfRA4=true;
			vfyRD4Connect=true;	
			pinName=5;
			});	
			});
		}	
	}
});

terminalRA5.click(function(){
d5Flag=1;
checkflag6=1;

	if(verifyAconnect==true || checkitSelfRA5==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag1==1 || checkflag2==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag7==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){

			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 124.5 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+227)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+227)+" l -58.3 0"},1000, function(){
			checkitSelfRA5=true;
			vfyRD5Connect=true;	
			pinName=6;
			});	
			});
		}	
	}
});

terminalRA6.click(function(){
d6Flag=1;
checkflag7=1;

	if(verifyAconnect==true || checkitSelfRA6==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag1==1 || checkflag2==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag8==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){

			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 28.5 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+131)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+131)+" l -58.3 0"},1000, function(){
			checkitSelfRA6=true;
			vfyRD6Connect=true;	
			pinName=7;
			});	
			});
		}	
	}
});

//var terminalRA7= paper.circle(x+258, y+145, 5).attr({'fill':'#2626eb'});
terminalRA7.click(function(){
d7Flag=1;
checkflag8=1;

	if(verifyAconnect==true || checkitSelfRA7==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{
		if(checkflag1==1 || checkflag2==1 || checkflag3==1 || checkflag4==1 || checkflag5==1 || checkflag6==1 || checkflag7==1){
			toastr.info("Click on 'Check Connection' Button.");
		}else if(anodeflg==1){

			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+104)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+104)+"l 0 42.5 "},1000, function(){
								
			anode_connection_arr2[0]=paper.path("M "+(x+320)+" "+(y+145)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
			anode_connection_arr2[0].animate({path :"M"+(x+320)+" "+(y+145)+" l -58.3 0"},1000, function(){
			checkitSelfRA7=true;
			vfyRD7Connect=true;	
			pinName=8;
			});	
			});
		}	
	}
});

var verifyAconnect=false;
var anodeflg=0;
ipVolt_VDDcircle.click(function(){
	anodeflg=1;
	anodeClick=true;
	var anode_connection_arr=[];	
	TtoAconnection();
	
	
});

var statusFlag=false;
checkStatus.click(function(){	
//	console.log("anodeflg"+anodeflg+", pinName="+pinName+ ",channel :" + channel);
	if(anodeflg==1 && pinName==channel ){
		statusFlag=true;
		toastr.success("Connection Established Successfully. Now Click on Run Button.");		
	}else if(anodeflg!=1 && pinName!=channel){
		toastr.warning("Connect the pin.")
	}else{
		toastr.error("Wrong Connection. Please Try Again.");
	}
});

runimg.click(function(){
	if(statusFlag==true){
		digitalTxt.remove();
		var digitalTxt_OP= paper.text(x+190, y-21,"ADC o/p : "+digitalVal).attr({"fill":"#FF0000","stroke-width":10,"font-weight":"bold",'font-family':'digital-clock-font','font-size': 30});
	
	}else{
		toastr.warning("Please Check Connection Status.");
	}
});

var checkitSelf0=false;
var checkitSelf1=false;
var checkitSelf2=false;
var checkitSelf3=false;
var checkitSelf4=false;
var checkitSelf5=false;
var checkitSelf6=false;
var checkitSelf7=false;

function TtoAconnection(){	
	var anode_connection_arr1=[];
	if(checkitSelf0==true || checkitSelf1==true || checkitSelf2==true || checkitSelf3==true || checkitSelf4==true || checkitSelf5==true || checkitSelf6==true || checkitSelf7==true || vfyRD0Connect==true || vfyRD1Connect==true || vfyRD2Connect==true || vfyRD3Connect==true || vfyRD4Connect==true || vfyRD5Connect==true || vfyRD6Connect==true || vfyRD7Connect==true){
		toastr.info("Already Connected. Now Click on Check Connection Button.");
	}else{			
			if(anodeflg==1 && d0Flag==1 && checkitSelf0==false){
				//pin1
				anode_connection_arr1[0]=paper.path("M "+(x+174)+" "+(y+285.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+174)+" "+(y+285.5)+" l 0 28"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+174)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+174)+" "+(y+312.5)+" l 147.3 0"},1000, function(){
						
				anode_connection_arr1[0]=paper.path("M "+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+312.5)+"l 0 -210 "},1000, function(){
				checkitSelf0=true;
				verifyAconnect=true;
				pinName=1;
				});
				});	
				});
			
			}else if(anodeflg==1 && d1Flag==1){
				//pin2
				anode_connection_arr1[0]=paper.path("M "+(x+190)+" "+(y+285.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+190)+" "+(y+285.5)+" l 0 28"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+190)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+190)+" "+(y+312.5)+" l 131.3 0"},1000, function(){
						
				anode_connection_arr1[0]=paper.path("M "+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+312.5)+"l 0 -210 "},1000, function(){
				checkitSelf1=true;
				verifyAconnect=true;
				pinName=2;	
				});
				});	
				});
			}else if(anodeflg==1 && d2Flag==1){
				//pin3
				anode_connection_arr1[0]=paper.path("M "+(x+206)+" "+(y+285.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+206)+" "+(y+285.5)+" l 0 28"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M "+(x+206)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+206)+" "+(y+312.5)+" l 115.3 0"},1000, function(){
						
				anode_connection_arr1[0]=paper.path("M "+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+312.5)+"l 0 -210 "},1000, function(){
				checkitSelf2=true;
				verifyAconnect=true;
				pinName=3;	
				});	
				});
				});
			}else if(anodeflg==1 && d3Flag==1){
				//pin4
				anode_connection_arr1[0]=paper.path("M"+(x+222)+" "+(y+285.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+222)+" "+(y+285.5)+" l 0 28"},1000, function(){
				
				anode_connection_arr1[0]=paper.path("M"+(x+222)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+222)+" "+(y+312.5)+" l 99.3 0"},1000, function(){
						
				anode_connection_arr1[0]=paper.path("M"+(x+320)+" "+(y+312.5)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+312.5)+"l 0 -210 "},1000, function(){
				checkitSelf3=true;
				verifyAconnect=true;
				pinName=4;	
				});	
				});
				});
			}else if(anodeflg==1 && d4Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+263)+" "+(y+242)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+263)+" "+(y+242)+"l 58.3 0 "},1000, function(){
									
				anode_connection_arr1[0]=paper.path("M "+(x+320)+" "+(y+242)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+242)+" l 0 -139.5 "},1000, function(){
				checkitSelf4=true;
				verifyAconnect=true;
				pinName=5;	
				});	
				});
			}else if(anodeflg==1 && d5Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+263)+" "+(y+227)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+263)+" "+(y+227)+"l 58.3 0 "},1000, function(){
									
				anode_connection_arr1[0]=paper.path("M "+(x+320)+" "+(y+227)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+227)+" l 0 -124.5 "},1000, function(){
				checkitSelf5=true;
				verifyAconnect=true;
				pinName=6;	
				});	
				});
			}else if(anodeflg==1 && d6Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+263)+" "+(y+131)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+263)+" "+(y+131)+"l 58.3 0 "},1000, function(){
									
				anode_connection_arr1[0]=paper.path("M "+(x+320)+" "+(y+131)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+131)+" l 0 -28.5 "},1000, function(){
				checkitSelf6=true;
				verifyAconnect=true;
				pinName=7;	
				});	
				});	
			}else if(anodeflg==1 && d7Flag==1){
				anode_connection_arr1[0]=paper.path("M "+(x+263)+" "+(y+145)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});			
				anode_connection_arr1[0].animate({path :"M"+(x+263)+" "+(y+145)+"l 58.3 0 "},1000, function(){
									
				anode_connection_arr1[0]=paper.path("M "+(x+320)+" "+(y+145)+ "l 0 0").attr({'stroke':'#2626eb','stroke-width':3});
				anode_connection_arr1[0].animate({path :"M"+(x+320)+" "+(y+145)+" l 0 -42.5 "},1000, function(){
				checkitSelf7=true;
				verifyAconnect=true;
				pinName=8;	
				});	
				});	
			}else{
		//		alert("Wrong Connection.Please Try Again");
			}
	 }
}



}

