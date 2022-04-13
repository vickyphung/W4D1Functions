// W4 D2: Radio Object Copy 2
// Create a new HTML/CSS/JS repl (Links to an external site.) (Links to an external site.) page and complete the following in your .js file
// Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)


class Radio {
    constructor(stations){
      this.stations = stations
      //array of station class objects
    }
    
    changeStation(){
      let stationIdx = Math.floor(Math.random() * this.stations.length)
      console.log(this.stations[stationIdx].name)
      this.stations[stationIdx].changeSong()
    }
  }
  
  class Station {
    constructor(name, songs){
      this.name = name
      this.songs = songs
      // array of song class objects
    }
    changeSong(){
      let songIdx = Math.floor(Math.random() * this.songs.length)
      console.log("Now Playing " + this.songs[songIdx].title + " by " + this.songs[songIdx].artist)
    }
  }

  class Song {
      constructor(title, artist){
          this.title = title
          this.artist = artist
      }
  }
  
  
  let songs = [{title: "O mio babbino caro", artist: "Maria callas"}, {title: "O mio babbino caro", artist: "Maria callas"}, {title: "O mio babbino caro", artist: "Maria callas"}, {title: "O mio babbino caro", artist: "Maria callas"}, {title: "O mio babbino caro", artist: "Maria callas"}, {title: "O mio babbino caro", artist: "Maria callas" }]
  
  let stations = [{name: "Station One", songs: songs}, {name: "Station Three", songs: songs}, {name: "Station Four", songs: songs}]
  let classStations = []
  
    
    stations.forEach(song => {
    let ns = new Station(song.name, song.songs)
    classStations.push(ns)
    })
    
    const myRadio = new Radio (classStations)

  
    myRadio.changeStation()
       
