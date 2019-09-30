    // Returns 1 if matches were found, 0 if not
    $result = preg_match('/^\.+$/', "..3..");

     // Returns 1 if matches were found, 0 if not
     // Saves found matches in $matches[]
    $result = preg_match('/^\.+$/', "..3..", $matches[]);


    preg_match_all($pattern, $text, $out, PREG_PATTERN_ORDER);
    // 1 .Group = $out[1][0];
    // 2. Group = $out[2][0];
    // ..