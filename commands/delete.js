function main(ctx) {
    let entry = StringArgumentType.getString(ctx, "entry");
    modkeep.delete(entry);
    console.log("\u00A7aEntry deleted");
}
