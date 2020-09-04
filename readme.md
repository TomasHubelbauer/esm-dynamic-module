# ESM Dynamic Module

I have a structure of files which all use ESM among themselves.
The entry file is supposed to be able to receive a parameter (like an HOC)
which is to be made available to all referenced modules, too, as if there
was an extra file which was dynamic within the structure.

In order to avoid making all imports dynamic and all imported modules HOCs,
I'm wondering if the entry point could be made such that it fill a place-
holder module instead and then loads its references which will be able to
use the placeholder with now provided data.

## Conclusion

It works!

- `node entry.js` provides the shared data dynamically
- The `shared.js` module is filled with the provided dynamic data
- `index.js` is loaded dynamically and returned
- All referenced modules starting from `index.js` see dynamic `shared.js`
