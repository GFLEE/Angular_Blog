export class Article{
    title:string;
    link:string;
    votes:number;

                                          //votes为可选参数
    constructor(title:string,link:string,votes?:number){
      this.title=title;
      this.link=link;
      this.votes=votes||0;   //vote!=0,则votes=votes，否则为0
    }

    voteUp():boolean{
    
        this.votes+=1;
        return false;
      }
   
      voteDown():boolean{
       this.votes-=1;
       return false;
     }


     domain():string{
      try{
          const link: string = this.link.split('//')[1];
          return link .split('/')[0];
    }
      catch(err){
          return null
      }
     }
}