function main(ctx) {
    let entry = StringArgumentType.getString(ctx, "entry");

    if (modkeep.contains(entry)) {
        console.log(`\u00A7e${JSON.stringify(modkeep.get(entry), null, 2)}`);
    } else {
        console.error("Entry not found");
    }
}
