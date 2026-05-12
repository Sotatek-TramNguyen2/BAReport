<purpose>
Recommend the next Community command from the current artifact set.
</purpose>

<rules>
1. no intake -> `ba-start intake`
2. intake exists and no backbone -> `ba-start backbone --slug <slug> --date <date>`
3. backbone exists and no stories -> `ba-start stories --slug <slug> --date <date>`
4. stories exist and no srs-lite -> `ba-start srs-lite --slug <slug> --date <date>`
5. everything exists -> `ba-status --slug <slug> --date <date>`
</rules>
