export class FetchService{
    fakeFetch(url){
        return new Promise((res,rej)=>{
            res({status:"success"})
        })
    }
}