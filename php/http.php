<?php
// Get raw text (json here) body of current request
// Form-Data will not be captured here, use $_POST["key"] for that.
$stream = fopen("php://input", "r");
$text = stream_get_contents($stream);
$obj = json_decode($text);


//-----------------------------------------------------------------------


// Get all headeres of current Request
getallheaders();
getallheaders()["header1"];


//-----------------------------------------------------------------------


// Specify options and headers to send with a request
$opts = [
    'http' =>
    [
        'method' => 'POST', // or 'GET'
        'content' => json_encode($data) // $data = ["key1" => "value1", ..]
        'max_redirects' => '0',
        'ignore_errors' => '1',
        'header'=>'Accept-language: en\r\n' .
                  'Cookie: foo=bar\r\n' .
                  'User-agent: BROWSER-DESCRIPTION-HERE\r\n'
    ]
];

// Parse into a context, needed by following functions.
$context = stream_context_create($opts);


//-----------------------------------------------------------------------


// Send GET Request short (get only response body)
// $content will be a plains string containing the response body
$body = file_get_contents("http://coolSite.com");
$body = file_get_contents("http://coolSite.com", $context);


//-----------------------------------------------------------------------


// Send GET/POST Request long (get response headers and body)
$stream = fopen("http://coolSite.com", 'r', false, $context);
// $meta is an array
// HTTP Headers are saved in the field 'wrapper_data' = [0 => "Header1: Value1", 1 => "Header2: Value2", ..]
// So we CANNOT read headers like $meta['wrapper_data']["Header1"];
$meta = stream_get_meta_data($stream);
// $body will be a plain string containg the Response Body
$body = stream_get_contents($stream);


//-----------------------------------------------------------------------


/* Sends a http request to $url and returns the response as an array
    [
        "http_version" => // String
        "status_code"  => // String
        "status_text"  => // String
        "headers"      => ["header1" => "header1_value", "header2" => "header2_value", ..]
        "body"         => // String
    ]
*/
function get(string $url):array{
    $http_header_regex = '/([^:]*):(.*)/';
    $http_response_line_regex = '/(HTTP\/\S*) (\d{3}) (.*$)/';

    $opts = ['http' => ['method' => 'GET'];
    $context = stream_context_create($opts);
    $stream = fopen($url, 'r', false, $context);

    $meta = stream_get_meta_data($stream);
    $body = stream_get_contents($stream);
    fclose($stream);

    preg_match_all($http_response_line_regex, $meta['wrapper_data'][0], $out, PREG_PATTERN_ORDER);
    
    $result = [];
    $result['http_version'] = $out[1][0];
    $result['status_code'] = $out[2][0];
    $result['status_text'] = $out[3][0];

    $headers = array_slice($meta['wrapper_data'], 1);
    foreach ($headers as $text) {
        preg_match_all($http_header_regex, $text, $out, PREG_PATTERN_ORDER);
        $result['headers'][trim($out[1][0])] = trim($out[2][0]);
    }

    $result['body'] = $body;

    return $result;
}