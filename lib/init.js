modkeep.init = () => {
    modkeep.get("modkeep/config", {}, (obj) => {
        obj.pageSize = 10;
        return obj;
    });
};
