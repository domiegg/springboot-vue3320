const base = {
    get() {
        return {
            url : "http://localhost:8080/wurenchangku/",
            name: "wurenchangku",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wurenchangku/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "仓库管理系统"
        } 
    }
}
export default base
