class ApiFeature {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search(query) {
        query = query ? {
            $regex: query.keyword,
            $option: "i"
        } : {}
        this.query = this.query.find({ ...query });
    }
    filter(){
        
    }
}