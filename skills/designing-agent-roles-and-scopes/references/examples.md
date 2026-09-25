# Examples: Designing Agent Roles and Scopes

## Full-stack feature with a three-role split

**Scenario:**

Illustrative scenario: a team is adding saved searches to a web app, touching an API endpoint, a settings page and a new database table.

**Walkthrough:**

The lead maps work areas and finds three clean groups: server code with migrations, client code, and tests. It spawns a backend teammate that owns the server and migrations directories, a frontend teammate that owns the client directory, and a test teammate that owns the test directory. Before implementation, the lead publishes the saved-search API schema as a stub and keeps ownership of that file. The frontend builds against a mock of the schema, and the test teammate writes tests from it.

Each role's exclusions name the other two areas and the schema file. At the end, the lead integrates and runs validation, and no file was edited by more than one teammate.

## Security audit with a read-only reviewer

**Scenario:**

Illustrative scenario: before a release, a lead wants a security pass over an authentication module while another teammate finishes a small refactor in the same module.

**Walkthrough:**

The lead defines a reviewer role from a reusable subagent definition that allows only read and search tools. The refactoring teammate owns the auth module's files, and the reviewer owns nothing. The reviewer's output is a structured report listing each finding with a file, a line reference and a severity. When the reviewer spots an injection risk, it reports it to the lead instead of patching it.

The lead turns the finding into a task for the refactoring teammate, who owns the fix. The reviewer then rechecks the change, keeping its assessment independent of the implementation.

## Repository without natural module boundaries

**Scenario:**

Illustrative scenario: a legacy service keeps most logic in a handful of large files, and the lead wants to add logging, fix a pagination bug and update docs in parallel.

**Walkthrough:**

The lead sees that logging and pagination both touch the same core file, so parallel ownership would collide. It keeps both changes in one implementer role that owns the core files. A second teammate takes a DevOps-style role owning the docs directory and CI config, with the core files listed as exclusions. A third role is dropped entirely because it would have had no separate area to own.

The team ends up with two teammates instead of three, trading some parallelism for zero shared-file edits. The lead notes in the role definitions that this repository needs task-level separation rather than directory-level separation.
