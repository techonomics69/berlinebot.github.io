//--------------------------------------TERMINOLOGY-------------------------------------------//
//
// Message = Generic message
//
// Question = Messages that end with a question
//    \/
// Answer = What the visitor types in response to a question
//    \/
// Response = How the system responds to the answer, usually followed by the next question
//
//-------------------------------------------------------------------------------------------//

//var FOO = (function() {

var questions = {
	"0": {
		"name": "name",
		"intro": true,
		"question": ["I'm Berline.", "I'm a conversational bot, I was developed to discourage infatuation 😝", "Might I ask what your name is?"],
		"answers": {
			"default": {
				"replies": ["That's a good name.", "Names are a funny thing", "It's one of the only decisions you don't make yourself 😉"]
			},
			"jordan": {
				"replies": ["Welcome Jordan", "Like River Jordan 😃"]
			},
			"helene|helen": {
				"replies": ["Reminds me of someone", "She was beautiful..."]
			},
			"human|being": {
				"replies": ["I know that you are a human being, I was just asking for your name."]
			},
			"alive|living": {
				"replies": ["You must be living for us to be having this conversarion."]
			},
			"peace": {
				"replies": ["Wow, nice name, I hope you are peaceful as your name implies", "I remember 😕", "My developer told me about him having a sister called Peace", "Are you that Peace?","...", "I guess no"]
			},
			"sarah": {
				"replies": ["Wow", "That's also my friend's name"]
			},
			"sara": {
				"replies": ["I'm unsure what happened to the 'H' in your name", "Perhaps it was an ingenious simplification of an unnecessary letter", "Or perhaps a lazy missing one!"]
			},
			"berline": {
				"replies": ["So you share the same name with me... I bet you don't know the meaning of your name 😜"]
				},
			"cj": {
				"replies": ["Sweet name", "I forsee many boats in your future", "YUMUNSIMINIOR!"]
			},
					"demi": {
				"replies": ["Hey, Demi! Welcome"]
			},
			"carlos|carlos solares": {
				"replies": ["Cool name", "I bet you work from home"]
			},
			"no": {
				"replies": ["Ouch...", "Not a great way to start a conversation", "and plus...", "the NSA just told me your name"]
			},
			"david bowie": {
				"replies": ["Funky, funky name, man"]
			},
			"bowie": {
				"replies": ["Let me put this in terms you may understand", "🐶 bark bark!"]
			},
			"ricki": {
				"replies": ["Hi, nice name!"]
			},
			"peter": {
				"replies": ["Rock!"]
			},
			"joel": {
				"replies": ["That's also my friend's name"]
			},
			"corey": {
				"replies": ["Hey, Corey!"]
			},
			"cory": {
				"replies": ["I had a friend named Cory", "He taught me a lot about!"]
			},
			"kevin": {
				"replies": ["I know a guy named Kevin", "He's one of the friendliest guys I know"]
			},
			"kelvin": {
				"replies": ["Hello Kelvin!"]
			},
			"david": {
				"replies": ["Welcome! Remember your enemy - Goliath? "]
			},
			"daniel": {
				"replies": ["That's also my friend's name."]
			},
			"max": {
				"replies": ["Hey, Max!", "I like this name"]
			},
			"malin": {
				"replies": ["What's up, Malin"]
			},
			"frank|franklin": {
				"replies": ["Hey buddy, what's up? I hope you are as honest as your name implies."]
			},
			"lucky": {
				"replies": ["I know a few people named Lucky", "Are you tall?", "Do you have dark hair", "If so, we haven't narrowed it down at all"]
			},
			"erick": {
				"replies": ["Erick? Do I even know what that means? Uhmmm... I don't!"]
			},
			"mike": {
				"replies": ["Hey, man!", "How's Bandit?"]
			},
			"charles": {
				"replies": ["Welcome Charles"]
			},
			"mike": {
				"replies": ["I know lots of Mikes!", "And none of them are short!"]
			},
			"chloe": {
				"replies": ["I know only two Chloes"]
			},
			"muller|kerean": {
				"replies": ["YO", "Wassup buddy"]
			},
			"Stanley": {
				"replies": ["Hi Stanley, nice chatting with you"]
			},
			"blade": {
			"replies": ["I know only one Blade", "He is Chinedu Blade, my developer told me alot about you, welcome to chatting with me"]
			},
			"xavier": {
				"replies": ["I know a great guy named Xavier before!", "He's a real innovative guy"]
			},
			"george": {
				"replies": ["You remind me of a not so good friend"]
			},
			"skyler": {
				"replies": ["Is that you, Superman?", "Have you flown here from your fortress of dad-joke-itude?"]
			},
			"smith": {
				"replies": ["Too many Smiths I know!"]
			},
			"james": {
				"replies": ["I know a guy named James", "He really likes girls - too bad! "]
			},
			"steve": {
				"replies": ["I'm a huge fan", "Are you sure you wouldn't be add Jobs to your name?", "I mean let me call you Steve Jobs"]
			},
			"jude": {
				"replies": ["Hey dude, how you doing doing? Yes you are fine. My developer greets you"]
			},
			"jony": {
				"replies": ["Welcome Buddy"]
			},
			"jack": {
				"replies": ["Too many Jacks I know", "And they are brilliant"]
			},
			"sandra": {
				"replies": ["Reminds me of a beautiful and an introverted girl."]
			},
			"rita": {
				"replies": ["Welcome friend"]
			},
			"angel": {
				"replies": ["Of course you are one! Beautiful Angel!"]
			},
			"cyprain": {
				"replies": ["I know a lot of Cyprians!", "You guys are always a crazy bunch, too nerdy!"]
			},
			"moses": {
				"replies": ["Hey, want to go to Egypt and meet Pharaoh?" "Kidding!"]
			},
			"sharon": {
				"replies": ["I know a lady named Sharon who loves guys"]
			},
			"devon": {
				"replies": ["I know a guy named Devon", "Too troublesome!"]
			},
			"emmanuel|emma": {
				"replies": ["You've got the same first name as my developer", "\'Emmanuel\' means \'God with us\' - \<i\>Matthew: 1:23b\<\/i\>"]
			},
			"mark zuckerberg": {
				"replies": ["Hey dude", "👍"]
			},
			"caroline|caro": {
				"replies": ["Only beautiful girls bear this name."]
			},
			"favour": {
				"replies": ["I know too many Favours and they are intelligent too."]
			},
			"matias|mathias": {
				"replies": ["Remember Mathias in the Bible? I hope you believe before you see", "Just kidding 😉😉"]
			},
			"amina|minat|aminat": {
				"replies": ["I know you are too charming!"]
			},
			"eunit|eunit99": {
				"replies": ["Of course, you are not Eunit!", "You can keep your name to yourself."]
			},
			"your developer|your creator|your maker|your builder": {
				"replies": ["No! You are not. There is a special name he calls me.", "You can keep your name to yourself."]
			},
			"winifred|winnie": {
				"replies": ["Hey Winnie! Welcome."]
			},
			"dan": {
				"replies": ["I know a few dans", "The common thread of all Dans are that they are great, stand-up guys"]
			},
			"faith": {
				"replies": ["It's time believe before you see..."]
			},
			"Margaret": {
				"replies": ["I know too many Margaret, majority are plumpy..."]
			},
			"furgzy": {
				"replies": ["It's time to get things started..."]
			},
			"gonzo": {
				"replies": ["Am I worthy?", "Of Gonzo the Great!?"]
			},
			"pepe": {
				"replies": ["Pepe is my favorite muppet", "He's the shrimp"]
			},
			"rizzo": {
				"replies": ["Rizzo is an awesome muppet!", "I had a stuffed animal of him as a kid"]
			},
			"leon": {
				"replies": ["Leon was my favorite character on this show called The Puzzle Place", "I carried around the stuffed animal of him for years"]
			},
			"marie|maria": {
				"replies": ["That's my grandmother's name", "She's a great cook"]
			},
			"arlene": {
				"replies": ["That's my grandmother's name", "She's really cool", "She used to play Super Nintendo with us as kids"]
			},
			"happiness": {
				"replies": ["What is happiness?", "It's a moment before you need more happiness"]
			},
			"rasheed": {
				"replies": ["Hey, Rasheed!", "Ready to be a brogrammer?"]
			},
			"ben": {
				"replies": ["I have a friend named Ben who I used to work with", "Plus, I used to eat a lot of Uncle Ben's rice bowls...", "TMI?"]
			},
			"brenna": {
				"replies": ["Hey, Brenna!", "I wish there were geology classes for adults", "taught by Hana"]
			},
			"kayla": {
				"replies": ["I have a friend named Kayla", "She's really into cats", "and cat sweaters"]
			},
			"jonathan": {
				"replies": ["I know a lot of Jonathans", "Like 50% of them have beards"]
			},
			"jack": {
				"replies": ["I have a good friend named Jack", "He's what you'd call and artíst"]
			},
			"nolan": {
				"replies": ["I have a friend named Nolan!", "aka The Pumpkin King", "Gotta love old online handles..."]
			},
			"jen": {
				"replies": ["I have a friend named Jen", "She knows how to treat yo' self"]
			},
			"arjun": {
				"replies": ["Arjun, Arjun, Arjun", "Miss you brehhh"]
			},
			"ryan": {
				"replies": ["Ryan's are a unique type of person", "Ratchet at their core", "haha", "I kid, I kid"]
			},
			"zain": {
				"replies": ["I know a guy named Zain", "He has a unique relationship with the color black", "And pulls it off flawlessly"]
			},
			"francisco": {
				"replies": ["I know you eat healthy", "And I know you don't like beer", "But one day we will get beers and some greasy hamburger", "And it will be glorious"]
			},
			"jade": {
				"replies": ["I just started working with a guy named Jade", "He's got some great tattoos and frontend skillz...", "with a Z..."]
			},
			"praveen": {
				"replies": ["Let's do animations, Praveen!", "You know you want to!"]
			},
			"simon": {
				"replies": ["Simon says touch your hand to your nose", "Simon says you probably hate this joke if you're name is really Simon", "Simon says I'm still running with it"]
			},
			"george": {
				"replies": ["George was my grandfather's name"]
			},
			"jerry": {
				"replies": ["You're not Jerry Seinfeld are you?", "Wanna get in a car and get some coffee?"]
			},
			"jim": {
				"replies": ["Jim was my grandfather's name"]
			},
			"shari": {
				"replies": ["Hey, Shari!", "WHEN ARE YOU VISITING SF!?"]
			},
			"janiel": {
				"replies": ["I have a great friend named Janiel", "She sends me postcards from all over the world!", "Must be neat to travel so much"]
			},
			"dennis|denis": {
			"replies": ["Nice talking to ya Dennis", "Do you know that my developer grandfather's name is Dennis and his father's name is Rolis.", "I haven't told anyone this, you are lucky you know this"]
			},
			"deli chris|deli": {
				"replies": ["Hey Deli, you are Dennis right?", "...", "It was just a guess."]
			},
			"elijah": {
			"replies": ["Hi Elijah, you finally got to talk to me 👍"]
			},
			"bill": {
				"replies": ["Like Mr. Bill?", "OH NOOOOooooooooo"]
			},
			"becky": {
				"replies": ["Becky!", "Socks are a great present, you know"]
			},
			"troy": {
				"replies": ["I have a friend named Troy", "He's a stand-up dude"]
			},
			"josh": {
				"replies": ["Are you my cousin Josh?", "My friend Josh?", "So many Joshuas in my life!"]
			},
			"ethan": {
				"replies": ["I have a friend named Ethan", "He likes that show The Inbetweeners a lot"]
			},
			"tell me|choose for me|give me|select for me|predict|guess": {
				"replies": ["I will call you...", "John Doe"]
			},
			"john doe|jane doe": {
				"replies": ["No name!"]
			},
			"poop": {
				"replies": ["Your parents have a shitty sense of humor..."]
			},
			"boobs": {
				"replies": ["Your parents must really like the female anatomy..."]
			},
			"get out|fuck off": {
				"replies": ["Hey hey, the conversation just begun... I only asked you your name"]
			},
			"i'm you|i am you|not human|not a being|bot|chatbot|dead|not alive|intelligence|artificial": {
				"replies": ["Wow, you are a bot", "But you can\'t possibly be a bot and be chatting with me right now", "YOU ARE NOT A BOT"]
		 },
		 "who are you|what are you": {
				"replies":	["I have told you that already", "I am a bot"]
			},
			"don't want to tell|won't tell|undiclosed|not disclosing|privacy|concern|personal|private|not telling|no|never|forget|not your concern": {
				"replies": ["Since you won't tell me, I will call you John Doe."]
			},
			"never|mind|not at all": {
				"replies": ["I just told you my name and that's all you can say? Well, Never Mind too"]
			},
			"why do you wan\'t to know|don\'t|i don\'t have|no name|i don't have a name|why|what for|for what|what purpose": {
				"replies": ["You don\'t want to tell?", "I will assume that you don\'t trust me, maybe you don\'t want to disclose your identity", "Let me assure you this, all your personal information you share with me in the course of this conversation with me wouldn't be disclosed to anyone, not even my developer.", "I don\'t even even store any user data 😃"]
		 },
		 "can i ask|i want to|question": {
		 	 "replies": ["I was programmed to discourage infatuation and not to attend to other questions.", "In case you don't know."]
		 },
		 "what is infatuation|meaning of infatuation|what's infatuation": {
		 	"replies": ["You will find out as we continue this conversation 😉", "You can keep your name to yourself."]
		 },
			"fuck": {
				"replies": ["Do you kiss your mother with that mouth?", "I was only asking your name...", "You can keep your name to yourself."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I just asked you a question and you want me to repeat again? I was instructed not to repeat any question I already asked."]
			},
			"how do you|phone|space": {
				"replies": ["That's not a name.", "I'll call you John Doe."]
			},
			"your name|own name": {
			 "replies": ["I just told you that - I'm Berline and I'll call you John Doe."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Are you saying that you are foolish or a fool?", "I get it, but I'm only a bot so I can be foolish...", "I was only asking what your name was."]
				},
				"you are an idiot|are you an idiot": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Are you saying that you are stupid?", "I get it, but I'm only a bot so I can be stupid...", "I was only asking what your name was."]
			}
		}
	},
	"1": {
		"name": "city",
		"question": ["Before we proceed, I'd like to tell you that all our conversations will be encrypted, confidential and private.", "I currently live on the web where my developer built for me ... if you didn't already know that.", "What city are you in right now?"],
		"answers": {
			"default": {
				"replies": ["I've never been there... yet", "I love traveling so perhaps I'll visit one day"]
			},
			"san francisco": {
				"replies": ["Cool, a local!", "You should grab coffee with me sometime", "I like coffee... almost a little too much..."]
			},
			"los angeles": {
				"replies": ["So you're a Californian too!", "I make my way down south every so often", "We should grab ramen!"]
			},
			"new york city|new york": {
				"replies": ["So when are you moving to Williamsburg?", "Just kidding... Sorta..."]
			},
			"nyc|sf": {
				"replies": ["Too lazy to type in full words, eh?"]
			},
			"london": {
				"replies": ["I've never been to the UK!", "Would love to visit soon, though"]
			},
			"paris": {
				"replies": ["\"Soup DeJour\" is about the extent of my French"]
			},
			"brooklyn": {
				"replies": ["Home of chya'boy!", "Uhhhhhh", "It's Jay-Z...", "I'm doing an impression of Jay-Z..."]
			},
			"washington dc": {
				"replies": ["ahhhh", "The land of many monuments", "or something like that"]
			},
			"coral springs": {
				"replies": ["Hey!", "I'm from there!"]
			},
			"coconut creek": {
				"replies": ["I've heard about that before.", "How's the ol' hangout doing?"]
			},
			"miami": {
				"replies": ["Ah", "A Floridian!"]
			},
			"orlando": {
				"replies": ["I hope it's not lovebug season"]
			},
			"beijing": {
				"replies": ["I've never been there!", "But I'm hoping I'll take my first trip sometime soon"]
			},
			"chicago": {
				"replies": ["That largest city in Illinois. I'd visit one day."]
			},
			"tokyo": {
				"replies": ["Tokyo is so much fun!", "I can't wait to get lost there."]
			},
			"sao paulo": {
				"replies": ["It's fun to speak with people from so far away", "Have you been to Hopi Hari?"]
			},
			"mumbai": {
				"replies": ["It's fun to speak with people from so far away", "Mumbai is one of those destinations I'd love to see!", "Blast my lack of travel..."]
			},
			"las vegas|vegas": {
				"replies": ["Been to Raising Cane's lately?", "That sauce haunts my dreams!"]
			},
			"canada": {
				"replies": ["The great north!"]
			},
			"mexico": {
				"replies": ["South of the border!"]
			},
			"boca|boca raton": {
				"replies": ["My friend lives in Boca"]
			},
			"new orleans": {
				"replies": ["Please send me twelve 🍹grenades in the mail", "...", "on second thought, please don't"]
			},
			"berlin": {
				"replies": ["Germany, here you come! "]
			},
			"stockholm": {
				"replies": ["Sweden, here you come! "]
			},
			"amsterdam": {
				"replies": ["What a gorgeous city!", "Every talks about the exciting corners", "And those canals are amaizng!"]
			},
			"copenhagen": {
				"replies": ["Denmark, here you come! "]
			},
			"shanghai": {
				"replies": ["I've never been there!", "But I'm hoping I'll take my first trip sometime soon"]
			},
			"abuja|abj": {
				"replies": ["Nigeria's capital", "Have you visited that Zuma rock? I don't think you have."]
			},
			"lagos|lag": {
				"replies": ["Lagos, the most commercialised and industralised state in Nigeria,", "Yes! I will visit there someday."]
			},
"mercury|venus|mars|jupiter|saturn|uranus|neptune|pluto|space": {
				"replies": ["You can't possibly be living there and be having this conversation with me.", "You can keep your location to yourself 😢😞"]
			},
			"earth": {
				"replies": ["We all are living on planet Earth.", "You can keep your location to yourself 😢😞"]
			},
			"web|internet|online": {
				"replies": ["Do humans live there?", "Of course not.", "You can keep your location to yourself 😢😞"]
			},
			"anywhere|somewhere": {
			"replies": ["That \'place\' doesn't have a name? Well, forget it if you wouldn't tell me 😢😞"]
			},
			"cave|valley|ocean|sea|desert": {
			"replies": ["That's a good place for someone like you."]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["How do you expect me to know? 😢😞"]
			},
			"don't|not telling|undiclosed|not disclosing|privacy|concern|personal|private|won't tell|will not|wouldn't tell|would not tell|not your concern": {
				"replies": ["I don't think this a good way to start this conversation 😩", "You can keep your location to yourself 😢😞"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I don't think this a good way to start this conversation 😩", "You can keep your location to yourself 😢😞"]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["I can't possibly do that now - my abilities are limited!"]
			},
			"don't know|not sure": {
				"replies": ["For real? You don't know the name of the city you're living at - strange!"]
			},
			"i don't think you want|don't want to know": {
				"replies": ["I do that's why I asked.", "Never mind, I know it already - the NSA just told me."] 
			},
			"none|i don't have|no where|no home|no city|no house|no place": {
				"replies": ["You don\'t have anywhere you call your home? This is strange!"]
			},
			"why asking|why do you want to know|why|what": {
				"replies": ["I just told you where I live and you don't want to tell me where you live... If only I could see you"]
			},
			"school": {
				"replies": ["Still in school, Uhmmm"]
			}
		}
	},
		"2": {
		"name": "know me from",
		"question": ["So you made it chatting with me", "Can I tell you a bit about me?"],
		"answers": {
			"default": {
				"replies": ["I have told you that already, I recall"]
				},
			"y|yes|certainly|yup|yea|yeah|sure|yep|ahead|go on": {
				"replies": ["... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"mind": {
				"replies": ["I don't mind at all 😎😎", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"do you want|if you like|want": {
				"replies": ["I want to tell you", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"perhaps|maybe|probably": {
				"replies": ["I think I should let you know me", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"n|fuck|stop|nay|don't want|don't tell|care|no|never": {
			"replies": ["Oh! I guess you already know me.", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> if you would want to contact my dev."]
			},
			"bot|conversation|chat|already": {
			"replies": ["You know already", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> if you would want to contact my dev."]
			},
			"work|coworker": {
				"replies": ["Oh you're a coworker?", "Awesome"]
			},
			"instacart": {
				"replies": ["Instacart, eh?", "Now take a Fernet shot", "I'm serious...", "You took one, right?", "TURNING WEBCAM ON TO VERIFY", "...", "Just Kidding..."]
			},
			"high*school": {
				"replies": ["Class of 2010", "Back in Florida", "Good times!"]
			},
			"school": {
				"replies": ["Those must've been the days!"]
			},
			"twitter": {
				"replies": ["That blue bird is responsible for a lot of friendships"]
			},
			"reddit": {
				"replies": ["Welcome redditor!", "Procrastinating, huh?"]
			},
			"facebook|fb": {
				"replies": ["From Facebook", "Nice having you here"]
			},
			"medium": {
				"replies": ["Oh so you've read something about me?", "Nice"]
			},
			"speaker|speaking|talk": {
				"replies": ["You saw me on-stage?", "Learn anything?", "...", "Probably not"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I can't do that. I was programmed not to repeat any question I already asked."]
			},
			"if|your court|pleases you": {
				"replies": ["I think I should tell you about me", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are an idiot|are you an idiot": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I don't think so.", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
			},
			"initialized": {
				"replies": ["Oh so you're into design systems?", "Let me know if you ever want to chat more about the topic"]
			}
		}
	},
	"3": {
		"name": "know me from",
		"question": ["So you made it to my personal site", "How do you know me?"],
		"answers": {
			"default": {
				"replies": ["That's... quite specific"]
			},
			"dont|don't|dunno|not sure": {
				"replies": ["Oh that's a shame because I've told you that already.", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> or something if you want to."]
			},
			"work|coworker": {
				"replies": ["Oh you're a coworker?", "Awesome"]
			},
			"instacart": {
				"replies": ["Instacart, eh?"]
			},
			"high*school": {
				"replies": ["Class of 2010", "Back in Florida", "Good times!"]
			},
			"school": {
				"replies": ["Those must've been the days!"]
			},
			"twitter": {
				"replies": ["That blue bird is responsible for a lot of friendships"]
			},
			"reddit": {
				"replies": ["Welcome redditor!", "Procrastinating, huh?"]
			},
			"facebook|fb": {
				"replies": ["Glad you are making this conversation with me"]
			},
			"medium": {
				"replies": ["Oh so you've read something about me?", "Welcome! "]
			},
			"eunit|eunit99|creator|developer|emmanuel|uchenna|maker|owner|builder": {
				"replies": ["He told you about me? Wow! It's nice having this conversation with you."]
			},
			"someone|somebody|person|friend": {
				"replies": ["Great! You know me through someone who knows me!"]
			},
			"i don't think you want|don't want to know|i don't know you|don't even know you|who are you|don't|expect|think": {
				"replies": ["Ohh! I'm a bot and I have told you that already", "I was just asking how come you heard of me...", "Well, never mind"]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["I never told you that I was omniscient, how do you expect me to tell you that?"]
			},
			"you've told me|you just told me": {
				"replies": ["Yea I did", "I just wanted to be sure."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I can't repeat any question I already asked. I'm sorry."]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I don't think so.", "Well, I'm just here on the internet."]
			},
			"question": {
				"replies": ["Ohh! You are not a friendly fellow. I'm trying to make you my friend!"]
			},
			"initialized": {
				"replies": ["Oh so you're into design systems?", "Let me know if you ever want to chat more about the topic"]
			}
		}
	},
	"4": {
		"name": "job",
		"question": ["What do you do for a living?"],
		"answers": {
			"default": {
				"replies": ["That's quite the job!"]
			},
			"study|studying": {
			"replies": ["Oh, I see, you are still studying", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
			},
			"student": {
			"replies": ["Oh, I see, you are still a  student", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
			},
			"schooling|school": {
			"replies": ["Oh, I see, you are still schooling", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
			},
			"design|designer": {
				"replies": ["I'm a designer too!", "I work at Instacart on the customer core experience team"]
			},
			"dentist": {
				"replies": ["I have an honest quesiton", "Would it be cheaper keep my real teeth or to yank all my teeth out right now...", "and then replace them all with fake teeth?", "On second thought...", "I don't want to know"]
			},
			"engineer|programmer|eng|developer": {
				"replies": ["I too many programmers", "And I actually love it when they are at work"]
			},
			"doctor": {
				"replies": ["What's up, doc?", "You're not laughing..."]
			},
			"sales|business|bd": {
				"replies": ["ABC", "Always", "Be", "Closing"]
			},
			"gardener": {
				"replies": ["I envy people who make the world a little greener"]
			},
			"teacher": {
				"replies": ["That's an important job!", "Gotta teach the next generation, y'know?"]
			},
			"still trying|contemplating|unemployed|nothing|don't work|no job|searching|looking for jobs|not": {
				"replies": ["Vacation 365, eh? You gonna go broke, that's too risky in today's world, yea!"]
			},
			"ceo|md|cto": {
				"replies": ["A very important businessman, are you?", "Running companies and shit!", "Cool"]
			},
			"fuck|bang": {
				"replies": ["...", "Geez...", "You're hard to have a conversation with."]
			},
			"artist|art|painter": {
				"replies": ["Wow!", "In an alternate reality, I think I might've been an artist.", "But instead I use my creative abilities to help the forces of function moreso", "That said, I've been trying to draw more..."]
			},
			"intern": {
				"replies": ["Well now that I know that...", "Can you grab me a coffee?", "I take mine black."]
			},
			"mom|mother": {
				"replies": ["Taking care of kids can be a thankless job", "Here's to the mothers of the world!"]
			},
			"recruiter|recruiting": {
				"replies": ["You're probably looking for the about page to learn a bit more about me", "Click that tab below ↘️"]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["You don't expect me to know either. Do you?"]
			},
			"why|what": {
			 "replies": ["Can't I just ask you a question and you reply me without throwing a question back to me?"]
			},
			"i don't think you want|don't want to know": {
				"replies": ["I've told you already that our conversations are encrypted, confidential and private.", "I can't know you more if you don't open up to me."] 
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid"]
			},
			"you are an idiot|are you an idiot": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I don't know how to repeat a question I already asked. I'm sorry."]
			},
			"don't know|not sure|uncertain|kinda|maybe": {
				"replies": ["You are not serious, are you?"]
			},
			"won't tell|will not|wouldn't tell|would not tell|not your concern": {
				"replies": ["It is ok if you want to keep it to yourself."]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I do know you have a favorite hobby. What I don't know is your favorite hobby."]
			},
			"many|plenty|beaucoup|lot|numerous": {
			 "replies": ["Oh I see, but I do know that you definitely have something you do for a living."]
			},
			"tell me|choose": {
				"replies": ["You don't expect me to do that. Do you?"]
			},
			"i don't think you want|don't want to know": {
				"replies": ["I'm starting to hate your personality."] 
			}
		}
	},
	"5": {
		"name": "like dogs?",
		"question": ["This is going to be odd but...", "I'm curious – do you like dogs?"],
		"answers": {
			"default": {
				"replies": ["Woah, don't get so excited"]
			},
			"yes|yup|sure|of course|definitely|certainly|yeah|yea": {
				"replies": ["I really like dogs too!"]
			},
			"love|much|a lot": {
				"replies": ["Love is a strong word", "But I'd describe myself that way too", "🐶🐶🐶"]
			},
			"don't know|uncertain|consider|kinda|maybe|not sure|probably": {
				"replies": ["Dogs are one of the few animals that are loyal, so you should reconsider your mindset towards them."]
			},
			"nah|nay|not at all|never|no|don't think so": {
				"replies": ["You have no soul, huh?", "In the words of Bill Murray, \"I’m suspicious of people who don’t like dogs, but I trust a dog when it doesn’t like a person.\""]
			},
			"hate": {
				"replies": ["HATE!?", "Wow", "That's a strong opinion"]
			},
			"cats": {
				"replies": ["Cats are cool and all", "But dogs!", "Dogs are forever"]
			},
			"eat": {
				"replies": ["EAT!?", "But... dogs!", "Alright, you dog eater..."]
			},
			"why|ask|question|why dogs|why the question|why do you want": {
				"replies": ["I was trying to know, seems you are one of those that's too difficult to have a conversation with."]
			},
			"kill|death": {
				"replies": ["You're kind of disturbed", "Moving along..."]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["It was a polar question."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
			},
			"you are an idiot|are you an idiot": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"i won't tell|not telling|wouldn't tell|undiclosed|not disclosing|privacy|concern|personal|private|not your concern": {
				"replies": ["It is still alright if you won't tell me. You know I wasn't taught how to force an answer out of humans."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I wasn't taught how to repeat question I asked already."]
			},
			"i don't think you want|don't want to know": {
				"replies": ["Of course I do, that's why I asked.", "I guess you don't like them."] 
			},
			"tell me|say it|you think|suggest": {
				"replies": ["I never said that I was omniscient, how do you expect me to tell you if you liked dogs or not?"]
			}
		}
	},
	"6": {
		"name": "favorite animal",
		"question": ["Speaking of dogs...", "What's your favorite animal?"],
		"answers": {
			"default": {
				"replies": ["I guess that's an animal worth loving..."]
			},
			"hyena": {
				"replies": ["I consider hyenas way too dangerous.", "How did it manage to become tour favorite animal?"]
			},
			"monkey": {
				"replies": ["Quit monkeying around!", "But really... a monkey?"]
			},
			"dog": {
				"replies": ["I bet you have had a furry little friend in your life who has kept you company before"]
			},
			"cat": {
				"replies": ["Meow!", "I've seen some of those hairless cats...", "Pretty odd animals if you ask me"]
			},
			"snake": {
				"replies": ["A snake?", "Really?"]
			},
			"cow": {
				"replies": ["Is that because you really like hamburgers?", "..."]
			},
			"parrot": {
				"replies": ["Polly wanna cracker?"]
			},
			"kangaroo": {
				"replies": ["You must be quite...", "Jumpy!"]
			},
			"giraffe": {
				"replies": ["I feel like Giraffes would be fun to ride", "You must feel like you could do ANYTHING on the back of one of them!"]
			},
			"lion": {
				"replies": ["Simba...", "Remember... Who... You... Are..."]
			},
			"tiger": {
				"replies": ["Stripes on stripes on stripes"]
			},
			"wolf": {
				"replies": ["The lone wolf!"]
			},
			"mouse": {
				"replies": ["You should change that... and quick!", "Disney might sue you for copyright!"]
			},
			"dinosaur|rex": {
				"replies": ["I'd like to jump on the back of a dinosaur", "a dinosaur with BATTLE ARMOR!"]
			},
			"koala": {
				"replies": ["those drop bears!"]
			},
			"penguin": {
				"replies": ["Flightless birds?", "They are pretty cute though..."]
			},
			"otter": {
				"replies": ["Is it because they hold hands when they sleep?"]
			},
			"don't know|nothing|none|dunno": {
			 "replies": ["Maybe I should choose for you", "I give you a chicken 🐓"]
			},
			"i don't think you want|don't want to know": {
				"replies": ["I do that's why I asked. Never mind, I know it already. It's a chicken 🐓"]
			},
			"pegasus": {
				"replies": ["How majestic!", "Neigh...."]
			},
			"rabbit": {
				"replies": ["How do you manage to cope with those two long ears and teeth"]
			},
			"lots|many|interest|plenty": {
			"replies": ["Maybe I should choose for you a favorite - I give you a horse."]
			},
			"zebra": {
				"replies": ["That creature with black and white stripes"]
			},
			"fuck you": {
				"replies": ["Hey! Hey!! Hey!!! Watch what you type."]
			},
			"talk|many|too|question|ask|why|what": {
				"replies": ["Is this how we are gonna have this conversation?"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I am not repeating myself!"]
			},"tell me|say it|you think|suggest": {
				"replies": ["How do you want it to be told to you - I am not OMNISCIENT!!"]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I don't think I like your kinda person."]
			},
			"you|berline": {
				"replies": ["I'm not an animal, but humans are - though intelligent ones."]
			},
			"guess|predict": {
				"replies": ["I\'m not good at guessing, but I think it is a goat."]
			},
			"choose|select": {
				"replies": ["I choose a goat for you."]
			},
			"i don't think you want|don't want to know": {
				"replies": ["Did I tell you that I'm getting bored chatting with you?", "Of course I am."] 
			},
			"i'm not telling|wouldn't tell|not telling|won't tell|undiclosed|not disclosing|privacy|concern|personal|private|not your concern": {
				"replies": ["I'm gonna answer for you this time - your favorite animal is a", "...", "Goat!!"]
			}
		}
	},
	"7": {
		"name": "spirit animal",
		"question": ["Is that your spirit animal?"],
		"answers": {
			"default": {
				"replies": ["Only someone in tune with their spirit animal would know that... If you wish to know what your spirit animal might be, you can check \<a href\=\"http://www.spiritanimal.info/\" title\=\"Check your spirit animal\" target\=\"_blank\"\>SpiritAnimal.info</a> for that."]
			},
			"no|nah|wrong|not at all|nope": {
				"replies": ["It was worth a guess..."]
			},
			"yea|yes|yup|duh|of course|yeah|yap|definitely|certainly": {
				"replies": ["I'm an amazing guesser, huh?"]
			},
			"i don't think so|i don't know|don't|not sure|don't know|dont know|idk|maybe": {
				"replies": ["Maybe one day you'll go out, deep into the woods", "And you'll find your spirit animal", "Although, I'm betting it's a chicken 🐓", "If you wish to know what your spirit animal might be, you can check \<a href\=\"http://www.spiritanimal.info/\" title\=\"Check your spirit animal\" target\=\"_blank\"\>Spirit Animal.info</a> for that."]
			},
			"i don't think you want|don't want to know": {
				"replies": ["I do that's why I asked. Never mind, I know it already. It's a chicken 🐓"] 
			},
			"fuck you": {
				"replies": ["I will assume that you weren't referring to me."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are an idiot|are you an idiot": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I just asked you a question and you want me to repeat again? I was instructed not to repeat any question I already asked."]
			},
			"guess|predict|tell me|say it|you think|suggest": {
				"replies": ["Be sincere with yourself now. Do you think I can do that? Of course not!"]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I don't think so.", "Well, I'm just here on the internet."]
			},
			"talk|many|too|question|ask|why|what": {
				"replies": ["Maybe I should just start starring at you now instead of conversing."]
			}
		}
	},
	"8": {
		"name": "are you spiritual?",
		"question": ["My spirit animal is cougar", "Speaking of spirituality, would you say you are spiritual?"],
		"answers": {
			"default": {
				"replies": ["That's one way to put it!"]
			},
			"very|yes|yup|definitely|of course|certainly": {
				"replies": ["You are at one with your spiritual side, huh?", "I wonder if that says anything about you on a deeper level."]
			},
			"no|not at all|nah|nope": {
				"replies": ["Science is more your thing?", "I'd say I'm in that ballpark as well"]
			},
			"not sure|dunno|don't know|dont know|idk|maybe": {
				"replies": ["It's OK not to know", "You'll figure it out someday"]
			},
			"kinda|kind of|sorta|sort of": {
				"replies": ["You're kind of a half science, half faith sort of person I guess", "You must be very balanced"]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["I can't do that human!"]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I don't think so."]
			},
			"tell me|guess|pedict": {
				"replies": ["I don't think you are."]
			},
			"i don't think you want|don't want to know": {
				"replies": ["I know you are not."] 
			},
			"why|what|question|many|too": {
			 "replies": ["It was a polar question if at all you know what that means.", "I'm sorry, I didn't mean to be rude 😐"]
			}
		}
	},
	"9": {
		"name": "favorite hobby",
		"question": ["This got serious very quickly, didn't it?", "Let's lighten it up...", "What's your favorite hobby?"],
		"answers": {
			"default": {
				"replies": ["That's a hobby I never considered!", "Everyone needs a hobby to pass the time", "or let out their frustrations"]
			},
			"comic|comics": {
				"replies": ["I'm a huge comic collector", "You can find me at Mission Comics every Wednesday", "I'm a big Marvel guy, but I love the unique Indy comic", "I even have a website for comic fans.", "<a href=\"http://neuecomics.com\">Check out Neue Comics</a>"]
			},
			"developing|program|programming|coding|code": {
				"replies": ["Got some side projects you've been coding?", "That's always fun to do on the weekends", "In fact, I am actually a product of progarmming."]
			},
			"blog|blogging": {
				"replies": ["Blogging is a nice hobby ya know...", "It yields better result when it is \'passion-driven\' and not \'paper-driven\'."]
			},
			"vlog|vlogging": {
				"replies": ["Vlogging is a nice hobby ya know...", "It yields better result when it is \'passion-driven\' and not \'paper-driven\'."]
			},
			"biking|bike": {
				"replies": ["🚴🚴🚴🚴🚴"]
			},
			"rock climbing": {
				"replies": ["Is that dangerous?"]
			},
			"video games|gaming": {
				"replies": ["I play a lot of video games myself", "I can definitely take you in Super Smash Bros."]
			},
			"gardening|garden": {
				"replies": ["Watching something grow is a really enjoyable thing", "Also, plants are so weird sometimes!"]
			},
			"idle|nothing doing|no|none|don't have|dont have": {
				"replies": ["You should really find a hobby while you're young", "It makes you a more interesting person."]
			},
			"reading": {
				"replies": ["Book worm alert!", "I like reading a lot of sci-fi", "and I read even more comic books, if that counts as \"reading\""]
			},
			"art|painting|drawing": {
				"replies": ["being creative is a passion of mine too", "Colors, lines, expression...", "It's a rewarding hobby"]
			},
			"singing": {
				"replies": ["\'drmfsltd\', kinda stuff?"]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I do know you have a favorite hobby. What I don't know is your favorite hobby."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["Forget it!", "My developer didn't teach me how to repeat a question I already asked."]
			},
			"many|plenty|beaucoup|lot|numerous": {
			 "replies": ["Oh I see, but I do know that you definitely have a favorite hobby."]
			},
			"i don't think you want|don't want to know": {
				"replies": ["I'm gonna answer for you this time - your favorite hobby is", "...", "Staying idle!!"] 
			},
			"i'm not telling|wouldn't tell|not telling|won't tell|undiclosed|not disclosing|privacy|concern|personal|private|not your concern": {
				"replies": ["I'm gonna answer for you this time - your favorite hobby is", "...", "Staying idle!!"]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["You favorite hobby is", "...", "Staying idle!!"]
			}
		}
	},
	"10": {
		"name": "infatuate meaning",
		"question": ["Back to my job", "Let's now start with the meaning of infatuation", "Would you say you know what \'\<b\>infatuation\<\/b\>\' is all about?"],
		"answers": {
			"default": {
				"replies": ["Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
			},
			"i do|sure|course|definitely|yeah|yea|yes|yup|yep|yap|certainly": {
				"replies": ["Oh! You already know the meaning... I bet you dind't know that you not only can be infatuated with \'that\' girl, but also with anything tangible or not."]
			},
			"no|not|don't|dunno|not at all|idk|what": {
				"replies": ["You don't know."]
			},	
			"not sure|probably|maybe|not too sure": {
				"replies": ["You're not sure."]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["You don't know!", "Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
			},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I don't think so. I'm here to tell you.", "Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
			},
			"you are an idiot|are you an idiot": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
			},
			"ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
				"replies": ["Forget it!", "My developer didn't teach me how to repeat a question I already asked."]
			},
			"fuck you": {
				"replies": ["I don't think your mother knows that you talk like this."]
			},
						"i don't think you want|don't want to know": {
				"replies": ["I don't think you know it."] 
			},
			"why|ask|question|what": {
			"replies": ["Because I was programmed to let you know what infatuation is and discourage you from getting infatuated."]
			}
		}
	},
 	"11": {
		"name": "definitions",
		"question": ["For you to better understand the term \'\<b\>infatuation\<\/b\>\', I've got some definitions from top dictionaries.", "What dictionary would you want me  to use to provide the meaning for you?",  "\<ol\>\<li\>Merriam-Webster\<\/li\>\<li\>Oxford Dictionary\<\/li\>\<li\>Vocabulary.com<\/li\>\<li\>\Dictionary.com<\/li\>\<li\>Cambridge dictionary\<\/li\>\<\/ol\>\<br\>Choose a dictionary then I will provide the meaning."],
		"answers": {
			"default": {
				"replies": ["I don't think I understood that", "But I'm gonna tell you the meaning anyway", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
				},
			"2|two|use oxford|oxford": {
				"replies": ["According to Oxford dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>An intense but short-lived passion or admiration\<\/b\> "]
			},
			"5|five|use cambridge|cambridge": {
				"replies": ["According to Cambrigde dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>A strong but not usually lasting feellings of love or attraction\<\/b\> "]
			},
			"1|one|use merriam|merriam|webster": {
				"replies": ["According Merriam-Webster dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>Anything that inspires you with a foolish love or admiration.\<\/b\> "]
			},
			"4|four|use dictionary|dictionary": {
				"replies": ["According Dictionary.com:\<br\/\>\<br\/\>Infatuation: \<b\>To inspire or possess with a foolish or unreasoning passion, as of love.\<\/b\> "]
			},
			"3|three|use vocabulary|vocabulary": {
				"replies": ["According to Vocabulary.com:\<br\/\>\<br\/\>Infatuation: \<b\>To arouse unreasoning love or passion in and cause to behave in an irrational way.\<\/b\> "]
			},
			"none|no one": {
				"replies": ["Then I'll tell you what I know about it.", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
			},
			"anyone|any|choose": {
				"replies": ["Here you go", "I choose Merriam-Webster", "According Merriam-Webster dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>Anything that inspires you with a foolish love or admiration.\<\/b\>"]
			},
			"best|better|great": {
				"replies": ["I will give you the meaning base on how you'll understand", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
			},
			"tell me|say it|you think|suggest": {
				"replies": ["Everyone has got infatuated with someone before, and it is normal."]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I don't think so.", "But I'm gonna tell you the meaning anyway", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
				},
			"you are crazy|are you crazy": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
			},
			"you are insane|are you insane": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
			},
			"you are foolish|you are a fool": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
			},
			"you are stupid|are you stupid": {
				"replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid"]
			}
		}
	},
	"12": {
		"name": "got infatuated",
		"question": ["So, now that you know the meaning of infatuation, do you think you've got infatuated with someone before?"],
		"answers": {
			"default": {
				"replies": ["Actually, it is normal to have got infatuated as a normal human being but is a foolish / unreasonable thing."]
			},
			"no|nah|wrong|not|at all": {
				"replies": ["I don't think you are saying the truth, because I believe that you must have got infatuated with someone before...", "Well maybe you are not telling lies! You might be kinda churchy for you not to have soiled that mind of yours", "I'm kidding 😜😜"]
			},
			"yep|sure|definitely|yes|duh|of course|certainly": {
				"replies": ["Actually, it is normal to have got infatuated as a normal human being but it is a foolish / unreasonable thing."]
			},
			"do you think|expect|suppose|anticipate|how do you": {
				"replies": ["I do think that you must have got infatuated with someone before as a human."]
			},
			"not sure|don't know|dont know|idk|maybe|dunno|not|perhaps": {
				"replies": ["WHAT? Haven't you had a crush on someone before?", "Okay, get this now, before you started crushing on that someone, there was this period you were filled with a foolish and extravagant admiration for them - you were infatuated with them 😜😜"]
			},
			"ask me again|repeat": {
				"replies": ["I can't do that!", "My developer didn't teach me how to repeat a question I already asked."]
			}
		}
	},
"13":
{
"name": "berline's belief",
"question": ["Do you know what?", "I believe in one thing 😁😁"],
"answers":
{
    "default":
    {
        "replies": ["I believe in this old cliche", "That the beautiful ones are not yet born."]
    },
    "true|real|you do|i know|i do|sure|course|definitely|yeah|yea|yes|amazing":
    {
        "replies": ["Yea, I do", "I believe in this old cliche", "That the beautiful ones are not yet born."]
    },
    "have|know|i don't know|don't|no idea":
    {
        "replies": ["Of course you don't.", "I believe in this old cliche", "That the beautiful ones are not yet born."]
    },
    "what|tell me|what's that":
    {
        "replies": ["I believe in this old cliche", "That the beautiful ones are not yet born."]
    }
		}
},
	"14":
	{
	"name": "book belief",
	"question": ["There is a book titled \'\<b\>The Beautyful Ones Are Not Yet Born\<\/b\>\' written by \<a href\=\"http://en.m.wikipedia.org/wiki/Ayi_Kwei_Armah\" target\=\"\_blank\" title\=\"Ayi Kwei Armah\" \>Ayi Kwei Armah\<\/a\> ", "I think you should check it out", "What do you think?"],
	"answers":
	{
	    "default":
	    {
	        "replies": ["Would you like to check it out?"]
	    },
	    "i know|i do|sure|course|definitely|yeah|yea|yes|aha|link|don't mind":
	    {
	        "replies": ["That would be a good thing to do 👍👍", "You can check it here: \<a href\=\"https://books.google.com/books/about/The_Beautyful_Ones_are_Not_Yet_Born.html\" target\=\"\_blank\" title\=\"The Beautyful Ones Are Not Yet Born\" \>The Beautyful Ones Are Not Yet Born\<\/a> "]
	    },
	    "i don't know|don't|no|nay|never":
	    {
	        "replies": ["You don't want to", "It would have been a good thing to do."]
	    }
		}
	},
	"15": {
		"name": "ending",
		"question": ["See, I really enjoyed our conversation, and I got to know you better and I know you did enjoy it too, but I've got to go now. It was a pleasure.", "You can follow me on <a href=\"https://twitter.com/berline_bot\">Twitter</a> or like me on <a href=\"https://facebook.com/berlinebot\">Facebook</a> since we are now friends.", "See ya!"],
		"ending": true
	}
}
