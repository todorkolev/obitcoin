export class Vote{
    voteType: Number;
    pool: number;
    arg1: number[];
    arg2: number[];
    startedBy: number;
    voteState: number;
    endTime: number;
    votedFor: number;
    votedAgainst: number;
    id: number;

    voted : Map<number, boolean>;

    getSuggestion(): string{
        let suggestion : string = "";

        if(this.voteType == 1){
            suggestion+= "";
            for(var i = 0; i<this.arg1.length; i++){
                suggestion += " +"+this.arg2[i]+" tokens to "+this.arg1[i];
            }
        }

        return suggestion;
    }

    getType(): string{
        if(this.voteType == 0) return "Pool parameter change";
        if(this.voteType == 1) return "Token issuing";
        if(this.voteType == 2) return "Pull request";

        return "Unknown vote type";
    }

    getTotalVotes(): number{
        return (this.votedFor + this.votedAgainst);
    }

    getForPercentage(): number{
        if(this.getTotalVotes() == 0) return 0;
        return Number( ((this.votedFor / this.getTotalVotes()) * 100).toFixed(2) );
    }

    getAgainstPercentage(): number{
        if(this.getTotalVotes() == 0) return 0;
        return Number( ((this.votedAgainst / this.getTotalVotes()) * 100).toFixed(2) );
    }

    hasVoted(id: number){
        return this.voted[id];
    }

    isOpen(){
        return this.voteState == 0;
    }
}