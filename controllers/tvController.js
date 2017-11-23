const array =[1,2,3];
const obj = {};
const tvShows = [
    {
        Id: 1,
        titulo: 'LQ1',
        anio: 2017,
        pais: 'USA'
    },{
        Id: 2,
        titulo: 'LQ2',
        anio: 2015,
        pais: 'GT'
    }
];
const mongoose=require('mongoose');
const TVShow = mongoose.model('TVShow');

obj.getArray =(req,res,next)=>{
    //res.send(tvShows);
    TVShow.find((err,tvShow)=>{
        if(err){
            res.send({error:err})
        }
        res.send(tvShow);
    });
};

obj.postArray=(req,res,next)=>{
    //tvShows.push(req.body);

     let  newTVShow = new TVShow({
         titulo:req.body.titulo,
         anio:req.body.anio,
         pais:req.body.pais
     });

     newTVShow.save(function (err,result) {
            if (err) return handleError(err);
                 res.send(result);
 });


};

obj.getById =(req,res,next) => {

    TVShow.findById(req.params.id,(err,tvShow)=>{
        if(err){
            res.send({error:err})
        }
        res.send(tvShow);
    });
}

obj.deleteTVShow = (req,res,next) => {
    /*
    let indexTvShow = tvShows.findIndex((tvShow) =>  tvShow.Id === Number.parseInt(req.params.id))
    if(indexTvShow < 0)
    {
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }
    let result = tvShows.splice(indexTvShow,1);*/

    TVShow.findByIdAndRemove(req.params.id,(err,tvShow)=>{
        if(err){
            res.send({error:err})
        }
        res.send(tvShow);
    });
}

obj.updateTVShow = (req,res,next) => {
    /*
    let indexTvShow = tvShows.findIndex((tvShow) =>  tvShow.Id === Number.parseInt(req.params.id))
    if(indexTvShow < 0)
    {
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }*/

    TVShow.updateOne({_id:req.params.id},req.body,(err,tvShow)=>{
        if(err){
            res.send({error:err})
        }
        res.send(tvShow);
    });

    //let tvShow = tvshow[indexTvShow];
    //tvshow.anio = req.body.anio;
    //tvshow.pais = req.body.pais;
    //tvshow.titulo = req.body.titulo;

    //tvShows[indexTvShow] = tvshow;


    //res.send(tvShows);
};

// const buidTVShow = (id,body) => {
//     return {
//         Id : id,
//         anio : body.anio,
//         pais: bodu.pais,

//     }
// }



module.exports = obj;
