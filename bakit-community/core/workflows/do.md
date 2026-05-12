<purpose>
Route freeform BA text to exactly one Community command.
</purpose>

<route_table>
- status or progress -> `ba-status`
- next step or continue -> `ba-next`
- new BA work from raw input -> `ba-start intake`
- explicit intake/backbone/stories/srs-lite request -> the matching `ba-start <step>`; when more than one `plans/{slug}-{date}` set exists, require explicit `--slug <slug> --date <date>` using `YYMMDD-HHmm`
- request for modules, collaboration, packaging, publishing, or client delivery -> explain Community scope and point to `docs/comparison.md` and `docs/upgrade.md`
</route_table>
