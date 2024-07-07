#!/usr/bin/env perl
use strict;
use warnings;
use v5.10;
use open qw(:std :utf8);
use Path::Tiny;
my $file = shift // 'translations.tsv';
my (@js, %seen);
$file = path($file);
my @lines = $file->lines_utf8({ chomp => 1 });

# sort lines by descending length; ignore comments and empty lines
@lines =
  map  { $_->[1] }
  sort { length($b->[0]) <=> length($a->[0]) || $b->[0] cmp $a->[0] }
  map  { [ s/\t.*//r, $_ ] }
  grep { /^(?!#)\S/ } @lines;

# use lines
for (@lines) {
    if (/^(.*?)\t([^\t]*)$/) {
        my ($chinese, $translation) = ($1, $2);
        if ($seen{$chinese}++) {
            warn "$chinese seen already\n";
        }
        push @js, qq!    "$chinese" : "$translation",!;
    } else {
        warn "$_ does not contain exactly one tab\n";
    }
}
my $js = join "\n", @js;
path('content.js')->edit_utf8(
    sub {
        s/const textReplacements = \{\n\K.*?(?=\n}\n)/$js/s;
    }
);

=pod

Takes the file with translations, ignores comments and empty lines, sorts them
by descending length and writes them to content.js.

=cut

