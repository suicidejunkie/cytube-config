x = document.getElementById("wrap");
x.getElementsByClassName("navbar-brand")[0].innerHTML = "Kilogram";
document.querySelector("#queue_next").innerHTML = "Next";
document.querySelector("#queue_end").innerHTML = "At End";
/*var div = document.createElement("div");
document.getElementById('chatwrap').appendChild(div);
*/
/* Set who added the video in the playlist */
var targetNode = document.getElementById("queue");
var config = 
{
	childList: true,
	subtree: true
};

var activeCallBack = function(mutations, observer) 
{
	mutations.forEach(({
		addedNodes
	}) => {
		const li = addedNodes[0]; // li is added video <li> item
		// Some weird shit happens where stuff is undefined but it doesn't
		// matter so we'll silently catch it and ignore it
		try
		{
			var title = li.title;
			title = title.replace("Added by: ", "");

			var children = li.childNodes;
			var time = children[1].innerHTML;
			
            if (title.includes("|") || title == ""
			    || time.includes("|") || time == "")
			{
				return;
			}

			children[1].innerHTML = title + " | " + time
            //$("#queue li").css( 'cursor', 'url(http://www.rw-designer.com/cursor-view/5759.png) 9 9, auto' );                        
		}
		catch(error)
		{
			return;
		}
	});
};

var observer = new MutationObserver(activeCallBack);
observer.observe(targetNode, config);

/* Wranglerstar */
function flyLikeAnEagle() {
	var rng = Math.floor(Math.random()*75) * (Math.round(Math.random()*1)*2-1);
	var zfg = Math.floor(Math.random()*50+rng) + "%";
	$("#wrangleid").animate( {"margin-top":-200,   "margin-left":zfg}, 1000, 'linear', function(){fallLikeABeagle();} );//3000 was 1000
}
function fallLikeABeagle() {
	var rng = Math.floor(Math.random()*75) * (Math.round(Math.random()*1)*2-1);
	var zfg = Math.floor(Math.random()*50+rng) + "%";
	$("#wrangleid").animate( {"margin-top":"110%", "margin-left":zfg}, 1000, 'linear', function(){flyLikeAnEagle();} );//3000 was 1000
}
function spinLikeARaver() {
	var interval = null;
	var counter = 0;
	clearInterval(interval);
	interval = setInterval(function(){
		if (counter != -360) {
			counter -= 1;
			$("#wrangleid").css({
				MozTransform: 'rotate(-' + -counter + 'deg)',
				WebkitTransform: 'rotate(' + -counter + 'deg)',
				transform: 'rotate(' + -counter + 'deg)'
			});
		} else counter = 0;
	}, 10);
}
function wranglerCuntStart() {
        var audioWrangle = new Audio('https://nifnat.com/Public/public2/WranglerstarHatesFoids1.mp3');
	audioWrangle.play();
	var wrangle = document.createElement("img");
	wrangle.src = 'https://nifnat.com/Public/cytube%20emotes/wranglestar.jpg';
	wrangle.style.zIndex = "999999";
	wrangle.style.position = "absolute";
	wrangle.id = "wrangleid"
	//document.getElementById("wrap").prependTo(wrangle);
	$(wrangle).prependTo($(".fluid"));
	flyLikeAnEagle();
	spinLikeARaver();
}

var wranglerBtn = document.createElement("button");
wranglerBtn.id = "wranglerBtn";
wranglerBtn.className = " btn btn-sm btn-default"
wranglerBtn.innerHTML = "Enable Wranglerstar";
document.getElementById("leftcontrols").appendChild(wranglerBtn);

wranglerBtn.addEventListener("click", function() {
       wranglerCuntStart()	
});

/* Toggle Rainbow text shit */
var css = undefined;

var btn = document.createElement("button");
btn.id = "rainbowBtn";
btn.className = " btn btn-sm btn-default"
btn.innerHTML = "Toggle Rainbow";

document.getElementById("leftcontrols").appendChild(btn);
document.getElementById("rainbowBtn").title = "CPU Intensive, toggle off if this is a problem.";

