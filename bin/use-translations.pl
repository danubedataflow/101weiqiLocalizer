#!/usr/bin/env perl
use strict;
use warnings;
use v5.10;
use open qw(:std :utf8);
use Path::Tiny;
my (@js, %seen);
for (path('translations.tsv')->lines_utf8({ chomp => 1 })) {
    if (/^(.*?)\t([^\t]*)$/) {
        my ($chinese, $translation) = ($1, $2);
        if ($seen{$chinese}++) {
            warn "[$chinese] seen already\n";
        }
        push @js, qq!    "$chinese" : "$translation",!;
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
