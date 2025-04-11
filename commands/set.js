function main(ctx) {
    let entry = StringArgumentType.getString(ctx, "entry");
    let value = JSON.parse(StringArgumentType.getString(ctx, "value"));

    modkeep.get(entry, {}, (v) => (v = value));
    console.log("\u00A7aValue updated");
}
