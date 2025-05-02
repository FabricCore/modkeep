# Keep

Lazy write-on-exit permanent JSON storage.

### Installation

#### Using [pully](https://github.com/FabricCore/pully)

Pully automatically installs **keep** if not present.


#### Require as Dependency

```json
{
  "dependencies": {
    "keep": "0.1.0"
  }
}
```

#### Manual Install

1. [Download **keep**](https://github.com/FabricCore/modtoggle/archive/refs/heads/master.zip).
2. Unzip file content to _.minecraft/config/jscore/modules/keep/_

The folder should look like this

```
.minecraft/config/jscore/
└── modules/
    └── keep/
        └── package.json
```

### Storage Structure

Keep store files in _storage/keep_.

- If entry name contains forward slashes, a folder structure would be used.
- Entries are written to file on exit or reload.

## Commands

#### /keep &lt;entry&gt;

Show entry content.

In the unlikely scenario where the entry name clashes with a subcommand, use **_/keep show &lt;entry&gt;_** to specify the entry name.

#### /keep delete &lt;entry&gt;

Delete an entry.

#### /keep list &lt;page?&gt;

List stored entries.

#### /keep set &lt;entry&gt; &lt;value&gt;

Set an entry to a JSON value, **value** must be a valid JSON object string.

#### /keep update &lt;entry&gt; &lt;updater&gt;

Update an existing entry, updater is the JavaScript code to modify the existing entry - **_obj_**.

```hs
-- Before:
-- {
--   "name": Sirius,
--   "language": Rust
-- }

/keep update "user/sirius" obj.language = "js"; obj.timezone = "GMT";
```

## Developer Guide

#### Getting a Read-only Copy

The code below is used to get a read-only copy of the entry, initialising it to the default value **_{}_** if does not exist.

```js
let entry = modkeep.get("entry/name", {});
```

#### Getting a Read-write Copy

The third argument is an update function. Make sure to **return the updated object** to apply the update.

```js
let _unused = modkeep.get("entry/name", {}, (entry) => {
  entry.title = "Hello World";
  entry.author = "Tom Scott";

  return entry; // apply the update
});
```

#### Enforcing a Schema

To ensure the object always have fields **_title_** and **_author_**.

```js
let entry = modkeep.get("entry/name", {}, (entry) => {
  entry.title ??= "Unknown title";
  entry.author ??= "Unknown author";

  return entry; // apply the update
});
```

## Library Functions

#### modkeep.delete(entry: String);

Delete an entry.

#### modkeep.get(entry: String, otherwise: Object, update: F?)

**\*where F: (obj: Object) → Object**

Reads an entry, sets it to the **_otherwise_** value if it does not exist.

#### modkeep.contains(entry: String) → boolean

Returns true if an entry exists.

#### modkeep.list() → [String]

List all entries. **(Warning, heavy operation)**

#### modkeep.load(entry: String, otherwise: String)

Load a module from file to cache, overwriting the value in cache. **(Warning, not recommended, use *modkeep.get* instead)**

#### mopkeep.save(entry: String)

Write an entry to file, this does not have to be called manually as files are saved automatically on graceful exit.

#### modkeep.saveAll()

Write all entries in cache to file.
