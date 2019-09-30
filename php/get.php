<?
function get(string $url):array{
    $http_header_regex = '/([^:]*):(.*)/';
    $http_response_line_regex = '/(HTTP\/\S*) (\d{3}) (.*$)/';

    $result = [];
    $opts = [
        'http' =>
        [
            'method' => 'GET',
            'max_redirects' => '0',
            'ignore_errors' => '1'
        ]
    ];
    
    $context = stream_context_create($opts);
    $stream = fopen($url, "r", false, $context);

    $meta = stream_get_meta_data($stream);
    $body = stream_get_contents($stream);
    fclose($stream);

    preg_match_all($http_response_line_regex, $meta["wrapper_data"][0], $out, PREG_PATTERN_ORDER);
    $result["http_version"] = $out[1][0];
    $result["status_code"] = $out[2][0];
    $result["status_text"] = $out[3][0];

    $headers = array_slice($meta["wrapper_data"], 1);
    foreach ($headers as $text) {
        preg_match_all($http_header_regex, $text, $out, PREG_PATTERN_ORDER);
        $result["headers"][trim($out[1][0])] = trim($out[2][0]);
    }

    $result["body"] = $body;

    return $result;
}