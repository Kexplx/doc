<?php

usort($counties, function ($a, $b) {
	return $a->CrimeStats->rate < $b->CrimeStats->rate; // if (a < b) swap;
});