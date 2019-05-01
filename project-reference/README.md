
Typescript Project Reference

Typescript 3 introduces project references that allows us to structure code into smaller pieces.

This should have automatic VSCode resolution for the types. To run the incremental types build for development, run the below command from the top level project

```bash

npm run watch:types

```

Now to do a type check as a pre-requisite on build time, run

```bash

npm run typecheck

```

