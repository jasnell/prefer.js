##### Signed by https://keybase.io/jasnell
```
-----BEGIN PGP SIGNATURE-----
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJVtzxHAAoJEHNBsVwHCHesnOsH/iL9KoqKewAXo/9SzOsTHGx3
9+2jCs1kXXE+OhYpJByRZRbTq6qCRPgPo7vHRWqkfCpliHFvIevYnR2QwyQ5Srkc
nf1bJNRuiyaN0ccVg38QslV8Ln0kFkgT/FHMAH1r6EtR/PqD3erVvJ/B7SItn6B+
9nFfj60PUHw6W7nwPANZXCT1Bm4Ixvhed64ssZtKhoU6qEIr43ftzWfiuUqe7MEb
MYYZaAQzyL47RTlhj5FFrx+3Yqv49Y1uaR1/0my1N3yZSLNZXX1gunz0Y8hcWXLt
CKusBnEmTr41iUCK19r8cmFft05FgAbCg9p3c68Yjn2NEaQ9ZdJUAAtiQxjZIEw=
=ssVL
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file            contents                                                        
            ./                                                                              
13            .gitignore    16d30e4462189fb14dd611bdb708c510630c576a1f35b9383e89a4352da36c97
36            .jshintrc     f85bbd6c2c67d396f37bbb9a9a9da12a9b8b75bdcd16bcc752dbacce045c705d
615           package.json  05554de5ff7889db78296da4af545e392d2d4439bcc44cd6cc2f0f3f2ca56ba5
1914          prefer.js     ab0b87d622148bf9b85d1e968aa3426063546297b905d33dfc9ff4def6de3a24
1103          README.md     06b053f674de7e621b983f6391261f4a0d84e2361b2a54da1809798579d0fa43
              test/                                                                         
1076            test.js     625efb8a8d67336afe2d77a096edf37fdac56cd138b46d73008bc823d2d13c7c
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing