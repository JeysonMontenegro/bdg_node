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
mongoose.Promise = require('bluebird');
const TVShow = mongoose.model('TVShow');



const todos =()=>{
    /*return new Promise( (resolve,reject)=>{
        TVShow.find()
        .then(tvShow => {
            return resolve(tvShow);
        })
        .catch( err=> {
            return reject({error:err});
        })*/
        return TVShow.find();

        /*TVShow.find((err,tvshows)=>{
            if(err){
                return reject({error:err});
            }
            return resolve(tvshows);
        })*/
}

const todos1=(tvshows)=>{
    return new Promise((resolve,reject) =>{
        if(tvshows.length < 0){
            return reject('NO hay datos')
        }
        return resolve({data:tvshows.length});
    })
}

obj.getArray =(req,res,next)=>{
    //res.send(tvShows);
    TVShow.find()
    .then(tvshows => todos1(tvshows))
    .then(resultado =>res.send(resultado))
    .catch(err => res.send({error:err}))
}

/*
obj.getArray =(req,res,next)=>{
    //res.send(tvShows);
    TVShow.find()
    .then(tvShow => {
        return res.send(tvShow);
    })
    .catch( err=> {
        return res.send({error:err});
    })
};
*/
obj.postArray=(req,res,next)=>{
    //tvShows.push(req.body);

     let  newTVShow = new TVShow({
         titulo:req.body.titulo,
         anio:req.body.anio,
         pais:req.body.pais
     });

     newTVShow.save()
     .then(result=>  res.send(result))
     .catch(err => handleError(err));
};

obj.getById =(req,res,next) => {
    TVShow.findById(req.params.id)
    .then(tvShow=>res.send(tvShow))
    .catch(err => res.send({error:err}))
}

obj.deleteTVShow = (req,res,next) => {
    /*
    let indexTvShow = tvShows.findIndex((tvShow) =>  tvShow.Id === Number.parseInt(req.params.id))
    if(indexTvShow < 0)
    {
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }
    let result = tvShows.splice(indexTvShow,1);*/

    TVShow.findByIdAndRemove(req.params.id)
    .then(tvShow =>res.send(tvShow))
    .catch (err => res.send({error:err}))
}

obj.updateTVShow = (req,res,next) => {
    /*
    let indexTvShow = tvShows.findIndex((tvShow) =>  tvShow.Id === Number.parseInt(req.params.id))
    if(indexTvShow < 0)
    {
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }*/

    TVShow.updateOne({_id:req.params.id},req.body)
    .then(tvShow =>res.send(tvShow))
    .catch (err => res.send({error:err}))

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
