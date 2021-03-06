{
  sources ? import ./nix/sources.nix
}:
self: super: {
  synthPackages = {
    rustToolchain = super.rustChannelOf {
      date = "2020-11-17";
      channel = "nightly";
    };

    python = super.python37.withPackages (pp: [
      pp.faker
    ]);

    nixBundle = (import sources.nix-bundle { nixpkgs = self; }).nix-bootstrap;

    mkWrappedToolchain = {
      name
      , buildInputs
      , paths
      , rustToolchain
    }:
      with self.lib; let
        mkFlags = prefix: suffix: xxs:
          lists.foldr (f: s: s + " ${f}") "" (map (lib: "${prefix}${lib}${suffix}") xxs);
        cFlags = mkFlags "-I" "/include" buildInputs;
        ldFlags = mkFlags "-L" "/lib" buildInputs;
        pkgConfigPath = mkFlags "" "/lib/pkgconfig" buildInputs;
        pathPrefix = lists.foldr (p: s: s + "${p}/bin:") "" paths;
      in self.symlinkJoin {
        inherit name;
        paths = [
          rustToolchain.rust
          rustToolchain.rust-src
        ];
        buildInputs = [ self.makeWrapper ];
        postBuild = ''
        for f in $out/bin/**; do
          mv $f $f.unwrapped
          makeWrapper $f.unwrapped $f \
                      --prefix PATH : "${self.pkgconfig}/bin" \
                      --prefix PATH "" "${pathPrefix}" \
                      --prefix PATH ":" "$out/bin" \
                      --prefix NIX_LDFLAGS " " "${ldFlags}" \
                      --prefix NIX_CFLAGS_COMPILE " " "${cFlags}" \
                      --suffix-each PKG_CONFIG_PATH : "${pkgConfigPath}"
        done
        '';
      };

    synth = self.callPackage ./default.nix {
      release = true;
      logLevel = "info";
      backtrace = "1";
    };

    synthpy = self.callPackage ./client/synthpy/default.nix {};
  };

  rustToolchain = self.synthPackages.rustToolchain;
  mkWrappedToolchain = self.synthPackages.mkWrappedToolchain;

  python = self.synthPackages.python;

  synth = self.synthPackages.synth;
  synthpy = self.python.pkgs.toPythonApplication self.synthPackages.synthpy;

  naersk = self.callPackage sources.naersk {
    rustc = self.synthPackages.rustToolchain.rust;
    cargo = self.synthPackages.rustToolchain.rust;
  };
}
