#!/usr/bin/env perl
use strict;
use warnings;
use v5.10;
use Path::Tiny;
my @js;
for (path('translations.tsv')->lines_utf8({ chomp => 1 })) {
    if (/^(.*?)\t([^\t]*)$/) {
        push @js, sprintf qq!    "%s" : "%s",!, $1, $2;
    } else {
        warn "[$_] does not contain exactly one tab\n";
    }
}
my $js = join "\n", @js;
path('content.js')->edit_utf8(
    sub {
        s/const textReplacements = \{\n\K.*?(?=\n}\n)/$js/s;
    }
);
