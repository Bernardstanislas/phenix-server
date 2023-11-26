$(document).ready(function(){
        var que;
        var ans;
        var right;
        var i=0;
        var score=0;
        var que1={que:"What is the correct CSS syntax for making all the <span> elements bold?",
            ans:["span {text-size: bold}","span {font-weight: bold}","&lt;span style='font-size: bold'&gt;","&lt;span style='text-size: bold'&gt;"],
            right:"1"};
        var que2={que:"How do you add a comment in a CSS file?",
            ans:["/* this is a comment */","// this is a comment //","// this is a comment","&lt;!-- this is a comment--&gt;"],
            right:"0"};
        var que3={que:"What property is used to change the text color of an element?",
            ans:["fontcolor:","textcolor:","color:","font-color:"],
			right:"2"};
        var que4={que:"What does CSS stand for?",
            ans:["Custom Style Sheets","Colorful Style Sheets","Computer Style Sheets","Cascading Style Sheets"],
            right:"3"};
        var que5={que:"The # symbol specifies that the selector is?",
            ans:["class","tag","first","id"],
            right:"3"};
        var que6={que:"Which is the correct CSS syntax?",
            ans:["{p:color=black(p}","p {color: black;}","{p;color:black}","p:color=black"],
            right:"1"};
        var que7={que:"Which of the following would be used to create an ID called header which has a width of 750px, a height of 30px and the color of the text is black?",
			ans:["#header { height: 30px; width: 750px; color: black; }",".header { height: 30px; width: 750px; colour: black; }","#header { height: 30px; width: 750px; text: black; }",".header { height: 30px; width: 750px; color: black; }"],
			right:"0"};
        var que8={que:"Which snippet of CSS is commonly used to center a website horizontally?",
			ans:["site-align: center;","margin: center;","margin: auto 0;","margin: 0 auto;"],
			right:"3"};
        var que9={que:"How do you make a list not display bullet points?",
			ans:["list-style-type: no-bullet","list: none","bulletpoints: none","list-style-type: none"],
			right:"3"};
        var que10={que:"What is the correct CSS syntax to change the font name?",
			ans:["font-name:","font:","font-family:","fontname:"],
			right:"2"};
        var que11={que:"What is the correct Syntax for importing a stylesheet in CSS?",
			ans:["@import url(css/example.css);","@import-stylesheet url(css/example.css);","import-css url(css/example.css);","@import-style url(css/example.css);"],
			right:"0"};
        var que12={que:"Which HTML attribute is used to define inline CSS styles?",
			ans:["CSS","Style","ID","Type"],
			right:"1"};
        var que13={que:"How do you make each word in a text start with a capital letter?",
			ans:["text-transform: capitalize","text-transform: uppercase","You can&#39;t do that with CSS","text: capitalize"],
			right:"0"};
        var que14={que:"What is the correct CSS syntax for making all the <p> tags font size 14px?",
			ans:["p {14px}","p {font-size: 14px;}","p {text-size: 14px;}","p {font: 14px;}"],
			right:"1"};
        var que15={que:"A declaration is terminated by?",
			ans:[". - period","! - exclamation mark","; - semi colon",": - colon"],
			right:"2"};
        var que16={que:"Which CSS property controls the text size?",
			ans:["font-height","text-size","font-size","text-style"],
			right:"2"};
        var que17={que:"How do you insert padding so that it is: 10 pixels at the top, 15 pixels at the bottom, 5 pixels at the right, 10 pixels to the left?",
			ans:["padding: 10px 15px 5px 10px;","padding: 15px 5px 10px 10px;","padding: 10px 5px 10px 15px;","padding: 10px 5px 15px 10px;"],
			right:"3"};
        var que18={que:"Which property is used to change the background color?",
			ans:["background-color:","bg-color:","bground:","b-color:"],
			right:"0"};
        var que19={que:"How do you display hyperlinks without an underline?",
			ans:["a {decoration: no underline}","a {text-decoration: none}","a {hyperlink: no underline}","a {text-decoration: no underline}"],
			right:"1"};
        var que20={que:"How to rotate objects using CSS3?",
			ans:["object-rotation: 30deg;","rotate-object: 30deg;","transform: rotate(30deg);","transform: rotate-30deg-clockwise;"],
			right:"2"};
        var quelst=[que1,que2,que3,que4,que5,que6,que7,que8,que9,que10,que11,que12,que13,que14,que15,que16,que17,que18,que19,que20];
        var wrong=[];
        $("#start").click(function(){
            $(".front").hide();
            $("#sub").show();
            $(".quiz").show();
            $("#num").text(i+1+"/"+quelst.length)
            $("#q").text(quelst[i].que);
            $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelst[i].ans[0])+"</label>";
            $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelst[i].ans[1])+"</label>";
            $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelst[i].ans[2])+"</label>";
            $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+quelst[i].ans[3])+"</label>";
            
        });
        $("#sub").click(function(){
            
            
            if($("input[name='opt']:checked").val()!=null){
                if($("input[name='opt']:checked").val()==quelst[i].right){
                    score++;
                }
                else{
                    wrong.push(i);
                }   
                $("#sub").hide();
                $(".score").text(score);
                if(i!=quelst.length-1){
                next();
                }
                else{
                    reslt();
                }

            }
            else{
                $(".p").text("Select One option");
            }
        });
        function next(){
            if(i!=(quelst.length)-1){
                    i++;
                }
            $("#q").text(quelst[i].que);
            $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelst[i].ans[0])+"</label>";
            $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelst[i].ans[1])+"</label>";
            $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelst[i].ans[2])+"</label>";
            $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+quelst[i].ans[3])+"</label>";
            $("#num").text(i+1+"/"+quelst.length);
			if ((i + 1) == quelst.length) {
				$("#sub").html("View Final Score");
			}
            $("#sub").show();
            }
        function reslt(){
            $(".quiz").hide();
            $(".result").show();
            $(".score").text(score+"/"+quelst.length);
            
			  var ratio = score / quelst.length;
			  var text;

			  switch (true) {
				case (ratio === 1):
				  text = "Wow - Congratulations you got a perfect score!";
				  break;
				case (ratio > 0.9):
				  text = "Awesome job, you got most of them right.";
				  break;
				case (ratio > 0.60):
				  text = "Pretty good, we'll say that's a pass.";
				  break;
				case (ratio > 0.5):
				  text = "Well, at least you got half of them right.";
				  break;
				case (ratio < 0.5 && ratio !== 0):
				  text = "Looks like this was a tough one, better luck next time.";
				  break;
				case (ratio === 0):
				  text = "Yikes, none correct. Well, maybe it was rigged?";
				  break;
			  }
			  $(".message").text(text);
	
        }
        $("#an").click(function(){
            $(".result").hide();
            $(".answers").show();
						
			for (let x = 0; x < quelst.length; x++) {  
				if((wrong.toString()).search(x)!=-1){
					$("#a" + (x+1)).css('color','#ff6347');
				}	  
			}
			     
        });
        
    });
