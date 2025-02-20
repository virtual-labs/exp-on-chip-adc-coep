
//function mainPage1(){
  $("#main-div-conf").html('');	
     $("#canvas-div").html('');	
//     $("#canvas-div1").html('');
      $("#centerText1").html('DIAGRAM');
      $("#centerText2").html('CONFIGURATION');
 
 
var selection ='<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-10  textConfigNote">'
//    + '<strong class="" style="margin-bottom:5px;"><center><b>Output Pin to Generate Square Wave : RB0 Pin </b> </center></strong>'
    + '<strong class=""><center><b>Clock Frequency (MHz) : 8MHz </b> </center></strong>'
    + '<strong class=""><center><b>ADC : 10 bit </b> </center></strong>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
//	+'<div class="row selectConf" >'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
////	+ '<div class="col-sm-5" id="ledSelect" >'
////	+ '<label class="labelstyle"></label>'
////	+ '</div>'
//	+ '<div class="col-sm-10  blink_text">'
//    + '<strong class=""><center><b>Clock Frequency (MHz) : 8MHz </b> </center></strong>'
//	+ '</div>'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
//	+ '</div>' 
	
	
	+'<div class="row selectConf" >'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<label class="labelstyle"><center>Select Input Channel : </center></label>'
	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<select  class="form-control " id="channelNo"  style="height:auto;" >'
	+ '<option value="0">--- Select Input Channel (RA0 - RA7 Pin) ---</option>'
	+ '<option value="1">Channel 0 </option>'
	+ '<option value="2">Channel 1</option>'
	+ '<option value="3">Channel 2</option>'
	+ '<option value="4">Channel 3</option>'
	+ '<option value="5">Channel 4</option>'
	+ '<option value="6">Channel 5</option>'
	+ '<option value="7">Channel 6</option>'
	+ '<option value="8">Channel 7</option>'
//	+ '<option value="9">Channel 8 </option>'
//	+ '<option value="10">Channel 9</option>'
//	+ '<option value="11">Channel 10</option>'
//	+ '<option value="12">Channel 11</option>'
//	+ '<option value="13">Channel 12</option>'
	+ '</select>'
	+ '</div>'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf" >'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<label class="labelstyle">Select Reference Voltage (V) : </label>'
	+ '</div>'
	+ '<div class="col-sm-6">'
	+ '<select  class="form-control " id="refV"  style="height:auto;" >'  
	+ '<option value="0">--- Select Reference Voltage ---</option>'
	+ '<option value="5">5V</option>'	
	+ '</select>'
	+ '</div>'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf" >'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
	+ '<div class="col-sm-6" >'
	+ '<label class="labelstyle">Enter Analog Input Voltage (V) : </label>'
	+ '</div>'
	+ '<div class="col-sm-6">'
	+'<input type="number"  id="analogV" placeholder="Enter Analog Input Voltage" style= "10px;width:100%;"  class=" form-control" >'
//	+ '<select  class="form-control " id="analogV"  style="height:auto;" >'
//	+ '<option value="0">--- Select Analog Input Voltage ---</option>'
//	+ '<option value="1">1V</option>'
//	+ '<option value="2">2V</option>'
//	+ '<option value="3">3V</option>'
//	+ '<option value="4">4V</option>'
//	+ '<option value="5">5V</option>'
////	+ '<option value="6">5V</option>'
//	+ '</select>'	
	+ '</div>'
//	+ '<div class="col-sm-1">'
//	+ '</div>'
	+ '</div>'
	
	
	+ '<div class="row" selectConf>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-danger btnStyle button button5" id="generateCode" data-toggle="modal" data-target="#myModal" disabled><b>GENERATE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button button4" id="compileCode" data-toggle="modal" data-target="#myModal" disabled><b>COMPILE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button button4" id="executeCode" data-toggle="modal" data-target="#myModal" disabled ><b>EXECUTE<br>CODE</b></button>'
	+ '</div>'
//	+ '<div class="col-sm-2" id="buttonDiv">'
//  +' <button type="button" class="btn btn-info btnStyle button button3" id="refresh" data-toggle="modal"><b>REFRESH</b></button>'
//	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-primary btnStyle button button2" id="downloadCode" data-toggle="modal" disabled><i class="fa fa-download"></i> <b>DOWNLOAD<br>PROGRAM</b></button>'
	+ '</div>'
	+ '</div>'
	
	+ '<div class="row  selectConf" id="codeview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
    + '</div>'
    + '</div>'
    
    + '<div class="row  selectConf" id="errorview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
    + '</div>'
    + '</div>'
	
	+ ' <!-- Modal -->'
	+ '<div class="modal fade" id="myModal" role="dialog">'
	+ ' <div class="modal-dialog modal-md">'
	+ '    <div class="modal-content">'
	+ '     <div class="modal-header">'

	+ '       <h4 class="modal-title">Message box</h4>'
	+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
	+ '     </div>'
	+ '     <div class="modal-body">'
	+ '       <p id="modelMsg"></p>'
	+ '     </div>'
	+ '     <div class="modal-footer">'
	+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
	+ '     </div>'
	+ '   </div>'
	+ ' </div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ ' </div>'
	
	$("#main-div-conf").html(selection);




var channelSelect;
var refvoltSelect;
var analogVoltSelect;

var id=0;
var channelVal;
var referanceVal;
var analogVal;


     
	$("#channelNo").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		channelVal = $("#channelNo").val();
		if(channelVal<=0){
			toastr.warning("Select Input Channel.");
		}else{	
			channelVal = $("#channelNo").val();	  
		  $("#refV").prop("disabled",false);			  

 		  
		}
		
		
	});
	
	$("#refV").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		referanceVal = $("#refV").val();
//		console.log("refV="+referanceVal);
		if(referanceVal<=0){
			toastr.warning("Select Referance Voltage.");
		}else{
			referanceVal = $("#refV").val();		  
		  $("#analogV").prop("disabled",false);			  
 		  
		}		
	});
	

//	$("#analogV").click(function(){
//		$("body").css("padding","0px 0px 0px 0px");	
//		analogVal=$("#analogV").val();
//		if(analogVal==""){
//			alert("Enter Analog Voltage.");
//		}else{
//			analogVal=$("#analogV").val();
//			$("#generateCode").prop("disabled",false);		  			  
// 		  	
//		}	
//	});
	$("#analogV").change(function(){		
			$("body").css("padding","0px 0px 0px 0px");	
			analogVal = parseFloat($("#analogV").val());
			if(analogVal==""){
	//			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value.</b>");	
				toastr.warning("Enter numeric value.");
			}else{	
				analogVal = parseFloat($("#analogV").val());
							
				if(analogVal>=0 && analogVal<=5){					  
 		  			$("#generateCode").prop("disabled",false);		
				}else{
					toastr.warning("Enter the value of analog input voltage in the range of 0V to 5V");			
				}		
			}
	});



var codeWindow =  '<div class="row  selectConf" id="codeview" hidden >'
			    + '<div class="col-sm-12" >'
			    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
			    + '</div>'
			    + '</div>'
			    
			    + '<div class="row  selectConf" id="errorview"  hidden >'
			    + '<div class="col-sm-12" >'
			    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
			    + '</div>'
			    + '</div>'
			
			
				+ ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'
			
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg"></p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>'
				+ '</div>'
				+ '</div>'
				+ ' </div>'

var flag = false;
var hexValue;
var binaryCode="";
	function calculateHex() {
	        var channelValue = $("#channelNo").val();
			var array=[];
	        // Perform conversion based on selected frequency 
	        switch (parseInt(channelValue)) {
	            case 1:
//	            console.log("case1 channel 0");
	                hexValue = "0x00"; // Example value for 0 channel
	                binaryCode="00000000";
	                break;
	            case 2:
//	            console.log("case2 channel 1");
	                hexValue = "0x04"; // Example value for 1 channel
	                binaryCode="00000100";
	                break;
	            case 3:
	                hexValue = "0x08"; // Example value for 2 channel
	                binaryCode="00001000";
	                break;
	
	            case 4:
	                hexValue = "0x0C"; // Example value for 3 channel
	                binaryCode="00001100"
	                break;
	            case 5:
	                hexValue = "0x10"; // Example value for 4 channel
	                binaryCode="00010000"
	                break;
	            case 6:
	                hexValue = "0x14"; // Example value for 5 channel
	                binaryCode="00010100"
	                break;
	            case 7:
	                hexValue = "0x18"; // Example value for 6 channel
	                binaryCode="00011000"
	                break;
	            case 8:
	                hexValue = "0x1C"; // Example value for 7 channel
	                binaryCode="00011100"
	                break;
	            case 9:
	                hexValue = "0x20"; // Example value for 8 channel
	                binaryCode="00100000"
	                break;
	            case 10:
	                hexValue = "0x24"; // Example value for 9 channel
	                binaryCode="00100100"
	                break;
	            case 11:
	                hexValue = "0x28"; // Example value for 10 channel
	                binaryCode="00101000"
	                break;
	            case 12:
	                hexValue = "0x2C"; // Example value for 11 channel
	                binaryCode="00101100"
	                break;
	            case 13:
	                hexValue = "0x30"; // Example value for 12 channel
	                binaryCode="00110000"
	                break;
	            // Add more cases for other frequencies as needed
	            default:
	                hexValue = "Unknown"; // Default value if frequency is not recognized
	        }
			return hexValue,binaryCode;
	       // console.log(hexValue,binaryCode);
	
	    }
var digitalVal;
$("#generateCode").click(function () {
	channelVal = $("#channelNo").val();
	referanceVal = $("#refV").val();
	analogVal=$("#analogV").val();
	if(channelVal==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Input Channel.</b>");

	}else if(referanceVal==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Referance Voltage.</b>");

	}else if(analogVal==0){
		$("#errorPanel").prop("hidden",false);
		$("#modelMsg").html("<b class='boldTextRed'>Select Analog Voltage.</b>");

	}else {
		const num=5/1024;
//		console.log("(5/1024)="+num);
		
//		function getDecimalPart(num) {
//    		const numStr = num.toString();
//    		const n = numStr.split('.');   
//    		parts = n[1].substring(0,4);
//     		return n[0] + '.' + parts;
//		}

//		const num = 12003.456789541385;
//		const decimalPart = getDecimalPart(num);
//		console.log(decimalPart); 
		var result2=((1/num)*analogVal);
		digitalVal=parseInt(result2);
//		console.log("result2="+result2+ " , digitalVal= "+digitalVal );
		
		
		calculateHex();
		
		
		$("#compileCode").prop("disabled",false);
		$("#executeCode").prop("disabled",false);
		$("#downloadCode").prop("disabled",false);

			
			$("#modelMsg").html("<b class='boldTextGreen'>Code Generated Successfully.</b>");
				flag=true;	
				
				$("#codeview").prop("hidden",false);
				var currentdate = new Date(); 
			    var datetime = "Date: " + currentdate.getDate() + "/"
			                + (currentdate.getMonth()+1)  + "/" 
			                + currentdate.getFullYear() + " Time "  
			                + currentdate.getHours() + ":"  
			                + currentdate.getMinutes() + ":" 
			                + currentdate.getSeconds();
				var a ='<p>/*'+datetime+'*/</p><br><br>'	
					    +'<p class="codeheaderfile">#include&#60;pic18fregs.h&#62; <br>#include&#60;delay.h&#62; </p>'
						+'<p>#pragma config XINST=OFF</p>'
						+'<p>#pragma config FOSC = INTOSCIO_EC</p>'
						+'<p>#pragma config WDT = OFF</p>'
						+'<p>#pragma config LVP = OFF</p>'
						+'<p><span class="greenCode">#define VREF '+referanceVal+'</span></p>' 
						+'<p>#define LED_TRIS_Output TRISDbits</p>'
						+'<p>#define LED_LAT_Output LATDbits</p>'
						+'<p>void ADC_init(void);</p>'
						+'<p>int ADC_read(int channel);</p>'
						+'<p>void ADC_Init()</p>'
						+'<p>{</p>'
						+'<p>&nbsp;&nbsp; <span class="greenCode">ADCON0='+binaryCode+';</span> &nbsp;&nbsp;&nbsp; //A/D Module is OFF and Channel '+(channelVal-1)+' is selected </p>'
						+'<p>&nbsp;&nbsp;TRISA = 0xFF;	/* Set as input port */</p>'
						+'<p>&nbsp;&nbsp;ADCON1 = 0x0E;	/* Ref vtg is VDD and Configure pin as analog pin */</p>'
						+'<p>&nbsp;&nbsp;ADCON2 = 0x92;	/* Right Justified, 4Tad and Fosc/32. */</p>'
						+'<p>&nbsp;&nbsp;ADRESH=0;		/* Flush ADC output Register */</p>'
						+'<p>&nbsp;&nbsp;ADRESL=0;</p>'
						+'<p>} </p>'
						+'<p>int ADC_Read(int channel)</p>'
						+'<p>{</p>'
						+'<p>&nbsp;&nbsp;int digital;</p>'
						+'<p>&nbsp;&nbsp;ADCON0 = (ADCON0 & 0b11000011) | ( (channel &lt;&lt; 2) & 0b00111100 );</p>'
						+'<p>&nbsp;&nbsp;ADCON0 |= ((1 &lt;&lt; ADCON0bits.ADON) | (1 &lt;&lt; ADCON0bits.GO));</p>'
						+'<p>&nbsp;&nbsp;while(ADCON0bits.GO_NOT_DONE==1);</p>'
						+'<p>&nbsp;&nbsp;digital = (ADRESH*256) | (ADRESL);</p>'
						+'<p>&nbsp;&nbsp;return(digital);</p>'
						+'<p>}</p>'
						+'<p>void main(void)</p>'
						+'<p>{</p>'
						+'<p>&nbsp;&nbsp;float voltage;</p>'
						+'<p>&nbsp;&nbsp;OSCCON=0x72;         /* set internal clock to 8MHz */</p>'
						+'<p>&nbsp;&nbsp;ADC_Init();</p>'
						+'<p>&nbsp;&nbsp;TRISD = 0;</p>'
						+'<p>&nbsp;&nbsp;while(1)</p>' 
						+'<p>&nbsp;&nbsp;{</p>'
						+'<p>&nbsp;&nbsp;LATD= ADC_Read(0)*((float)VREF/(float)1023);</p>'
						+'<p>&nbsp;&nbsp;}</p>'
						+'<p>}</p>'
						+'<p></p>'
						$("#demo").html(a);
						
						$("#errorview").prop("hidden",false);
			var b = '<b class="blink_text">_</b><br><br><br>'
			$("#errordemo").html(b);
	
			$("#channelNo").prop("disabled",true);
		 	$("#refV").prop("disabled",true);
		 	$("#analogV").prop("disabled",true);
  
}
    
			
			
			
		 	
});

