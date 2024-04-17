# This is folder page 1

<link rel="stylesheet" href="../stylesheets/railroad-diagram.css">


```bnf
AlterDatabaseStmt ::=
    'ALTER' 'DATABASE' DBName? DatabaseOptionList

DatabaseOption ::=
    DefaultKwdOpt ( CharsetKw '='? CharsetName | 'COLLATE' '='? CollationName | 'ENCRYPTION' '='? EncryptionOpt )    
```

<div id="railroad-diagram-output"></div>