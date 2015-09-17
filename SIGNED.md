##### Signed by https://keybase.io/jasnell
```
-----BEGIN PGP SIGNATURE-----
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJV+r0TAAoJEHNBsVwHCHesfwAH/jrkRhRB30Ka+HWBUnxYkBrn
WV+fI6dI53rdHACuCmta72xk66dxEuFGEoKnyGOE/CXvFt14Wkm8/PAOtg7C0KkM
O0q8vFCvBbbBzZCmytEbVYzIdeL7G3utN6Ma0LTfalyOwNOc0Ae1Kwu+gRgjQ1x9
uhntQ+Vhnzb2HYOMIx9QkTN7Ipdra6yf3gzstP5PiWbi4Nxg8mEw4hAx2t0grD9I
FxKpjs08A62EopfAq8LHFLj6Xv55hq9zGpwQKd4WLthrKAIEjRe/72dszlg0HHA1
n+ahSX9OQ2LqyZYrr9+M7pMI2ouADFSCA67KWPcUmq+odOamFaqSQcskcfzC98Y=
=yUGQ
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size  exec  file            contents                                                        
            ./                                                                              
13            .gitignore    16d30e4462189fb14dd611bdb708c510630c576a1f35b9383e89a4352da36c97
54            .jshintrc     153a57695fbb2124c1a558f3387d552b9f69eec046d4b9e604cd49aafc238723
615           package.json  8e5d0f37d2bf32d583bc8a63926900f22dcd6900aa9d347a9a326fb635b2c56c
1919          prefer.js     a3734b840ce705f2303026fdf30385779d2cadb55ba7ec2b85492d449a2c63dc
1103          README.md     06b053f674de7e621b983f6391261f4a0d84e2361b2a54da1809798579d0fa43
              test/                                                                         
1087            test.js     2ee0af481be1fce5144bf50d9e12d5040c9049b35a38efa199a90f46165008dd
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