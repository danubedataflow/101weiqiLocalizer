#!/usr/bin/env perl
use strict;
use warnings;
use v5.10;
use Path::Tiny;
my $js = join "\n",
  map { sprintf qq!    "%s" : "%s",!, split /\t/ }
  path('translations.tsv')->lines_utf8({ chomp => 1 });
path('content.js')->edit_utf8(
    sub {
        s/const textReplacements = \{\n\K.*?(?=\n}\n)/$js/s;
    }
);
