var app = new Vue({
  el: '#app',
  data: {
    musics:[],
    cont: 0,
    genSel: "All"
  },
  mounted(){
    //prelevo i dati tramite axios e li inserisco nel mio array
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((mySong)=> {
      while(this.cont < mySong.data.response.length){
        this.musics.push(mySong.data.response[this.cont]);
        this.cont++;
      }
    });

  },
  computed:{
    //funzione per filtrare l'array secondo il genere di appartenenza
    filterGenre(){
      if(this.genSel === "All"){
        return this.musics;
      } else{
        return this.musics.filter((el)=>el.genre === this.genSel);
      }
    }
  }
});
