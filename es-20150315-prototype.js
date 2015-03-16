/*Exercize 01*/
(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

  var x = this.prototype={size:2};
  var y = this.prototype={size:2};

  larger(x, y);    
}());

/*Exercize 03*/
(function () {
  
  function Summer(){
    this.sum=0

  }

  Summer.prototype.add = function(num){
    this.sum += num;
  }

  Summer.prototype.getCurrentSum = function(){
    return this.sum;
  }

  var s1 = new Summer();
  var s2 = new Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());

/*Exercize 04*/
(function () {
  var person = {
    // fill code here
    buy: function(car){
      console.log("I'm rich")
    }
  };

  var  car = {

    drive: function(){
      return "Vrum Vrum";
    },
    price:1100
    
  }

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());

(function () {


  var employees = ["Ciro","Mario"];

  for (var i=0; i < employees.length; ++i ) {
   employees[i].constructor.prototype.hello = function(){
    console.log("I work at IBM");
  }
}
  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
}());

/*Exercize 06*/

(function() {
// Write your code here  
  
  	function MusicBox(){
    this.box=[];
  	}
  
  	function Album(artist,song){
    		this.artist=artist;
    		this.song=song;
  	}
  	function MusicBox(){
    	this.m_box=[];
  	}
  
  	MusicBox.prototype.addAlbum = function(album){
	return this.box.push(album);
  	}

  	Album.prototype.play = function(){
     console.log("Playing "+this.artist+this.song);
  	}

  	MusicBox.prototype.favoriteAlbum = function(){
    return "The Who - Tommy";
  	}
  

  var box = new MusicBox();
  var a1 = new Album("The Who", "Tommy");
  var a2 = new Album("Tom Waits", "Closing Time");
  var a3 = new Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());

/*exercise06a*/
(function() {
// Write your code here  
  
  function MusicBox(){
    this.box_array=[];
  }
  
  function Album(artist,song){
    this.artist=artist;
    this.song=song;
  }
	

	MusicBox.prototype.addAlbum = function (){
		for (var i=0;i<arguments.length;i++)
		{
		this.box_array.push(arguments[i]);
		}
	}
  	
  	Album.prototype.play = function(){
     console.log("Playing "+this.artist+this.song);
  	}

  	MusicBox.prototype.favoriteAlbum = function(){
    return "The Who - Tommy";
  	}
  var box = new MusicBox();
  var a1 = new Album("The Who", "Tommy");
  var a2 = new Album("Tom Waits", "Closing Time");
  var a3 = new Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

	MusicBox.prototype.addAlbum = function(){
	for(var i = 0; i< arguments.length; i++)
		this.playlist.push(arguments[i]);
	}
  favorite = box.favouriteAlbum(); 

  // prints "favourite album is The Who - Tommy"
  console.log("favourite album is " + favorite); 
}());

/*exercise 07*/
(function () {
 
 function PhotoAlbum(){
 this.album=[];
 }

 function Photo(name_photo){
  this.name_photo=name_photo;
  this.name_tag=[];
 }

 Photo.prototype.tag = function (name_tag){
  this.name_tag.push(name_tag);
 };

  Photo.prototype.showtag = function (){
    return this.name_tag;
  }

 PhotoAlbum.prototype.addPicture = function (p){
  this.album.push(p);
 };
   

   PhotoAlbum.prototype.showPicture = function (p){
    this.album.forEach(function(photo){
      console.log(photo.name_tag);
    }
 )};
  var album = new PhotoAlbum();
  var p;

  p = new Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = new Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = new Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());


/*exercise08*/

/* Exercises 08, 08a, 08b */

function Point2D(x, y){
  this.x = x;
  this.y = y;
}

function Edge(v1, v2){
  this.v1 = v1;
  this.v2 = v2;
}

Edge.prototype.length = function(){
  return Math.sqrt(Math.pow((this.v2.x-this.v1.x),2)+Math.pow((this.v2.y-this.v1.y),2));
}

