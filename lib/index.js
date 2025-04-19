if (typeof modkeep === "undefined") {
    modkeep = {
        cache: {},
    };
    require("modules/keep/lib/load.js");
    require("modules/keep/lib/get.js");
    require("modules/keep/lib/init.js");
    modkeep.init();
} else {
    modkeep.saveAll();
    modkeep = {
        cache: {},
    };
    require("modules/keep/lib/load.js");
    require("modules/keep/lib/get.js");
    require("modules/keep/lib/init.js");
}

require("modules/keep/lib/createDir.js");
require("modules/keep/lib/delete.js");
require("modules/keep/lib/save.js");
require("modules/keep/lib/list.js");

{
    let saver = yarnwrap.Core.runnable(
        `modkeep-saveall`,
        `function saveall() { modkeep.saveAll(); }`,
    );

    ClientLifecycleEvents.CLIENT_STOPPING.register(saver);
}
