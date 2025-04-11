Command.register({
    package: "modules/keep/commands",
    name: "keep",

    args: {
        entry: {
            type: StringArgumentType.greedyString(),
            execute: "show.js",
        },
    },

    subcommands: {
        show: {
            args: {
                entry: {
                    type: StringArgumentType.greedyString(),
                    execute: "show.js",
                },
            },
        },
        delete: {
            args: {
                entry: {
                    type: StringArgumentType.greedyString(),
                    execute: "delete.js",
                },
            },
        },
        list: {
            execute: "listOne.js",
            args: {
                entry: {
                    type: IntegerArgumentType.integer(1),
                    execute: "list.js",
                },
            },
        },
        set: {
            args: {
                entry: {
                    type: StringArgumentType.string(),
                    args: {
                        value: {
                            type: StringArgumentType.greedyString(),
                            execute: "set.js",
                        },
                    },
                },
            },
        },
        update: {
            args: {
                entry: {
                    type: StringArgumentType.string(),
                    args: {
                        update: {
                            type: StringArgumentType.greedyString(),
                            execute: "update.js",
                        },
                    },
                },
            },
        },
    },
});