btn.addEventListener("click", function() 
{
	if (typeof css == "undefined")
	{
		console.log("Setting rainbow");
		css = ' #userlisttoggle, #modflair, #usercount, #userlist, .username, .timestamp{ background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff); -webkit-background-clip: text; background-clip: text; color: transparent !important; animation: rainbow_animation 18s ease-in-out infinite; background-size: 400% 400%; } .qe_title{ color: transparent; } .glyphicon-plus, .glyphicon-minus{ position: initial; } .queue_entry, #videowrap-header { background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff); -webkit-background-clip: text; background-clip: text; color: transparent; animation: rainbow_animation 6s ease-in-out infinite; background-size: 400% 100%; } .queue_active{ -webkit-background-clip: inherit; color: white !important; background-color: #70787d !important;  background-image: -webkit-linear-gradient(#8a9196, #7a8288 60%, #70787d) !important; background-image: linear-gradient(#8a9196, #7a8288, #70787d) !important; background-repeat: no-repeat !important; } .queue_active > .qe_title{ color: white !important; } @keyframes rainbow_animation { 0%,100% { background-position: 0 0; } 50% { background-position: 100% 0; }', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.id = 'rainbowStyle'; style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);
	}
	else
	{
		console.log("Clearing rainbow");
		document.getElementById("rainbowStyle").parentNode.removeChild(document.getElementById("rainbowStyle"));
		css = undefined;
	}
});

/* Spin btn */
var spin = undefined;

var spinBtn = document.createElement("button");
spinBtn.id = "spinBtn";
spinBtn.className = " btn btn-sm btn-default";
spinBtn.innerHTML = "Spin";

document.getElementById("leftcontrols").appendChild(spinBtn);

spinBtn.addEventListener("click", function() 
{
	console.log("Spin called");
	if (typeof spin == "undefined")
	{
		var spinSpeed = 1;
		var itEitherHappensOrItDoesnt = Math.random() < 0.5;
		if (itEitherHappensOrItDoesnt)
		{
			spinSpeed = Math.random() * (36000 - 0.00001)
		}
		else
		{
			spinSpeed = Math.random() * (1 - 0.00001)
		}
		
		spin = 'body { -webkit-animation: rotation ' + spinSpeed + 's infinite linear;} @-webkit-keyframes rotation { from { -webkit-transform: rotate(0deg); } to { -webkit-transform: rotate(359deg); } }', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.id = 'spinStyle'; style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = spin; } else { style.appendChild(document.createTextNode(spin)); } head.appendChild(style);
	}
	else
	{
		document.getElementById("spinStyle").parentNode.removeChild(document.getElementById("spinStyle"));
		spin = undefined;
	}
});

/* Bounce Button */
var bounce = undefined;

var bounceBtn = document.createElement("button");
bounceBtn.id = "bounceBtn";
bounceBtn.className = " btn btn-sm btn-default";
bounceBtn.innerHTML = "Bounce";

document.getElementById("leftcontrols").appendChild(bounceBtn);

bounceBtn.addEventListener("click", function() 
{
	console.log("bounce called");
	if (typeof bounce == "undefined")
	{
		var minusOrNothing = " ";
		var itEitherHappensOrItDoesnt = Math.random() < 0.5;
		if (itEitherHappensOrItDoesnt)
		{
			minusOrNothing = " "; // -
		}
		else
		{
			minusOrNothing = " ";
		}
	
		console.log("minusOrNothing: " + minusOrNothing);
	
		bounce = ' div { animation:bounce ' + Math.random() * (15 - 1) + 's linear infinite; } @keyframes bounce{ 0%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 25%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 50%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 75%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 100%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } }', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.id = 'bounceStyle'; style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = bounce; } else { style.appendChild(document.createTextNode(bounce)); } head.appendChild(style);
	}
	else
	{
		document.getElementById("bounceStyle").parentNode.removeChild(document.getElementById("bounceStyle"));
		bounce = undefined;
	}
});

/* Earfquake Button */
var quake = undefined;

var quakeBtn = document.createElement("button");
quakeBtn.id = "quakeBtn";
quakeBtn.className = " btn btn-sm btn-default";
quakeBtn.innerHTML = "Earfquake";
var audioquake = new Audio('https://nifnat.com/Public/public2/Tyler,%20The%20Creator%20-%20EARFQUAKE1.mp3');
document.getElementById("leftcontrols").appendChild(quakeBtn);