var compileflag=false;
$("#compileCode").click(function(){	
	compileflag=true;
	if(flag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Check Terminal Window Below Code for Errors.</b>");
		var b1 = '<b>Program Compiled Successfully.</b><br><br><br>'
		$("#errordemo").html(b1);
	}else{
		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First.</b>");
	}
});
 

$("#executeCode").click(function () {
	if(compileflag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Code Executed Successfully.</b>");
			channelSelect = $("#channelNo").val();
			refvoltSelect = $("#refV").val();
			analogVoltSelect=$("#analogV").val();
			$("#canvas-div").html('');
			$("#canvas-div1").html('');
//			$("#plot").prop("hidden",false);
			mimic(channelSelect,refvoltSelect,analogVoltSelect,digitalVal);
    
	}else{
//		$("#canvas-div").html('');
//			$("#canvas-div1").html('');
//		mimic(channelSelect,refvoltSelect,analogVoltSelect,digitalVal);
		$("#modelMsg").html("<b class='boldTextGreen'>Please Compile The Code First</b>");
	}
	
	
 
});

  var doc = new jsPDF();
	var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
   

$("#downloadCode").click(function () {
	 if(flag==true){
			doc.fromHTML($('#demo').html(), 15, 15, {
        	'width': 170,
            'elementHandlers': specialElementHandlers
    		});
    		doc.save('sourcecode.pdf');
//			$("#modelMsg").html("<b class='boldTextGreen'>Download Code File Successfully.</b>");	
	}else{
//		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First and Then You Can Download Code File.</b>");
		toastr.warning("Please Generate The Code First and Then You Can Download Code File.")
	}

 
});



//}
