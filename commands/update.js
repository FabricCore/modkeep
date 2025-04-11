function main(ctx) {
    let entry = StringArgumentType.getString(ctx, "entry");
    let update = StringArgumentType.getString(ctx, "update");

    Core.eval(
        `modkeep.get("${entry}", {}, (obj) => {${update}; return obj;});`,
    );
    console.log("\u00A7aValue updated");
}
