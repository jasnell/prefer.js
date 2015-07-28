##### Signed by https://keybase.io/jasnell
```
-----BEGIN PGP SIGNATURE-----
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJVtzveAAoJEHNBsVwHCHes/UQH/2kuol+vdQEcACGYGsPyGLsL
mWpQoqonsBSt/0LX1XrIITikLdQ0yXLD7wt4OVwMb/VP/fi8HEAVucHGEHWn0QQQ
yXVWiMghJr9g6F+1agIaNg415RV4A+5YsUEG1JkgXzTqo+F5GvkGrqYDMYRSWOIP
G6FU5c9wTtY/wcFRfTL2cg1ZyjPy/OupHQslTLHdg0fLTus/Otic3P6uIF8O29XD
TL+g0LL8O+1nJg05VeA/6g8wz7fkQauKJpyUhfuoG6kLWWR5cA9M7a/Kv6Xr7mei
cQgQbWbCHX/cMfaHzHkw3D7BxTD53GIOOMTptdj4vv8yhVmlnn9Kc+8JWOxvGeo=
=Zebx
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
615           package.json  1c1c7bebb1060ef3687a36076e89cebf0d4de80db7fa46daa17adf8c4064549c
1914          prefer.js     ab0b87d622148bf9b85d1e968aa3426063546297b905d33dfc9ff4def6de3a24
1103          README.md     a54e92118f57cd85a751cbf5f06443f102a45ad5ff2139334ca65244da1ff6fd
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