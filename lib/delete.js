modkeep.delete = (entry) => {
    delete modkeep.cache[entry];
    modcore.fs.delete(`storage/keep/${entry}.json`);
};
