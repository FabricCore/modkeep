modkeep.save = (entry) => {
    if (modkeep.cache[entry] == undefined)
        console.error("No such keep entry loaded");
    else
        modcore.fs.write(
            `storage/keep/${entry}.json`,
            JSON.stringify(modkeep.cache[entry], null, 2),
        );
};

modkeep.saveAll = () => {
    Object.entries(modkeep.cache).forEach(([k, v]) => {
        if (v == undefined) return;
        modcore.fs.write(`storage/keep/${k}.json`, JSON.stringify(v, null, 2));
    });
};
