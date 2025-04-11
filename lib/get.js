modkeep.get = (entry, otherwise, update) => {
    try {
        if (modkeep.cache[entry] == undefined) modkeep.load(entry, otherwise);
    } catch (_) {
        modkeep.cache[entry] = otherwise;
    }

    if (typeof update == "function") {
        modkeep.cache[entry] = update(modkeep.cache[entry]);
    }

    return modkeep.cache[entry];
};

modkeep.contains = (entry) => {
    return (
        modkeep.cache[entry] != undefined ||
        modcore.fs.exists(`storage/keep/${entry}.json`)
    );
};
