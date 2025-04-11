modkeep.load = (entry, otherwise) => {
    let content = modcore.fs.read(`storage/keep/${entry}.json`);

    try {
        modkeep.cache[entry] = JSON.parse(content);
    } catch (_) {
        modkeep.cache[entry] = otherwise;
    }
};

modkeep.loadAll = () => {
    modcore.fs
        .dirItemsRecursive("storage/keep")
        .filter((s) => s.endsWith(".json"))
        .map((s) => s.slice(13, -5))
        .forEach((entry) => modkeep.get(entry));
};
