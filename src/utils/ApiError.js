class APiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        error=[],
        stactck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=this.errors

        if(statck){
            this.statck=statck
        } else{
            Error.captureStackTrace(this,this.constructor)
        }
    }

}