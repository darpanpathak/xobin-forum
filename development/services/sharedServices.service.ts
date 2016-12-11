export class SharedServices{
    selectedPost:any;

    constructor(){}

    setSelectedPost(post:any){
        this.selectedPost = post;
    }

    getSelectedPost(){
        return this.selectedPost;
    }
}