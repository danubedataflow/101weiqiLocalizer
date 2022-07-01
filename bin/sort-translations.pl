#!/usr/bin/env perl
use strict;
use warnings;
use v5.10;
use Path::Tiny;
my $file  = shift // 'translations.tsv';
$file = path($file);
my @lines = $file->lines_utf8;
@lines =
  map  { $_->[1] }
  sort { length($b->[0]) <=> length($a->[0]) || $b->[0] cmp $a->[0] }
  map  { [ s/\t.*//r, $_ ] } @lines;
$file->spew_utf8(@lines);
