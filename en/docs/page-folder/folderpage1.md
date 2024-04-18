# This is folder page 1

<link rel="stylesheet" href="../stylesheets/railroad-diagram.css">


```bnf
AlterDatabaseStmt ::=
    'ALTER' 'DATABASE' DBName? DatabaseOptionList

DatabaseOption ::=
    DefaultKwdOpt ( CharsetKw '='? CharsetName | 'COLLATE' '='? CollationName | 'ENCRYPTION' '='? EncryptionOpt )    
```

<div class="railroad-diagram-output"></div>