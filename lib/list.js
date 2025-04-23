modkeep.list = () => {
    modkeep.loadAll();
    return Object.keys(modkeep.cache);
};

modkeep.printList = (page) => {
    let pageSize = modkeep.get("modkeep/config", {}, (obj) => {
        obj.pageSize ??= 10;
        return obj;
    }).pageSize;
    modkeep.loadAll();
    let fullList = Object.entries(modkeep.cache).sort(([n1], [n2]) =>
        n1.localeCompare(n2),
    );
    let res = fullList.slice((page - 1) * pageSize, page * pageSize);
    let max = Math.ceil(fullList.length / pageSize);
    page = Math.min(page, max);
    if (res.length == 0) return console.log("\u00A76This page is empty.");
    let entries = res
        .map(([name, obj]) => {
            return `\u00A7a${name}\u00A77: \u00A7f${JSON.stringify(obj).length} bytes`;
        })
        .join("\n");
    console.log(
        `${entries}\n\u00A7bPage \u00A7e${page} \u00A7bof \u00A7e${max}`,
    );
};
