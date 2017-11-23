module.exports = (app,mongoose)=>{
  const TVShowSchema = new mongoose.Schema({
    titulo:{type:'string'},
    anio:{type:'number'},
    pais:{type:'string'}
  });

  mongoose.model('TVShow',TVShowSchema);
}
