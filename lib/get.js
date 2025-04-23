modkeep.get = (entry, otherwise, update) => {
    try {
        if (modkeep.cache[entry] == undefined) modkeep.load(entry, otherwise);
    } catch (_) {
        modkeep.cache[entry] = otherwise;
    }

    if (typeof update == "function") {
        let res = update(modkeep.cache[entry]);
        if (res != undefined) {
            modkeep.cache[entry] = res;
        }
    }

    return modkeep.cache[entry];
};

modkeep.contains = (entry) => {
    return (
        modkeep.cache[entry] != undefined ||
        modcore.fs.exists(`storage/keep/${entry}.json`)
    );
};
