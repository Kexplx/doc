<?php
// Returns all files from subdirectories with full paths
function glob_files_recursiv($dir)
{
    $files = [];
    $glob = glob($dir . "/*");

    foreach ($glob as $item) {
        if (is_dir($item)) {
            $files = array_merge($files, getFiles($item));
        } else {
            $files[] = $item;
        }
    }

    return $files;
}