quakeBtn.addEventListener("click", function() 
{
	console.log("quake called");
	if (typeof quake == "undefined")
	{
                audioquake.play()
		//$("#videowrap").prependTo("html");
		quake = ' div { animation: shake 0.5s; animation-iteration-count: infinite;} @keyframes shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 20% { transform: translate(-3px, 0px) rotate(1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 40% { transform: translate(1px, -1px) rotate(1deg); } 50% { transform: translate(-1px, 2px) rotate(-1deg); } 60% { transform: translate(-3px, 1px) rotate(0deg); } 70% { transform: translate(3px, 1px) rotate(-1deg); } 80% { transform: translate(-1px, -1px) rotate(1deg); } 90% { transform: translate(1px, 2px) rotate(0deg); } 100% { transform: translate(1px, -2px) rotate(-1deg); }}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.id = 'quakeStyle'; style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = quake; } else { style.appendChild(document.createTextNode(quake)); } head.appendChild(style);
	}
	else
	{
                audioquake.pause()
		document.getElementById("quakeStyle").parentNode.removeChild(document.getElementById("quakeStyle"));
		//$("#videowrap").appendTo("#main");
		quake = undefined;
	}
});

/* Sanic */
var sanic = undefined;

var sanicBtn = document.createElement("button");
sanicBtn.id = "rainbowBtn";
sanicBtn.className = " btn btn-sm btn-default"
sanicBtn.innerHTML = "Sanic Mode";
var audioSanic = new Audio('https://nifnat.com/Public/public2/sanichegehog.mp3');
audioSanic.volume = 0.04

document.getElementById("leftcontrols").appendChild(sanicBtn);
document.getElementById("rainbowBtn").title = "CPU Intensive, toggle off if this is a problem.";

sanicBtn.addEventListener("click", function() 
{
	if (typeof sanic == "undefined")
	{
        audioSanic.play();
		var minusOrNothing = " ";
		var spinSpeed = 1;
		var itEitherHappensOrItDoesnt = Math.random() < 0.5;
		if (itEitherHappensOrItDoesnt)
		{
			spinSpeed = Math.random() * (10 - 1)
		}
		else
		{
			spinSpeed = Math.random() * (1 - 0.00001)
		}
		
		sanic = 'div { z-index: 9999; animation:bounce ' + Math.random() * (15 - 1) + 's linear infinite; } @keyframes bounce{ 0%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 25%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 50%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 75%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } 100%{ transform:translate(' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px,' + minusOrNothing + ' ' + Math.random() * (200 - 0) + 'px); } } body { -webkit-animation: rotation ' + spinSpeed + 's infinite linear;} @-webkit-keyframes rotation { from { -webkit-transform: rotate(0deg); } to { -webkit-transform: rotate(359deg); } } #userlisttoggle, #modflair, #usercount, #userlist, .username, .timestamp{ background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff); -webkit-background-clip: text; background-clip: text; color: transparent !important; animation: rainbow_animation 18s ease-in-out infinite; background-size: 400% 400%; } .qe_title{ color: transparent; } .glyphicon-plus, .glyphicon-minus{ position: initial; } .queue_entry, #videowrap-header { background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff); -webkit-background-clip: text; background-clip: text; color: transparent; animation: rainbow_animation 6s ease-in-out infinite; background-size: 400% 100%; } .queue_active{ -webkit-background-clip: inherit; color: white !important; background-color: #70787d !important;  background-image: -webkit-linear-gradient(#8a9196, #7a8288 60%, #70787d) !important; background-image: linear-gradient(#8a9196, #7a8288, #70787d) !important; background-repeat: no-repeat !important; } .queue_active > .qe_title{ color: white !important; } @keyframes rainbow_animation { 0%,100% { background-position: 0 0; } 50% { background-position: 100% 0; }', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.id = 'sanicStyle'; style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.sanicText = sanic; } else { style.appendChild(document.createTextNode(sanic)); } head.appendChild(style);
	}
	else
	{
                audioSanic.pause()
		document.getElementById("sanicStyle").parentNode.removeChild(document.getElementById("sanicStyle"));
		sanic = undefined;
	}
});


/* Cursor */
//$("html").css( 'cursor', 'url(http://www.rw-designer.com/cursor-view/5752.png) 9 9, auto' );
//$("#chatwrap").css( 'cursor', 'url(http://www.rw-designer.com/cursor-view/5758.png) 9 9, auto' );
//$("#queue li").css( 'cursor', 'url(http://www.rw-designer.com/cursor-view/5759.png) 9 9, auto' );